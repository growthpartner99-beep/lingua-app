import type { ComponentProps } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/theme/tokens/colors";

type PlaceholderScreenProps = {
  title: string;
  description: string;
  icon: ComponentProps<typeof Feather>["name"];
};

export function PlaceholderScreen({
  title,
  description,
  icon,
}: PlaceholderScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 items-center justify-center px-10">
        <View className="h-20 w-20 items-center justify-center rounded-[28px] bg-[#F4F1FE]">
          <Feather name={icon} size={36} color={colors.primary.purple} />
        </View>

        <Text className="mt-6 font-poppins-semibold text-[22px] text-text-primary">
          {title}
        </Text>

        <Text className="mt-2 text-center font-poppins-regular text-[14px] leading-[22px] text-text-secondary">
          {description}
        </Text>

        <View className="mt-5 rounded-full bg-neutral-surface px-4 py-1.5">
          <Text className="font-poppins-medium text-[11px] text-text-secondary">
            Coming soon
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: colors.neutral.background,
  },
};
