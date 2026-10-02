import { useEffect, useRef, useState } from "react";
import type { LayoutChangeEvent } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import type { BottomTabBarProps } from "expo-router/js-tabs";
import { colors } from "@/theme/tokens/colors";

const CIRCLE_SIZE = 42;
const ICON_SIZE = 24;
const ROW_HEIGHT = 64;
const ICON_OFFSET_TOP = 6;

const INDICATOR_DURATION = 250;
const EASE_IN_OUT = Easing.bezier(0.77, 0, 0.175, 1);

const getIndicatorX = (width: number, index: number, routeCount: number) => {
  const cellWidth = width / routeCount;
  return index * cellWidth + (cellWidth - CIRCLE_SIZE) / 2;
};

export function TabBar({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) {
  const [rowWidth, setRowWidth] = useState(0);
  const isFirstLayout = useRef(true);
  const indicatorX = useSharedValue(0);
  const routeCount = state.routes.length;

  const handleRowLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    if (width === 0) return;

    // The circle is only mounted after this first measurement, so snapping
    // it into place here means it never animates in on mount.
    if (isFirstLayout.current) {
      isFirstLayout.current = false;
      indicatorX.set(getIndicatorX(width, state.index, routeCount));
    }

    setRowWidth(width);
  };

  useEffect(() => {
    if (rowWidth === 0) return;

    indicatorX.set(
      withTiming(getIndicatorX(rowWidth, state.index, routeCount), {
        duration: INDICATOR_DURATION,
        easing: EASE_IN_OUT,
      })
    );
  }, [rowWidth, state.index, routeCount, indicatorX]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.get() }],
  }));

  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom }]}>
      <View style={styles.row} onLayout={handleRowLayout}>
        {rowWidth > 0 && (
          <Animated.View
            pointerEvents="none"
            style={[styles.indicator, indicatorStyle]}
          />
        )}

        {state.routes.map((route, index) => {
          const isActive = index === state.index;
          const { options } = descriptors[route.key];
          const label = options.title ?? route.name;

          const handlePress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const handleLongPress = () => {
            navigation.emit({ type: "tabLongPress", target: route.key });
          };

          return (
            <Pressable
              key={route.key}
              accessibilityLabel={label}
              accessibilityRole="tab"
              accessibilityState={isActive ? { selected: true } : {}}
              onLongPress={handleLongPress}
              onPress={handlePress}
              style={({ pressed }) => [
                styles.cell,
                pressed && styles.cellPressed,
              ]}
            >
              <View style={styles.iconBox}>
                {options.tabBarIcon?.({
                  focused: isActive,
                  color: isActive
                    ? colors.text.onAccent
                    : colors.neutral.textSecondary,
                  size: ICON_SIZE,
                })}
              </View>

              {!isActive && (
                <Text numberOfLines={1} style={styles.label}>
                  {label}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.neutral.background,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border.default,
    shadowColor: colors.neutral.textPrimary,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: -4 },
    shadowRadius: 12,
    elevation: 8,
  },
  row: {
    flexDirection: "row",
    height: ROW_HEIGHT,
  },
  indicator: {
    position: "absolute",
    top: ICON_OFFSET_TOP,
    left: 0,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: colors.primary.purple,
  },
  cell: {
    flex: 1,
    alignItems: "center",
    paddingTop: ICON_OFFSET_TOP,
  },
  cellPressed: {
    opacity: 0.6,
  },
  iconBox: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginTop: 2,
    fontFamily: "Poppins-Medium",
    fontSize: 11,
    lineHeight: 14,
    color: colors.neutral.textSecondary,
  },
});
