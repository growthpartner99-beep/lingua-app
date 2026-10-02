import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { images } from "@/constants/images";

export function AuthMascot() {
  return (
    <View className="relative mt-5 h-[125px] w-full overflow-hidden">
      <View className="flex-row justify-center">
        <Image source={images.mascotAuth} style={styles.mascot} />
      </View>

      <View className="absolute left-[104px] top-[18px] h-[20px] w-[20px] items-center justify-center">
        <MaterialCommunityIcons name="star-four-points" size={15} color="#F0AD1C" />
      </View>

      <View className="absolute right-[94px] top-[25px] h-[20px] w-[20px] items-center justify-center">
        <MaterialCommunityIcons name="star-four-points" size={16} color="#7EB8F6" />
      </View>

      <View className="absolute right-[105px] top-[57px] h-[22px] w-[22px] items-center justify-center">
        <MaterialCommunityIcons name="star-four-points" size={18} color="#F8D95A" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mascot: {
    width: 291,
    height: 291,
    marginTop: -52,
    marginLeft: 19,
    transform: [{ scaleX: -1 }],
  },
});
