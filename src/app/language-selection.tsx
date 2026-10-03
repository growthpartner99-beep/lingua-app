import { useMemo, useState } from "react";
import { router, Stack } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import type { Language, LanguageId } from "@/types/learning";
import { useLanguageStore } from "@/store/language";
import { LanguageFlag } from "@/components/LanguageFlag";

export default function LanguageSelectionScreen() {
  const [query, setQuery] = useState("");
  const { width: windowWidth } = useWindowDimensions();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const setSelectedLanguage = useLanguageStore((state) => state.setSelectedLanguage);
  const [localSelectedId, setLocalSelectedId] = useState<LanguageId | null>(null);
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  const selectedId = userHasInteracted && localSelectedId ? localSelectedId : selectedLanguage;

  const handleLanguagePress = (languageId: LanguageId) => {
    setLocalSelectedId(languageId);
    setUserHasInteracted(true);
  };

  const removeDiacritics = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const filteredLanguages = useMemo(() => {
    const normalized = removeDiacritics(query.trim().toLowerCase());
    if (!normalized) return languages;

    return languages.filter(
      (language) =>
        removeDiacritics(language.name.toLowerCase()).includes(normalized) ||
        removeDiacritics(language.nativeName.toLowerCase()).includes(normalized)
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
    setSelectedLanguage(selectedId);
    handleBack();
  };

  const isSearching = query.trim().length > 0;

  // earth.png is a 1254x1254 square, but the illustration inside it only
  // spans y216-1038. We show exactly that content strip flush at the bottom.
  const earthFooterHeight = windowWidth / 1.5255;
  const earthImageSize = windowWidth;
  const earthImageOffset = -windowWidth * 0.1723;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        className="flex-1"
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
            <Text className="mt-5 font-poppins-semibold text-[17px] text-text-primary">
              Popular
            </Text>
          )}

          <View className="mt-4 flex flex-col gap-1">
            {filteredLanguages.map((language) => (
              <LanguageCard
                key={language.id}
                language={language}
                selected={language.id === selectedId}
                onPress={() => handleLanguagePress(language.id)}
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
            className="mt-5 h-[60px] items-center justify-center rounded-[20px] bg-primary-purple"
          >
            <Text className="font-poppins-semibold text-[17px] text-text-on-accent">
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View
        style={[styles.earthFooter, { height: earthFooterHeight }]}
      >
        <Image
          source={images.earth}
          resizeMode="cover"
          style={{
            width: earthImageSize,
            height: earthImageSize,
            marginTop: earthImageOffset,
          }}
        />
      </View>
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
      className={`flex-row items-center rounded-[20px] px-4 py-4 ${
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
        <View className="h-[28px] w-[28px] items-center justify-center rounded-full bg-primary-purple">
          <Feather name="check" size={15} color="#FFFFFF" />
        </View>
      ) : (
        <Feather name="chevron-right" size={22} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 16,
  },
  cardShadow: {
    shadowColor: "#0D132B",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  earthFooter: {
    width: "100%",
    overflow: "hidden",
  },
});
