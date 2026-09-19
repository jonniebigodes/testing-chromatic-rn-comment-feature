import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export interface AvatarProps {
  /** User initials or text */
  label?: string;
  /** Size of the avatar */
  size?: "small" | "medium" | "large" | "xlarge";
  /** Background color */
  backgroundColor?: string;
  /** Orientation of the avatar */
  orientation?: "vertical" | "horizontal";
  /** Shape of the avatar */
  shape?: "circle" | "square" | "rounded";
  /** Custom style */
  style?: StyleProp<ViewStyle>;
}

/** Avatar component for displaying user initials */
export const Avatar = ({
  label = "U",
  size = "medium",
  backgroundColor = "#007AFF",
  orientation = "horizontal",
  shape = "circle",
  style,
}: AvatarProps) => {
  const sizeStyle = sizeStyles[size];
  const textSizeStyle = textSizeStyles[size];
  const shapeStyle = shapeStyles[shape];
  const orientationStyle =
    orientation === "vertical" ? styles.vertical : styles.horizontal;

  return (
    <View
      style={[
        styles.avatar,
        sizeStyle,
        shapeStyle,
        orientationStyle,
        { backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.text, textSizeStyle]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    alignItems: "center",
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
  },
  vertical: {
    flexDirection: "column",
  },
  text: {
    color: "#FFFFFF",
    fontWeight: "600",
    flexShrink: 1,
  },
});

const sizeStyles = StyleSheet.create({
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 48,
    height: 48,
  },
  large: {
    width: 64,
    height: 64,
  },
  xlarge: {
    width: 96,
    height: 96,
  },
});

const textSizeStyles = StyleSheet.create({
  small: {
    fontSize: 12,
  },
  medium: {
    fontSize: 18,
  },
  large: {
    fontSize: 24,
  },
  xlarge: {
    fontSize: 36,
  },
});

const shapeStyles = StyleSheet.create({
  circle: {
    borderRadius: 999,
  },
  square: {
    borderRadius: 0,
  },
  rounded: {
    borderRadius: 8,
  },
});
