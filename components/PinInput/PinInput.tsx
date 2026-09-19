import { useState } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export interface PinInputProps {
  /** Number of pin digits */
  length?: number;
  /** Current pin value */
  value?: string;
  /** Callback when pin changes */
  onChange?: (pin: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether there's an error */
  error?: boolean;
  /** Mask the input characters */
  masked?: boolean;
  /** Size variant */
  size?: "small" | "medium" | "large";
  /** Custom style */
  style?: StyleProp<ViewStyle>;
}

/** PinInput component for PIN/OTP entry */
export const PinInput = ({
  length = 4,
  value,
  onChange,
  disabled = false,
  error = false,
  masked = false,
  size = "medium",
  style,
}: PinInputProps) => {
  const [internalValue, setInternalValue] = useState("");
  const pinValue = value !== undefined ? value : internalValue;

  const handleChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, length);
    if (value === undefined) {
      setInternalValue(digits);
    }
    onChange?.(digits);
  };

  const sizeStyles = {
    small: { box: 40, fontSize: 18 },
    medium: { box: 50, fontSize: 24 },
    large: { box: 60, fontSize: 30 },
  };

  const currentSize = sizeStyles[size];

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.hiddenInput}
        value={pinValue}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={length}
        editable={!disabled}
        autoFocus
      />
      <View style={styles.boxes}>
        {Array.from({ length }).map((_, index) => {
          const digit = pinValue[index];
          return (
            <Pressable
              key={index}
              style={[
                styles.box,
                {
                  width: currentSize.box,
                  height: currentSize.box,
                },
                error && styles.boxError,
                disabled && styles.boxDisabled,
              ]}
              onPress={() => {
                // Focus would be handled by the hidden input
              }}
            >
              {masked && digit ? (
                <View style={styles.maskedDigit}>
                  <View style={styles.dot} />
                </View>
              ) : (
                digit && (
                  <Text style={[styles.digit, { fontSize: currentSize.fontSize }]}>
                    {digit}
                  </Text>
                )
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
  boxes: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  box: {
    borderWidth: 2,
    borderColor: "#D1D1D6",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  boxError: {
    borderColor: "#FF3B30",
  },
  boxDisabled: {
    backgroundColor: "#F5F5F5",
    borderColor: "#E5E5EA",
  },
  digit: {
    fontWeight: "600",
    color: "#000000",
  },
  maskedDigit: {
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#000000",
  },
});
