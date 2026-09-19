import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface EmptyStateProps {
  /** Primary heading text */
  title: string;
  /** Secondary descriptive text */
  description?: string;
  /** Override the built-in variant icon with a custom string/emoji */
  icon?: string;
  /** Visual variant (determines built-in icon and tint) */
  variant?: "default" | "search" | "error" | "offline";
  /** Label for the optional action button */
  actionLabel?: string;
  /** Callback for the action button */
  onAction?: () => void;
  /** Overall size */
  size?: "small" | "medium" | "large";
  /** Custom style */
  style?: StyleProp<ViewStyle>;
}

const VARIANT_ICONS: Record<NonNullable<EmptyStateProps["variant"]>, string> = {
  default: "📭",
  search: "🔍",
  error: "⚠️",
  offline: "📡",
};

const SIZE_CONFIG: Record<
  NonNullable<EmptyStateProps["size"]>,
  { iconSize: number; titleSize: number; descSize: number; padding: number; buttonPadding: number }
> = {
  small: { iconSize: 32, titleSize: 16, descSize: 12, padding: 16, buttonPadding: 8 },
  medium: { iconSize: 48, titleSize: 20, descSize: 14, padding: 24, buttonPadding: 10 },
  large: { iconSize: 64, titleSize: 24, descSize: 16, padding: 32, buttonPadding: 12 },
};

/** EmptyState component for empty lists, screens, and search results */
export const EmptyState = ({
  title,
  description,
  icon,
  variant = "default",
  actionLabel,
  onAction,
  size = "medium",
  style,
}: EmptyStateProps) => {
  const displayIcon = icon !== undefined ? icon : VARIANT_ICONS[variant];
  const { iconSize, titleSize, descSize, padding, buttonPadding } = SIZE_CONFIG[size];

  return (
    <View style={[styles.container, { padding }, style]}>
      {displayIcon !== "" && (
        <Text style={[styles.icon, { fontSize: iconSize }]}>{displayIcon}</Text>
      )}
      <Text style={[styles.title, { fontSize: titleSize }]}>{title}</Text>
      {description != null && (
        <Text style={[styles.description, { fontSize: descSize }]}>{description}</Text>
      )}
      {actionLabel != null && onAction != null && (
        <Pressable
          onPress={onAction}
          style={[styles.actionButton, { paddingVertical: buttonPadding, paddingHorizontal: buttonPadding * 2 }]}
          accessibilityRole="button"
        >
          <Text style={styles.actionText}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  icon: {
    textAlign: "center",
  },
  title: {
    fontWeight: "600",
    color: "#000000",
    textAlign: "center",
  },
  description: {
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 20,
  },
  actionButton: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
  },
  actionText: {
    color: "#007AFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
