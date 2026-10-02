import { useMemo, useState } from "react";
import { router, Stack } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import type { Language, LanguageId } from "@/types/learning";

export default function LanguageSelectionScreen() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<LanguageId>("es");

  const filteredLanguages = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return languages;

    return languages.filter(
      (language) =>
        language.name.toLowerCase().includes(normalized) ||
        language.nativeName.toLowerCase().includes(normalized)
    );
  }, [query]);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  const handleConfirm = () => {
    // Selected language persistence lands with the Zustand store feature.
    handleBack();
  };

  const isSearching = query.trim().length > 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-6">
          <View className="relative mt-1 h-12 items-center justify-center">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleBack}
              className="absolute -left-2.5 h-10 w-10 items-center justify-center"
            >
              <Feather name="chevron-left" size={30} color="#0D132B" />
            </TouchableOpacity>

            <Text className="font-poppins-bold text-[20px] text-text-primary">
              Choose a language
            </Text>
          </View>

          <View className="mt-4 h-[52px] flex-row items-center rounded-full border border-border-default px-5">
            <Feather name="search" size={20} color="#9CA3AF" />
            <TextInput
              className="ml-3 h-[52px] flex-1 p-0 font-poppins-regular text-[16px] text-text-primary"
              value={query}
              onChangeText={setQuery}
              placeholder="Search languages"
              placeholderTextColor="#9CA3AF"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {!isSearching && (
            <Text className="mt-6 font-poppins-semibold text-[17px] text-text-primary">
              Popular
            </Text>
          )}

          <View className="mt-3 space-y-3">
            {filteredLanguages.map((language) => (
              <LanguageCard
                key={language.id}
                language={language}
                selected={language.id === selectedId}
                onPress={() => setSelectedId(language.id)}
              />
            ))}

            {filteredLanguages.length === 0 && (
              <Text className="py-6 text-center font-poppins-regular text-[15px] text-text-secondary">
                No languages found. Try another search.
              </Text>
            )}
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleConfirm}
            className="mt-6 h-[60px] items-center justify-center rounded-2xl bg-primary-purple"
          >
            <Text className="font-poppins-semibold text-[17px] text-text-on-accent">
              Confirm
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-8 h-[230px] w-full overflow-hidden">
          <Image
            source={images.earth}
            resizeMode="cover"
            style={styles.earthImage}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type LanguageCardProps = {
  language: Language;
  selected: boolean;
  onPress: () => void;
};

function LanguageCard({ language, selected, onPress }: LanguageCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      className={`flex-row items-center rounded-2xl px-4 py-4 ${
        selected
          ? "border-2 border-primary-purple bg-[#F4F1FE]"
          : "border border-border-default bg-white"
      }`}
      style={styles.cardShadow}
    >
      <LanguageFlag language={language} />

      <View className="ml-4 flex-1">
        <Text className="font-poppins-semibold text-[17px] text-text-primary">
          {language.name}
        </Text>
        <Text className="mt-0.5 font-poppins-regular text-[14px] text-text-secondary">
          {language.learners} learners
        </Text>
      </View>

      {selected ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-primary-purple">
          <Feather name="check" size={15} color="#FFFFFF" />
        </View>
      ) : (
        <Feather name="chevron-right" size={22} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );
}

/**
 * Flag emojis do not render on Android or on web, so each flag is
 * drawn with plain views to match the circular flags in the design.
 */
function LanguageFlag({ language }: { language: Language }) {
  if (language.id === "es") {
    return (
      <View className="h-11 w-11 overflow-hidden rounded-full">
        <View className="h-1/4 bg-[#C60B1E]" />
        <View className="h-1/2 bg-[#FFC400]" />
        <View className="h-1/4 bg-[#C60B1E]" />
      </View>
    );
  }

  if (language.id === "fr") {
    return (
      <View className="h-11 w-11 flex-row overflow-hidden rounded-full">
        <View className="h-full w-1/3 bg-[#0055A4]" />
        <View className="h-full w-1/3 bg-white" />
        <View className="h-full w-1/3 bg-[#EF4135]" />
      </View>
    );
  }

  return (
    <View className="h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-border-default bg-white">
      <View className="h-[20px] w-[20px] rounded-full bg-[#BC002D]" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 0,
  },
  cardShadow: {
    shadowColor: "#0D132B",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  earthImage: {
    width: "100%",
    height: 390,
    marginTop: -55,
  },
});
