import type { Meta, StoryObj } from "@storybook/react-native";
import { fn } from "storybook/test";
import { Switch } from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
  args: { onChange: fn() },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OffHorizontal: Story = {
  args: {
    isOn: false,
    label: "Switch Label",
    orientation: "horizontal",
  },
};

export const OffVertical: Story = {
  args: {
    isOn: false,
    label: "Switch Label",
    orientation: "vertical",
  },
};

export const OnHorizontal: Story = {
  args: {
    isOn: true,
    label: "Switch Label",
    orientation: "horizontal",
  },
};

export const OnVertical: Story = {
  args: {
    isOn: true,
    label: "Switch Label",
    orientation: "vertical",
  },
};

export const DisabledOffHorizontal: Story = {
  args: {
    isOn: false,
    label: "Disabled Switch",
    disabled: true,
    orientation: "horizontal",
  },
};

export const DisabledOffVertical: Story = {
  args: {
    isOn: false,
    label: "Disabled Switch",
    disabled: true,
    orientation: "vertical",
  },
};

export const DisabledOnHorizontal: Story = {
  args: {
    isOn: true,
    label: "Disabled On",
    disabled: true,
    orientation: "horizontal",
  },
};

export const DisabledOnVertical: Story = {
  args: {
    isOn: true,
    label: "Disabled On",
    disabled: true,
    orientation: "vertical",
  },
};

export const SmallOff: Story = {
  args: {
    isOn: false,
    label: "Small Switch",
    size: "small",
    orientation: "horizontal",
  },
};

export const SmallOffVertical: Story = {
  args: {
    isOn: false,
    label: "Small Switch",
    size: "small",
    orientation: "vertical",
  },
};

export const SmallOn: Story = {
  args: {
    isOn: true,
    label: "Small Switch",
    size: "small",
    orientation: "horizontal",
  },
};

export const SmallOnVertical: Story = {
  args: {
    isOn: true,
    label: "Small Switch",
    size: "small",
    orientation: "vertical",
  },
};

export const LargeOff: Story = {
  args: {
    isOn: false,
    label: "Large Switch",
    size: "large",
    orientation: "horizontal",
  },
};

export const LargeOffVertical: Story = {
  args: {
    isOn: false,
    label: "Large Switch",
    size: "large",
    orientation: "vertical",
  },
};

export const LargeOn: Story = {
  args: {
    isOn: true,
    label: "Large Switch",
    size: "large",
    orientation: "horizontal",
  },
};

export const LargeOnVertical: Story = {
  args: {
    isOn: true,
    label: "Large Switch",
    size: "large",
    orientation: "vertical",
  },
};

export const NoLabelOff: Story = {
  args: {
    isOn: false,
    orientation: "horizontal",
  },
};

export const NoLabelOn: Story = {
  args: {
    isOn: true,
    orientation: "horizontal",
  },
};

export const LongLabelHorizontal: Story = {
  args: {
    isOn: false,
    label: "This is a very long switch label that should wrap",
    orientation: "horizontal",
  },
};

export const LongLabelVertical: Story = {
  args: {
    isOn: false,
    label: "This is a very long switch label that should wrap",
    orientation: "vertical",
  },
};

export const MediumOnHorizontal: Story = {
  args: {
    isOn: true,
    label: "Medium Switch",
    size: "medium",
    orientation: "horizontal",
  },
};

export const MediumOnVertical: Story = {
  args: {
    isOn: true,
    label: "Medium Switch",
    size: "medium",
    orientation: "vertical",
  },
};

export const ShortLabel: Story = {
  args: {
    isOn: true,
    label: "On",
    orientation: "horizontal",
  },
};

export const ShortLabelVertical: Story = {
  args: {
    isOn: true,
    label: "On",
    orientation: "vertical",
  },
};

export const NoLabelOnVertical: Story = {
  args: {
    isOn: true,
    orientation: "vertical",
  },
};
