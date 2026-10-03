import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { images } from "@/constants/images";

type SocialProvider = "google" | "facebook" | "apple";

type SocialAuthButtonsProps = {
  onPress?: (provider: SocialProvider) => void;
};

export function SocialAuthButtons({ onPress }: SocialAuthButtonsProps) {
  return (
    <View className="mt-4 gap-2">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress?.("google")}
        className="h-[58px] flex-row items-center gap-6 rounded-[14px] border border-border-default pl-10"
      >
        <View className="h-[28px] w-[28px] items-center justify-center">
          <Image source={images.googleIcon} style={styles.googleIcon} />
        </View>
        <Text className="font-poppins-medium text-[16px] text-text-primary">
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress?.("facebook")}
        className="h-[58px] flex-row items-center gap-6 rounded-[14px] border border-border-default pl-10"
      >
        <View className="h-[28px] w-[28px] items-center justify-center">
          <FontAwesome5 name="facebook" size={28} color="#1877F2" />
        </View>
        <Text className="font-poppins-medium text-[16px] text-text-primary">
          Continue with Facebook
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress?.("apple")}
        className="h-[58px] flex-row items-center gap-6 rounded-[14px] border border-border-default pl-10"
      >
        <View className="h-[28px] w-[28px] items-center justify-center">
          <FontAwesome5 name="apple" size={26} color="#0D132B" />
        </View>
        <Text className="font-poppins-medium text-[16px] text-text-primary">
          Continue with Apple
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  googleIcon: {
    width: 26,
    height: 26,
  },
});
