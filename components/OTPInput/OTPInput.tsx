import { useRef, useState } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export interface OTPInputProps {
  /** Number of OTP characters */
  length?: number;
  /** Controlled value */
  value?: string;
  /** Callback when value changes */
  onChange?: (otp: string) => void;
  /** Callback fired when all cells are filled */
  onComplete?: (otp: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the OTP failed validation */
  error?: boolean;
  /** Whether the OTP is being verified */
  loading?: boolean;
  /** Whether verification succeeded */
  success?: boolean;
  /** Mask each entered character with a dot */
  masked?: boolean;
  /** Visual style of each cell */
  variant?: "box" | "underline" | "circle";
  /** Size of each cell */
  size?: "small" | "medium" | "large";
  /** Character set accepted by the input */
  inputType?: "numeric" | "alphanumeric";
  /** Group cells into chunks of this size with a separator between groups */
  groupSize?: number;
  /** Character displayed between groups */
  separator?: string;
  /** Custom container style */
  style?: StyleProp<ViewStyle>;
}

type CellState = "idle" | "active" | "filled" | "error" | "success" | "disabled";

const CELL_SIZES: Record<NonNullable<OTPInputProps["size"]>, { cell: number; font: number; dot: number }> = {
  small: { cell: 40, font: 16, dot: 7 },
  medium: { cell: 52, font: 22, dot: 9 },
  large: { cell: 64, font: 28, dot: 12 },
};

const BORDER_COLORS: Record<CellState, string> = {
  idle: "#D1D1D6",
  active: "#007AFF",
  filled: "#007AFF",
  error: "#FF3B30",
  success: "#34C759",
  disabled: "#E5E5EA",
};

const BACKGROUNDS: Record<CellState, string> = {
  idle: "#FFFFFF",
  active: "#FFFFFF",
  filled: "#FFFFFF",
  error: "#FFF5F5",
  success: "#F2FFF4",
  disabled: "#F5F5F5",
};

const TEXT_COLORS: Record<CellState, string> = {
  idle: "#000000",
  active: "#000000",
  filled: "#000000",
  error: "#FF3B30",
  success: "#34C759",
  disabled: "#8E8E93",
};

function resolveCellState(
  index: number,
  charCount: number,
  length: number,
  disabled: boolean,
  error: boolean,
  success: boolean
): CellState {
  if (disabled) return "disabled";
  const isFilled = charCount === length;
  if (error) return "error";
  if (success && isFilled) return "success";
  if (index < charCount) return "filled";
  if (index === charCount) return "active";
  return "idle";
}

/** OTPInput component for one-time password and verification code entry */
export const OTPInput = ({
  length = 6,
  value,
  onChange,
  onComplete,
  disabled = false,
  error = false,
  loading = false,
  success = false,
  masked = false,
  variant = "box",
  size = "medium",
  inputType = "numeric",
  groupSize,
  separator = "–",
  style,
}: OTPInputProps) => {
  const [internal, setInternal] = useState("");
  const inputRef = useRef<TextInput>(null);
  const otp = value !== undefined ? value : internal;

  const handleChange = (text: string) => {
    const pattern = inputType === "alphanumeric" ? /[^A-Z0-9]/g : /[^0-9]/g;
    const sanitized = text.toUpperCase().replace(pattern, "").slice(0, length);
    if (value === undefined) setInternal(sanitized);
    onChange?.(sanitized);
    if (sanitized.length === length) onComplete?.(sanitized);
  };

  const { cell: cellSize, font: fontSize, dot: dotSize } = CELL_SIZES[size];
  const charCount = otp.length;
  const isFilled = charCount === length;

  const renderCell = (index: number) => {
    const char = otp[index];
    const state = resolveCellState(index, charCount, length, disabled, error, success && isFilled);
    const borderColor = BORDER_COLORS[state];
    const backgroundColor = BACKGROUNDS[state];
    const textColor = TEXT_COLORS[state];
    const isLoading = loading && index === charCount;

    const boxVariantStyle =
      variant === "circle"
        ? [variantStyles.circle, { borderColor, backgroundColor }]
        : [variantStyles.box, { borderColor, backgroundColor }];

    const underlineVariantStyle =
      variant === "underline"
        ? [variantStyles.underline, { borderBottomColor: borderColor }]
        : null;

    return (
      <View
        key={index}
        style={[
          styles.cell,
          { width: cellSize, height: cellSize },
          variant !== "underline" ? boxVariantStyle : underlineVariantStyle,
        ]}
      >
        {isLoading ? (
          <View style={styles.loadingDot} />
        ) : masked && char ? (
          <View
            style={[
              styles.maskedDot,
              { width: dotSize, height: dotSize, borderRadius: dotSize / 2 },
            ]}
          />
        ) : char ? (
          <Text style={[styles.cellText, { fontSize, color: textColor }]}>
            {char}
          </Text>
        ) : null}
      </View>
    );
  };

  const renderContent = () => {
    const useGroups = groupSize != null && groupSize > 0 && groupSize < length;
    if (!useGroups) {
      return Array.from({ length }, (_, i) => renderCell(i));
    }

    const result = [];
    for (let i = 0; i < length; i += groupSize!) {
      if (i > 0) {
        result.push(
          <Text
            key={`sep-${i}`}
            style={[styles.separator, { fontSize: fontSize * 0.9 }]}
          >
            {separator}
          </Text>
        );
      }
      for (let j = i; j < Math.min(i + groupSize!, length); j++) {
        result.push(renderCell(j));
      }
    }
    return result;
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        ref={inputRef}
        style={styles.hiddenInput}
        value={otp}
        onChangeText={handleChange}
        keyboardType={inputType === "numeric" ? "number-pad" : "default"}
        maxLength={length}
        editable={!disabled && !loading}
        autoCorrect={false}
        autoCapitalize="characters"
      />
      <Pressable
        onPress={() => inputRef.current?.focus()}
        style={styles.pressable}
      >
        <View style={styles.cells}>{renderContent()}</View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
  pressable: {
    alignItems: "center",
  },
  cells: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    fontWeight: "700",
  },
  maskedDot: {
    backgroundColor: "#000000",
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#007AFF",
    opacity: 0.5,
  },
  separator: {
    color: "#8E8E93",
    fontWeight: "300",
    marginHorizontal: 2,
  },
});

const variantStyles = StyleSheet.create({
  box: {
    borderWidth: 2,
    borderRadius: 10,
  },
  circle: {
    borderWidth: 2,
    borderRadius: 999,
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: "#D1D1D6",
    backgroundColor: "transparent",
  },
});
