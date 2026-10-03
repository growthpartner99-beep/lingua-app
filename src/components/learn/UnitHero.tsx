import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { getUnitImage } from "@/constants/images";
import { colors } from "@/theme/tokens/colors";
import type { Unit } from "@/types/learning";

type UnitHeroProps = {
  unit: Unit;
  subtitle: string;
  onBack: () => void;
  onSwitchUnit: () => void;
};

export function UnitHero({
  unit,
  subtitle,
  onBack,
  onSwitchUnit,
}: UnitHeroProps) {
  const [isSaved, setIsSaved] = useState(true);

  return (
    <View>
      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Go back"
          accessibilityRole="button"
          hitSlop={8}
          onPress={onBack}
          style={styles.iconButton}
        >
          <Feather name="chevron-left" size={26} color={colors.text.primary} />
        </Pressable>

        <Pressable
          accessibilityLabel="Choose another unit"
          accessibilityRole="button"
          hitSlop={8}
          onPress={onSwitchUnit}
          style={styles.titleBlock}
        >
          <View style={styles.titleRow}>
            <Text numberOfLines={1} style={styles.title}>
              {unit.title}
            </Text>
            <Feather
              name="chevron-down"
              size={18}
              color={colors.text.secondary}
            />
          </View>
          <Text numberOfLines={1} style={styles.subtitle}>
            {subtitle}
          </Text>
        </Pressable>

        <Pressable
          accessibilityLabel={isSaved ? "Remove bookmark" : "Bookmark unit"}
          accessibilityRole="button"
          hitSlop={8}
          onPress={() => setIsSaved((value) => !value)}
          style={styles.bookmark}
        >
          <MaterialIcons
            color={isSaved ? "#FFC800" : colors.text.secondary}
            name={isSaved ? "bookmark" : "bookmark-border"}
            size={26}
          />
        </Pressable>
      </View>

      <View style={styles.backdrop}>
        <Image
          resizeMode="contain"
          source={getUnitImage(unit.id)}
          style={styles.illustration}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  iconButton: {
    marginTop: 6,
    marginRight: 8,
  },
  titleBlock: {
    flex: 1,
    marginRight: 8,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 30,
    color: colors.text.primary,
  },
  subtitle: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 2,
    color: colors.text.secondary,
  },
  bookmark: {
    marginTop: 4,
  },
  backdrop: {
    height: 216,
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    backgroundColor: "#E8F2FD",
  },
  illustration: {
    width: "100%",
    height: 200,
  },
});
