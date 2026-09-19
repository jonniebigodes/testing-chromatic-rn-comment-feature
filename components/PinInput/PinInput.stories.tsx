import type { Meta, StoryObj } from "@storybook/react-native";
import { PinInput } from "./PinInput";

const meta = {
  title: "PinInput",
  component: PinInput,
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const FourDigits: Story = {
  args: {
    length: 4,
  },
};

export const SixDigits: Story = {
  args: {
    length: 6,
  },
};

export const EightDigits: Story = {
  args: {
    length: 8,
  },
};

export const WithValue: Story = {
  args: {
    value: "1234",
  },
};

export const PartialValue: Story = {
  args: {
    value: "12",
    length: 4,
  },
};

export const Masked: Story = {
  args: {
    value: "1234",
    masked: true,
  },
};

export const MaskedPartial: Story = {
  args: {
    value: "12",
    masked: true,
    length: 4,
  },
};

export const MaskedSix: Story = {
  args: {
    value: "123456",
    masked: true,
    length: 6,
  },
};

export const Error: Story = {
  args: {
    value: "1234",
    error: true,
  },
};

export const ErrorMasked: Story = {
  args: {
    value: "1234",
    error: true,
    masked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    value: "1234",
    disabled: true,
  },
};

export const DisabledMasked: Story = {
  args: {
    value: "1234",
    disabled: true,
    masked: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    value: "123",
    length: 4,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    value: "123",
    length: 4,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    value: "123",
    length: 4,
  },
};

export const SmallMasked: Story = {
  args: {
    size: "small",
    value: "1234",
    masked: true,
  },
};

export const LargeMasked: Story = {
  args: {
    size: "large",
    value: "1234",
    masked: true,
  },
};

export const Empty: Story = {
  args: {
    value: "",
    length: 4,
  },
};

export const OneDigit: Story = {
  args: {
    value: "5",
    length: 4,
  },
};

export const ThreeDigits: Story = {
  args: {
    value: "789",
    length: 4,
  },
};

export const Complete: Story = {
  args: {
    value: "9876",
    length: 4,
  },
};

export const WithCallback: Story = {
  args: {
    length: 4,
    onChange: (pin) => console.log("PIN:", pin),
  },
};

export const SixDigitOTP: Story = {
  args: {
    length: 6,
    value: "123456",
  },
};

export const SixDigitEmpty: Story = {
  args: {
    length: 6,
  },
};
