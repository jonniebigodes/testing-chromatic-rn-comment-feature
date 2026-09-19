import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface SwitchProps {
  /** Is switch on */
  isOn?: boolean;
  /** Label text */
  label?: string;
  /** Is switch disabled */
  disabled?: boolean;
  /** Orientation of label and switch */
  orientation?: "vertical" | "horizontal";
  /** Size of the switch */
  size?: "small" | "medium" | "large";
  /** On change handler */
  onChange?: (isOn: boolean) => void;
  /** Custom style */
  style?: StyleProp<ViewStyle>;
}

/** Switch component for toggling */
export const Switch = ({
  isOn = false,
  label,
  disabled = false,
  orientation = "horizontal",
  size = "medium",
  onChange,
  style,
}: SwitchProps) => {
  const sizeStyle = sizeStyles[size];
  const thumbSizeStyle = thumbSizeStyles[size];
  const orientationStyle =
    orientation === "vertical" ? styles.vertical : styles.horizontal;
  const disabledStyle = disabled ? styles.disabled : {};
  const backgroundColor = isOn ? "#34C759" : "#E5E5EA";

  return (
    <TouchableOpacity
      style={[styles.container, orientationStyle, style]}
      onPress={() => !disabled && onChange?.(!isOn)}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View
        style={[styles.switch, sizeStyle, { backgroundColor }, disabledStyle]}
      >
        <View
          style={[
            styles.thumb,
            thumbSizeStyle,
            isOn ? styles.thumbOn : styles.thumbOff,
          ]}
        />
      </View>
      {label && <Text style={[styles.label, disabledStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  horizontal: {
    flexDirection: "row",
    gap: 8,
  },
  vertical: {
    flexDirection: "column",
    gap: 4,
  },
  switch: {
    borderRadius: 999,
    justifyContent: "center",
    padding: 2,
  },
  thumb: {
    backgroundColor: "#FFFFFF",
    borderRadius: 999,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  thumbOff: {
    alignSelf: "flex-start",
  },
  thumbOn: {
    alignSelf: "flex-end",
  },
  label: {
    fontSize: 14,
    color: "#000000",
    flexShrink: 1,
  },
  disabled: {
    opacity: 0.4,
  },
});

const sizeStyles = StyleSheet.create({
  small: {
    width: 40,
    height: 20,
  },
  medium: {
    width: 51,
    height: 31,
  },
  large: {
    width: 60,
    height: 36,
  },
});

const thumbSizeStyles = StyleSheet.create({
  small: {
    width: 16,
    height: 16,
  },
  medium: {
    width: 27,
    height: 27,
  },
  large: {
    width: 32,
    height: 32,
  },
});
