import type { Meta, StoryObj } from "@storybook/react-native";
import { Avatar } from "./Avatar";

const meta = {
  title: "Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultCircle: Story = {
  args: {
    label: "JD",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const DefaultCircleVertical: Story = {
  args: {
    label: "JD",
    orientation: "vertical",
    shape: "circle",
  },
};

export const SmallCircle: Story = {
  args: {
    label: "AB",
    size: "small",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const SmallCircleVertical: Story = {
  args: {
    label: "AB",
    size: "small",
    orientation: "vertical",
    shape: "circle",
  },
};

export const MediumCircle: Story = {
  args: {
    label: "CD",
    size: "medium",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const MediumCircleVertical: Story = {
  args: {
    label: "CD",
    size: "medium",
    orientation: "vertical",
    shape: "circle",
  },
};

export const LargeCircle: Story = {
  args: {
    label: "EF",
    size: "large",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const LargeCircleVertical: Story = {
  args: {
    label: "EF",
    size: "large",
    orientation: "vertical",
    shape: "circle",
  },
};

export const XLargeCircle: Story = {
  args: {
    label: "GH",
    size: "xlarge",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const XLargeCircleVertical: Story = {
  args: {
    label: "GH",
    size: "xlarge",
    orientation: "vertical",
    shape: "circle",
  },
};

export const SquareSmall: Story = {
  args: {
    label: "IJ",
    size: "small",
    orientation: "horizontal",
    shape: "square",
  },
};

export const SquareSmallVertical: Story = {
  args: {
    label: "IJ",
    size: "small",
    orientation: "vertical",
    shape: "square",
  },
};

export const SquareMedium: Story = {
  args: {
    label: "KL",
    size: "medium",
    orientation: "horizontal",
    shape: "square",
  },
};

export const SquareMediumVertical: Story = {
  args: {
    label: "KL",
    size: "medium",
    orientation: "vertical",
    shape: "square",
  },
};

export const RoundedSmall: Story = {
  args: {
    label: "MN",
    size: "small",
    orientation: "horizontal",
    shape: "rounded",
  },
};

export const RoundedSmallVertical: Story = {
  args: {
    label: "MN",
    size: "small",
    orientation: "vertical",
    shape: "rounded",
  },
};

export const RoundedMedium: Story = {
  args: {
    label: "OP",
    size: "medium",
    orientation: "horizontal",
    shape: "rounded",
  },
};

export const RoundedMediumVertical: Story = {
  args: {
    label: "OP",
    size: "medium",
    orientation: "vertical",
    shape: "rounded",
  },
};

export const CustomColor: Story = {
  args: {
    label: "QR",
    backgroundColor: "#FF3B30",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const CustomColorVertical: Story = {
  args: {
    label: "QR",
    backgroundColor: "#FF3B30",
    orientation: "vertical",
    shape: "circle",
  },
};

export const GreenBackground: Story = {
  args: {
    label: "ST",
    backgroundColor: "#34C759",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const PurpleBackground: Story = {
  args: {
    label: "UV",
    backgroundColor: "#AF52DE",
    orientation: "horizontal",
    shape: "rounded",
  },
};

export const SingleLetter: Story = {
  args: {
    label: "W",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const ThreeLetters: Story = {
  args: {
    label: "XYZ",
    size: "large",
    orientation: "horizontal",
    shape: "circle",
  },
};

export const OrangeBackground: Story = {
  args: {
    label: "AB",
    backgroundColor: "#FF9500",
    orientation: "horizontal",
    shape: "rounded",
  },
};
