import type { Meta, StoryObj } from "@storybook/react-native";

import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const PrimarySmall: Story = {
  args: {
    primary: true,
    size: "small",
    label: "Small Primary",
  },
};

export const PrimaryMedium: Story = {
  args: {
    primary: true,
    size: "medium",
    label: "Medium Primary",
  },
};

export const PrimaryLarge: Story = {
  args: {
    primary: true,
    size: "large",
    label: "Large Primary",
  },
};

export const SecondarySmall: Story = {
  args: {
    primary: false,
    size: "small",
    label: "Small Secondary",
  },
};

export const SecondaryMedium: Story = {
  args: {
    primary: false,
    size: "medium",
    label: "Medium Secondary",
  },
};

export const SecondaryLarge: Story = {
  args: {
    primary: false,
    size: "large",
    label: "Large Secondary",
  },
};

export const CustomBackgroundRed: Story = {
  args: {
    primary: true,
    backgroundColor: "#FF3B30",
    label: "Custom Red",
  },
};

export const CustomBackgroundGreen: Story = {
  args: {
    primary: true,
    backgroundColor: "#34C759",
    label: "Custom Green",
  },
};

export const CustomBackgroundPurple: Story = {
  args: {
    primary: true,
    backgroundColor: "#AF52DE",
    label: "Custom Purple",
  },
};

export const CustomBackgroundOrange: Story = {
  args: {
    primary: true,
    backgroundColor: "#FF9500",
    label: "Custom Orange",
  },
};

export const LongLabel: Story = {
  args: {
    primary: true,
    label: "This is a very long button label that might wrap",
  },
};

export const VeryLongLabel: Story = {
  args: {
    primary: false,
    label:
      "This is an extremely long button label that will definitely wrap to multiple lines and test the button's behavior",
  },
};

export const ShortLabel: Story = {
  args: {
    primary: true,
    label: "OK",
  },
};

export const SingleCharacter: Story = {
  args: {
    primary: false,
    label: "X",
  },
};

export const WithEmoji: Story = {
  args: {
    primary: true,
    label: "👍 Like",
  },
};

export const WithMultipleEmoji: Story = {
  args: {
    primary: false,
    label: "🚀 Launch 🎉",
  },
};

export const NumericLabel: Story = {
  args: {
    primary: true,
    label: "123",
  },
};

export const MixedCaseLabel: Story = {
  args: {
    primary: false,
    label: "cLiCk HeRe",
  },
};

export const AllCapsLabel: Story = {
  args: {
    primary: true,
    label: "SUBMIT NOW",
  },
};

export const LowercaseLabel: Story = {
  args: {
    primary: false,
    label: "continue",
  },
};

export const SmallCustomBackground: Story = {
  args: {
    primary: true,
    size: "small",
    backgroundColor: "#5AC8FA",
    label: "Small Custom",
  },
};

export const LargeCustomBackground: Story = {
  args: {
    primary: true,
    size: "large",
    backgroundColor: "#FF2D55",
    label: "Large Custom",
  },
};
