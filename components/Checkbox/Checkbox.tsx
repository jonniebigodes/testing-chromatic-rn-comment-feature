import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export interface CheckboxProps {
  /** Is checkbox checked */
  checked?: boolean;
  /** Label text */
  label?: string;
  /** Is checkbox disabled */
  disabled?: boolean;
  /** Orientation of label and checkbox */
  orientation?: "vertical" | "horizontal";
  /** Size of the checkbox */
  size?: "small" | "medium" | "large";
  /** On change handler */
  onChange?: (checked: boolean) => void;
  /** Custom style */
  style?: StyleProp<ViewStyle>;
}

/** Checkbox component for selection */
export const Checkbox = ({
  checked = false,
  label,
  disabled = false,
  orientation = "horizontal",
  size = "medium",
  onChange,
  style,
}: CheckboxProps) => {
  const sizeStyle = sizeStyles[size];
  const orientationStyle =
    orientation === "vertical" ? styles.vertical : styles.horizontal;
  const checkboxBg = checked ? styles.checkedBox : styles.uncheckedBox;
  const disabledStyle = disabled ? styles.disabled : {};

  return (
    <TouchableOpacity
      style={[styles.container, orientationStyle, style]}
      onPress={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[styles.checkbox, sizeStyle, checkboxBg, disabledStyle]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
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
  checkbox: {
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  checkedBox: {
    backgroundColor: "#007AFF",
  },
  uncheckedBox: {
    backgroundColor: "transparent",
  },
  checkmark: {
    color: "#FFFFFF",
    fontWeight: "bold",
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
    width: 16,
    height: 16,
  },
  medium: {
    width: 20,
    height: 20,
  },
  large: {
    width: 24,
    height: 24,
  },
});
