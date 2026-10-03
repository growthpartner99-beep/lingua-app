import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import type { PlanItem } from "@/hooks/useHomeData";
import type { PlanItemId } from "@/store/progress";

type TodaysPlanProps = {
  items: PlanItem[];
  onToggle: (id: PlanItemId) => void;
};

export function TodaysPlan({ items, onToggle }: TodaysPlanProps) {
  return (
    <View style={styles.section}>
      <View className="ml-4 flex-row items-center justify-between">
        <Text className="font-poppins-bold text-[18px] text-text-primary">
          {"Today's plan"}
        </Text>
        <Text className="font-poppins-semibold text-[15px] text-primary-purple">
          View all
        </Text>
      </View>

      <View style={styles.list}>
        {items.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => onToggle(item.id)}
            style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
          >
            <View style={[styles.iconBox, { backgroundColor: item.tint }]}>
              {item.icon === "chat" ? (
                <Ionicons name="chatbubble-ellipses" size={20} color="#FFFFFF" />
              ) : (
                <Feather name={item.icon} size={20} color="#FFFFFF" />
              )}
            </View>

            <View style={styles.rowText}>
              <Text className="font-poppins-semibold text-[16px] text-text-primary">
                {item.title}
              </Text>
              <Text className="mt-0.5 font-poppins-regular text-[13px] text-text-secondary">
                {item.subtitle}
              </Text>
            </View>

            {item.done ? (
              <View style={styles.checkDone}>
                <Feather name="check" size={13} color="#FFFFFF" />
              </View>
            ) : (
              <View style={styles.checkPending} />
            )}
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
    paddingRight: 13,
  },
  list: {
    marginTop: 10,
    gap: 22,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowPressed: {
    opacity: 0.7,
  },
  iconBox: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 13,
  },
  rowText: {
    flex: 1,
    marginLeft: 15,
    marginRight: 12,
  },
  checkDone: {
    width: 21,
    height: 21,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#6C4EF5",
  },
  checkPending: {
    width: 21,
    height: 21,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#D1D5DB",
  },
});
