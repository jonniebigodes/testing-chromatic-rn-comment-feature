import type { Meta, StoryObj } from "@storybook/react-native";
import { fn } from "storybook/test";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UncheckedHorizontal: Story = {
  args: {
    checked: false,
    label: "Checkbox Label",
    orientation: "horizontal",
  },
};

export const UncheckedVertical: Story = {
  args: {
    checked: false,
    label: "Checkbox Label",
    orientation: "vertical",
  },
};

export const CheckedHorizontal: Story = {
  args: {
    checked: true,
    label: "Checkbox Label",
    orientation: "horizontal",
  },
};

export const CheckedVertical: Story = {
  args: {
    checked: true,
    label: "Checkbox Label",
    orientation: "vertical",
  },
};

export const DisabledUncheckedHorizontal: Story = {
  args: {
    checked: false,
    label: "Disabled Checkbox",
    disabled: true,
    orientation: "horizontal",
  },
};

export const DisabledUncheckedVertical: Story = {
  args: {
    checked: false,
    label: "Disabled Checkbox",
    disabled: true,
    orientation: "vertical",
  },
};

export const DisabledCheckedHorizontal: Story = {
  args: {
    checked: true,
    label: "Disabled Checked",
    disabled: true,
    orientation: "horizontal",
  },
};

export const DisabledCheckedVertical: Story = {
  args: {
    checked: true,
    label: "Disabled Checked",
    disabled: true,
    orientation: "vertical",
  },
};

export const SmallUnchecked: Story = {
  args: {
    checked: false,
    label: "Small Checkbox",
    size: "small",
    orientation: "horizontal",
  },
};

export const SmallUncheckedVertical: Story = {
  args: {
    checked: false,
    label: "Small Checkbox",
    size: "small",
    orientation: "vertical",
  },
};

export const SmallChecked: Story = {
  args: {
    checked: true,
    label: "Small Checkbox",
    size: "small",
    orientation: "horizontal",
  },
};

export const SmallCheckedVertical: Story = {
  args: {
    checked: true,
    label: "Small Checkbox",
    size: "small",
    orientation: "vertical",
  },
};

export const LargeUnchecked: Story = {
  args: {
    checked: false,
    label: "Large Checkbox",
    size: "large",
    orientation: "horizontal",
  },
};

export const LargeUncheckedVertical: Story = {
  args: {
    checked: false,
    label: "Large Checkbox",
    size: "large",
    orientation: "vertical",
  },
};

export const LargeChecked: Story = {
  args: {
    checked: true,
    label: "Large Checkbox",
    size: "large",
    orientation: "horizontal",
  },
};

export const LargeCheckedVertical: Story = {
  args: {
    checked: true,
    label: "Large Checkbox",
    size: "large",
    orientation: "vertical",
  },
};

export const NoLabelUnchecked: Story = {
  args: {
    checked: false,
    orientation: "horizontal",
  },
};

export const NoLabelChecked: Story = {
  args: {
    checked: true,
    orientation: "horizontal",
  },
};

export const LongLabelHorizontal: Story = {
  args: {
    checked: false,
    label: "This is a very long checkbox label that should wrap",
    orientation: "horizontal",
  },
};

export const LongLabelVertical: Story = {
  args: {
    checked: false,
    label: "This is a very long checkbox label that should wrap",
    orientation: "vertical",
  },
};

export const MediumCheckedHorizontal: Story = {
  args: {
    checked: true,
    label: "Medium Checkbox",
    size: "medium",
    orientation: "horizontal",
  },
};

export const MediumCheckedVertical: Story = {
  args: {
    checked: true,
    label: "Medium Checkbox",
    size: "medium",
    orientation: "vertical",
  },
};

export const ShortLabel: Story = {
  args: {
    checked: true,
    label: "Yes",
    orientation: "horizontal",
  },
};

export const ShortLabelVertical: Story = {
  args: {
    checked: true,
    label: "Yes",
    orientation: "vertical",
  },
};

export const NoLabelCheckedVertical: Story = {
  args: {
    checked: true,
    orientation: "vertical",
  },
};
