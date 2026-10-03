import { Image, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { images } from "@/constants/images";
import { LanguageFlag } from "@/components/LanguageFlag";
import { colors } from "@/theme/tokens/colors";
import type { Language } from "@/types/learning";

type HomeHeaderProps = {
  language: Language;
  name: string;
  streak: number;
};

export function HomeHeader({ language, name, streak }: HomeHeaderProps) {
  return (
    <View className="flex-row items-center px-6 pt-3">
      <LanguageFlag language={language} size={34} />

      <Text
        numberOfLines={1}
        className="ml-2 flex-1 font-poppins-semibold text-[17px] text-text-primary"
      >
        {language.greeting}, {name}! 👋
      </Text>

      <View className="flex-row items-center">
        <Image
          source={images.streakFire}
          resizeMode="contain"
          style={styles.streakIcon}
        />
        <Text className="ml-1 font-poppins-semibold text-[16px] text-text-primary">
          {streak}
        </Text>
      </View>

      <Feather
        name="bell"
        size={22}
        color={colors.text.primary}
        style={styles.bell}
      />
    </View>
  );
}

const styles = {
  streakIcon: {
    width: 26,
    height: 26,
  },
  bell: {
    marginLeft: 16,
  },
};
