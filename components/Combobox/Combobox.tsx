import { useState, type ReactNode } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export interface ComboboxOption {
  /** Label to display */
  label: string;
  /** Unique value */
  value: string;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface ComboboxProps {
  /** Array of options */
  options: ComboboxOption[];
  /** Current selected value */
  value?: string;
  /** Callback when value changes */
  onChange?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Enable search/filter functionality */
  searchable?: boolean;
  /** Show loading state */
  loading?: boolean;
  /** Whether the combobox is disabled */
  disabled?: boolean;
  /** Custom option render function */
  renderOption?: (option: ComboboxOption) => ReactNode;
  /** Custom style */
  style?: StyleProp<ViewStyle>;
}

/** Combobox component with search and dropdown */
export const Combobox = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  searchable = true,
  loading = false,
  disabled = false,
  renderOption,
  style,
}: ComboboxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : options;

  const handleSelect = (optionValue: string) => {
    const option = options.find((opt) => opt.value === optionValue);
    if (!option?.disabled) {
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchQuery("");
    }
  };

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={handleOpen}
        style={[styles.trigger, disabled && styles.disabledTrigger]}
        disabled={disabled}
      >
        <Text
          style={[
            styles.triggerText,
            !selectedOption && styles.placeholderText,
            disabled && styles.disabledText,
          ]}
        >
          {loading ? "Loading..." : selectedOption?.label || placeholder}
        </Text>
        <Text style={styles.arrow}>▼</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable
          style={styles.backdrop}
          onPress={() => {
            setIsOpen(false);
            setSearchQuery("");
          }}
        >
          <View style={styles.dropdown}>
            {searchable && (
              <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
            )}
            {filteredOptions.length === 0 ? (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>No options found</Text>
              </View>
            ) : (
              <FlatList
                data={filteredOptions}
                keyExtractor={(item) => item.value}
                style={styles.list}
                renderItem={({ item }) => (
                  <Pressable
                    onPress={() => handleSelect(item.value)}
                    style={({ pressed }) => [
                      styles.option,
                      item.value === value && styles.selectedOption,
                      item.disabled && styles.disabledOption,
                      pressed && !item.disabled && styles.pressedOption,
                    ]}
                    disabled={item.disabled}
                  >
                    {renderOption ? (
                      renderOption(item)
                    ) : (
                      <Text
                        style={[
                          styles.optionText,
                          item.value === value && styles.selectedOptionText,
                          item.disabled && styles.disabledText,
                        ]}
                      >
                        {item.label}
                      </Text>
                    )}
                  </Pressable>
                )}
              />
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  trigger: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#D1D1D6",
    borderRadius: 8,
    backgroundColor: "white",
  },
  disabledTrigger: {
    backgroundColor: "#F5F5F5",
    opacity: 0.6,
  },
  triggerText: {
    fontSize: 14,
    color: "#000000",
    flex: 1,
  },
  placeholderText: {
    color: "#8E8E93",
  },
  disabledText: {
    color: "#C7C7CC",
  },
  arrow: {
    fontSize: 10,
    color: "#8E8E93",
    marginLeft: 8,
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdown: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "85%",
    maxWidth: 400,
    maxHeight: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5EA",
    fontSize: 14,
  },
  list: {
    maxHeight: 300,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  selectedOption: {
    backgroundColor: "#F0F9FF",
  },
  disabledOption: {
    opacity: 0.5,
  },
  pressedOption: {
    backgroundColor: "#F5F5F5",
  },
  optionText: {
    fontSize: 14,
    color: "#000000",
  },
  selectedOptionText: {
    color: "#007AFF",
    fontWeight: "600",
  },
  emptyState: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  emptyText: {
    fontSize: 14,
    color: "#8E8E93",
  },
});
