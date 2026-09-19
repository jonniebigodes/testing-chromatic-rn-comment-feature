import type { Meta, StoryObj } from "@storybook/react-native";
import { Text, View } from "react-native";
import { Combobox } from "./Combobox";

const basicOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const meta = {
  title: "Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: "Select an option",
  },
};

export const WithValue: Story = {
  args: {
    options: basicOptions,
    value: "2",
  },
};

export const Searchable: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: String(i + 1),
      label: `Option ${i + 1}`,
    })),
    searchable: true,
  },
};

export const NotSearchable: Story = {
  args: {
    options: basicOptions,
    searchable: false,
  },
};

export const Loading: Story = {
  args: {
    options: basicOptions,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    options: basicOptions,
    value: "1",
    disabled: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Disabled Option", disabled: true },
      { value: "3", label: "Option 3" },
    ],
  },
};

export const EmptyOptions: Story = {
  args: {
    options: [],
    placeholder: "No options available",
  },
};

export const SingleOption: Story = {
  args: {
    options: [{ value: "1", label: "Only Option" }],
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 50 }, (_, i) => ({
      value: String(i + 1),
      label: `Item ${i + 1}`,
    })),
    searchable: true,
  },
};

export const LongLabels: Story = {
  args: {
    options: [
      {
        value: "1",
        label:
          "This is a very long option label that demonstrates text wrapping",
      },
      {
        value: "2",
        label: "Another long label with lots of descriptive text",
      },
      { value: "3", label: "Short" },
    ],
  },
};

export const Countries: Story = {
  args: {
    options: [
      { value: "us", label: "United States" },
      { value: "uk", label: "United Kingdom" },
      { value: "ca", label: "Canada" },
      { value: "au", label: "Australia" },
      { value: "de", label: "Germany" },
      { value: "fr", label: "France" },
      { value: "es", label: "Spain" },
      { value: "it", label: "Italy" },
    ],
    placeholder: "Select a country",
    searchable: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: basicOptions,
    placeholder: "Choose your option...",
  },
};

export const LongPlaceholder: Story = {
  args: {
    options: basicOptions,
    placeholder: "Please select one of the available options from the list",
  },
};

export const WithCustomRender: Story = {
  args: {
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
  },
  render: (args) => (
    <Combobox
      {...args}
      renderOption={(option) => (
        <View style={{ flexDirection: "row", gap: 8 }}>
          <Text>✓</Text>
          <Text>{option.label}</Text>
        </View>
      )}
    />
  ),
};

export const SearchableWithIcons: Story = {
  args: {
    options: [
      { value: "home", label: "Home" },
      { value: "work", label: "Work" },
      { value: "school", label: "School" },
      { value: "other", label: "Other" },
    ],
    searchable: true,
  },
  render: (args) => (
    <Combobox
      {...args}
      renderOption={(option) => (
        <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
          <Text style={{ fontSize: 18 }}>
            {option.value === "home"
              ? "🏠"
              : option.value === "work"
                ? "💼"
                : option.value === "school"
                  ? "🎓"
                  : "📍"}
          </Text>
          <Text>{option.label}</Text>
        </View>
      )}
    />
  ),
};

export const PreSelectedValue: Story = {
  args: {
    options: basicOptions,
    value: "1",
    onChange: () => {},
  },
};

export const AllOptionsDisabled: Story = {
  args: {
    options: basicOptions.map((opt) => ({ ...opt, disabled: true })),
  },
};

export const MixedDisabled: Story = {
  args: {
    options: [
      { value: "1", label: "Available" },
      { value: "2", label: "Unavailable", disabled: true },
      { value: "3", label: "Available" },
      { value: "4", label: "Unavailable", disabled: true },
      { value: "5", label: "Available" },
    ],
  },
};

export const ShortLabels: Story = {
  args: {
    options: [
      { value: "a", label: "A" },
      { value: "b", label: "B" },
      { value: "c", label: "C" },
    ],
  },
};

export const NumericLabels: Story = {
  args: {
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
    ],
  },
};

export const WithCallback: Story = {
  args: {
    options: basicOptions,
    onChange: (value) => console.log("Selected:", value),
  },
};

export const DifferentSizes: Story = {
  args: {
    options: [
      { value: "xs", label: "Extra Small" },
      { value: "s", label: "Small" },
      { value: "m", label: "Medium" },
      { value: "l", label: "Large" },
      { value: "xl", label: "Extra Large" },
    ],
    placeholder: "Select size",
  },
};

export const Priority: Story = {
  args: {
    options: [
      { value: "low", label: "Low Priority" },
      { value: "medium", label: "Medium Priority" },
      { value: "high", label: "High Priority" },
      { value: "urgent", label: "Urgent" },
    ],
    placeholder: "Set priority",
  },
};
