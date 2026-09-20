import type { Meta, StoryObj } from "@storybook/react-native";
import { Text, View } from "react-native";
import { OTPInput } from "./OTPInput";

const meta = {
  title: "OTPInput",
  component: OTPInput,
  decorators: [
    (Story) => (
      <View
        style={{
          padding: 44,
          flex: 1,
          alignItems: "center",
          borderColor: "red",
          borderWidth: 6,
        }}
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof OTPInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default States ───────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    length: 6,
  },
};

export const PartiallyFilled: Story = {
  args: {
    length: 6,
    value: "123",
  },
};

export const Filled: Story = {
  args: {
    length: 6,
    value: "123456",
  },
};

export const FourDigit: Story = {
  args: {
    length: 4,
    value: "8472",
  },
};

export const FourDigitEmpty: Story = {
  args: {
    length: 4,
  },
};

export const EightDigit: Story = {
  args: {
    length: 8,
    value: "12345678",
  },
};

// ─── Variants ─────────────────────────────────────────────────────────────────

export const BoxVariant: Story = {
  args: {
    length: 6,
    value: "123456",
    variant: "box",
  },
};

export const UnderlineVariant: Story = {
  args: {
    length: 6,
    value: "123456",
    variant: "underline",
  },
};

export const CircleVariant: Story = {
  args: {
    length: 6,
    value: "123456",
    variant: "circle",
  },
};

export const UnderlineEmpty: Story = {
  args: {
    length: 6,
    variant: "underline",
  },
};

export const CircleEmpty: Story = {
  args: {
    length: 6,
    variant: "circle",
  },
};

export const UnderlinePartial: Story = {
  args: {
    length: 6,
    value: "142",
    variant: "underline",
  },
};

export const CirclePartial: Story = {
  args: {
    length: 6,
    value: "142",
    variant: "circle",
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const SmallSize: Story = {
  args: {
    length: 6,
    value: "123456",
    size: "small",
  },
};

export const MediumSize: Story = {
  args: {
    length: 6,
    value: "123456",
    size: "medium",
  },
};

export const LargeSize: Story = {
  args: {
    length: 6,
    value: "123456",
    size: "large",
  },
};

export const SmallEmpty: Story = {
  args: {
    length: 6,
    size: "small",
  },
};

export const LargeEmpty: Story = {
  args: {
    length: 6,
    size: "large",
  },
};

export const SmallUnderline: Story = {
  args: {
    length: 6,
    value: "123456",
    size: "small",
    variant: "underline",
  },
};

export const LargeCircle: Story = {
  args: {
    length: 4,
    value: "8472",
    size: "large",
    variant: "circle",
  },
};

// ─── Error State ──────────────────────────────────────────────────────────────

export const ErrorEmpty: Story = {
  args: {
    length: 6,
    error: true,
  },
};

export const ErrorFilled: Story = {
  args: {
    length: 6,
    value: "999999",
    error: true,
  },
};

export const ErrorPartial: Story = {
  args: {
    length: 6,
    value: "123",
    error: true,
  },
};

export const ErrorUnderline: Story = {
  args: {
    length: 6,
    value: "123456",
    error: true,
    variant: "underline",
  },
};

export const ErrorCircle: Story = {
  args: {
    length: 6,
    value: "123456",
    error: true,
    variant: "circle",
  },
};

// ─── Success State ────────────────────────────────────────────────────────────

export const SuccessBox: Story = {
  args: {
    length: 6,
    value: "123456",
    success: true,
  },
};

export const SuccessUnderline: Story = {
  args: {
    length: 6,
    value: "123456",
    success: true,
    variant: "underline",
  },
};

export const SuccessCircle: Story = {
  args: {
    length: 6,
    value: "123456",
    success: true,
    variant: "circle",
  },
};

export const SuccessLarge: Story = {
  args: {
    length: 6,
    value: "123456",
    success: true,
    size: "large",
  },
};

// ─── Loading State ────────────────────────────────────────────────────────────

export const LoadingPartial: Story = {
  args: {
    length: 6,
    value: "123",
    loading: true,
  },
};

export const LoadingEmpty: Story = {
  args: {
    length: 6,
    loading: true,
  },
};

// ─── Disabled State ───────────────────────────────────────────────────────────

export const DisabledEmpty: Story = {
  args: {
    length: 6,
    disabled: true,
  },
};

export const DisabledFilled: Story = {
  args: {
    length: 6,
    value: "123456",
    disabled: true,
  },
};

export const DisabledUnderline: Story = {
  args: {
    length: 6,
    value: "123456",
    disabled: true,
    variant: "underline",
  },
};

// ─── Masked ───────────────────────────────────────────────────────────────────

export const MaskedFilled: Story = {
  args: {
    length: 6,
    value: "123456",
    masked: true,
  },
};

export const MaskedPartial: Story = {
  args: {
    length: 6,
    value: "123",
    masked: true,
  },
};

export const MaskedError: Story = {
  args: {
    length: 6,
    value: "123456",
    masked: true,
    error: true,
  },
};

export const MaskedSuccess: Story = {
  args: {
    length: 6,
    value: "123456",
    masked: true,
    success: true,
  },
};

export const MaskedDisabled: Story = {
  args: {
    length: 6,
    value: "123456",
    masked: true,
    disabled: true,
  },
};

export const MaskedCircle: Story = {
  args: {
    length: 6,
    value: "123456",
    masked: true,
    variant: "circle",
  },
};

export const MaskedUnderlineLarge: Story = {
  args: {
    length: 6,
    value: "123456",
    masked: true,
    variant: "underline",
    size: "large",
  },
};

// ─── Alphanumeric ─────────────────────────────────────────────────────────────

export const AlphanumericEmpty: Story = {
  args: {
    length: 6,
    inputType: "alphanumeric",
  },
};

export const AlphanumericFilled: Story = {
  args: {
    length: 6,
    value: "ABC123",
    inputType: "alphanumeric",
  },
};

export const AlphanumericPartial: Story = {
  args: {
    length: 6,
    value: "ABC",
    inputType: "alphanumeric",
  },
};

export const AlphanumericError: Story = {
  args: {
    length: 6,
    value: "XYZ789",
    inputType: "alphanumeric",
    error: true,
  },
};

export const AlphanumericMasked: Story = {
  args: {
    length: 6,
    value: "ABC123",
    inputType: "alphanumeric",
    masked: true,
  },
};

export const AlphanumericFourChar: Story = {
  args: {
    length: 4,
    value: "A1B2",
    inputType: "alphanumeric",
  },
};

// ─── Groups & Separators ──────────────────────────────────────────────────────

export const GroupedDefaultSeparator: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
  },
};

export const GroupedEmpty: Story = {
  args: {
    length: 6,
    groupSize: 3,
  },
};

export const GroupedPartial: Story = {
  args: {
    length: 6,
    value: "123",
    groupSize: 3,
  },
};

export const GroupedDashSeparator: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    separator: "-",
  },
};

export const GroupedDotSeparator: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    separator: "·",
  },
};

export const GroupedSlashSeparator: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    separator: "/",
  },
};

export const GroupedPairsOf2: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 2,
  },
};

export const GroupedAlphanumeric: Story = {
  args: {
    length: 6,
    value: "ABC123",
    groupSize: 3,
    inputType: "alphanumeric",
  },
};

export const GroupedUnderline: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    variant: "underline",
  },
};

export const GroupedCircle: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    variant: "circle",
  },
};

export const GroupedLarge: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    size: "large",
  },
};

export const GroupedError: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    error: true,
  },
};

export const GroupedSuccess: Story = {
  args: {
    length: 6,
    value: "123456",
    groupSize: 3,
    success: true,
  },
};

// ─── Real-world Scenarios ─────────────────────────────────────────────────────

export const SMSVerification: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Enter SMS code
      </Text>
      <Text style={{ fontSize: 13, color: "#8E8E93", textAlign: "center" }}>
        A 6-digit code was sent to +1 (555) 000-1234
      </Text>
      <OTPInput {...args} length={6} value="247" />
    </View>
  ),
  args: {},
};

export const EmailVerification: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Verify your email
      </Text>
      <Text style={{ fontSize: 13, color: "#8E8E93", textAlign: "center" }}>
        Enter the 4-digit code from user@example.com
      </Text>
      <OTPInput {...args} length={4} variant="underline" size="large" />
    </View>
  ),
  args: {},
};

export const TwoFactorAuth: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Two-factor authentication
      </Text>
      <Text style={{ fontSize: 13, color: "#8E8E93" }}>
        Open your authenticator app for the code
      </Text>
      <OTPInput
        {...args}
        length={6}
        value="123456"
        variant="circle"
        size="medium"
      />
    </View>
  ),
  args: {},
};

export const InvalidCodeError: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Enter verification code
      </Text>
      <OTPInput {...args} length={6} value="000000" error />
      <Text style={{ fontSize: 13, color: "#FF3B30" }}>
        Invalid code. Please try again.
      </Text>
    </View>
  ),
  args: {},
};

export const VerifiedSuccess: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 12 }}>
      <OTPInput {...args} length={6} value="847291" success />
      <Text style={{ fontSize: 13, color: "#34C759", fontWeight: "500" }}>
        Code verified successfully!
      </Text>
    </View>
  ),
  args: {},
};

export const VerifyingLoading: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 12 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Verifying...
      </Text>
      <OTPInput {...args} length={6} value="8472" loading />
    </View>
  ),
  args: {},
};

export const GroupedSMSCode: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Enter your code
      </Text>
      <OTPInput
        {...args}
        length={6}
        value="123456"
        groupSize={3}
        separator="-"
        size="large"
      />
    </View>
  ),
  args: {},
};

export const AlphanumericRedemptionCode: Story = {
  render: (args) => (
    <View style={{ alignItems: "center", gap: 16 }}>
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#000000" }}>
        Enter redemption code
      </Text>
      <OTPInput
        {...args}
        length={6}
        value="ABC123"
        inputType="alphanumeric"
        groupSize={3}
        separator="-"
        variant="box"
        size="medium"
      />
    </View>
  ),
  args: {},
};

export const NarrowContainer: Story = {
  render: (args) => (
    <View style={{ width: 280, alignItems: "center" }}>
      <OTPInput {...args} length={6} value="123456" size="small" />
    </View>
  ),
  args: {},
};

export const WideContainer: Story = {
  render: (args) => (
    <View style={{ width: 480, alignItems: "center" }}>
      <OTPInput {...args} length={6} value="123456" size="large" />
    </View>
  ),
  args: {},
};

export const AllSizesComparison: Story = {
  render: (args) => (
    <View style={{ gap: 24, alignItems: "center" }}>
      <OTPInput {...args} length={4} value="1234" size="small" />
      <OTPInput {...args} length={4} value="1234" size="medium" />
      <OTPInput {...args} length={4} value="1234" size="large" />
    </View>
  ),
  args: {},
};

export const AllVariantsComparison: Story = {
  render: (args) => (
    <View style={{ gap: 24, alignItems: "center" }}>
      <OTPInput {...args} length={4} value="1234" variant="box" />
      <OTPInput {...args} length={4} value="1234" variant="underline" />
      <OTPInput {...args} length={4} value="1234" variant="circle" />
    </View>
  ),
  args: {},
};

export const AllStatesComparison: Story = {
  render: (args) => (
    <View style={{ gap: 20, alignItems: "center" }}>
      <OTPInput {...args} length={4} value="1234" />
      <OTPInput {...args} length={4} value="1234" error />
      <OTPInput {...args} length={4} value="1234" success />
      <OTPInput {...args} length={4} value="12" loading />
      <OTPInput {...args} length={4} value="1234" disabled />
    </View>
  ),
  args: {},
};
