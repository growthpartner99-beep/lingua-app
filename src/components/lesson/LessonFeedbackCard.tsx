import { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

type Metric = {
  label: string;
  value: string;
  valueColor: string;
};

const METRICS: Metric[] = [
  { label: "Speaking", value: "Excellent", valueColor: "#67BF3F" },
  { label: "Pronunciation", value: "Great", valueColor: "#417BED" },
  { label: "Grammar", value: "Good", valueColor: "#553DEB" },
];

/**
 * Speaking feedback for the lesson. Three metrics sit side by side
 * with thin dividers between them, exactly like the design card that
 * follows the call stage. It is rendered below the stage, so the
 * lesson keeps its call-first layout.
 */
export function LessonFeedbackCard() {
  return (
    <View
      className="mx-5 mt-0.5 flex-row justify-between rounded-[20px] bg-white px-5 py-6"
      style={styles.card}
    >
      {METRICS.map((metric, index) => (
        <Fragment key={metric.label}>
          {index > 0 && (
            <View className="h-[52px] w-px bg-[#E9EAEF]" />
          )}
          <View>
            <Text
              className="font-poppins-semibold text-[11px] leading-4 text-text-primary"
              numberOfLines={1}
            >
              {metric.label}
            </Text>
            <Text
              className="mt-[9px] font-poppins-semibold text-[11px] leading-5"
              numberOfLines={1}
              style={{ color: metric.valueColor }}
            >
              {metric.value}
            </Text>
          </View>
        </Fragment>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
});
