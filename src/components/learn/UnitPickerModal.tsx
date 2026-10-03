import { Feather } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { getLessonsByUnit } from "@/data/lessons";
import { colors } from "@/theme/tokens/colors";
import type { Unit } from "@/types/learning";

type UnitPickerModalProps = {
  visible: boolean;
  units: Unit[];
  selectedUnitId: string;
  onSelect: (unitId: string) => void;
  onClose: () => void;
};

export function UnitPickerModal({
  visible,
  units,
  selectedUnitId,
  onSelect,
  onClose,
}: UnitPickerModalProps) {
  return (
    <Modal
      animationType="fade"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <Pressable style={styles.backdrop} onPress={onClose}>
        <Pressable style={styles.sheet}>
          <View style={styles.handle} />

          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Choose a unit</Text>
            <Pressable accessibilityLabel="Close" hitSlop={8} onPress={onClose}>
              <Feather
                name="x"
                size={22}
                color={colors.text.secondary}
              />
            </Pressable>
          </View>

          {units.map((unit) => {
            const isSelected = unit.id === selectedUnitId;
            const lessonCount = getLessonsByUnit(unit.id).length;

            return (
              <Pressable
                accessibilityRole="button"
                key={unit.id}
                onPress={() => {
                  onSelect(unit.id);
                  onClose();
                }}
                style={[styles.row, isSelected && styles.rowSelected]}
              >
                <View style={[styles.icon, { backgroundColor: `${unit.color}1F` }]}>
                  <Text style={styles.iconText}>{unit.icon}</Text>
                </View>

                <View style={styles.rowBody}>
                  <Text
                    numberOfLines={1}
                    style={[styles.rowTitle, isSelected && styles.rowTitleSelected]}
                  >
                    {unit.title}
                  </Text>
                  <Text style={styles.rowMeta}>
                    Unit {unit.order} · {lessonCount} lessons
                  </Text>
                </View>

                {isSelected && (
                  <Feather
                    name="check-circle"
                    size={20}
                    color={colors.primary.purple}
                  />
                )}
              </Pressable>
            );
          })}
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(13, 19, 43, 0.45)",
  },
  sheet: {
    backgroundColor: colors.neutral.background,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 34,
  },
  handle: {
    alignSelf: "center",
    width: 44,
    height: 5,
    borderRadius: 3,
    backgroundColor: colors.border.default,
    marginBottom: 14,
  },
  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sheetTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: colors.text.primary,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border.default,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop: 10,
  },
  rowSelected: {
    borderColor: colors.primary.purple,
    backgroundColor: "#F7F5FF",
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 20,
  },
  rowBody: {
    flex: 1,
    marginHorizontal: 12,
  },
  rowTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: colors.text.primary,
  },
  rowTitleSelected: {
    color: colors.primary.purple,
  },
  rowMeta: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    marginTop: 2,
    color: colors.text.secondary,
  },
});
