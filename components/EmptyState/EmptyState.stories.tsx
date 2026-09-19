import type { Meta, StoryObj } from "@storybook/react-native";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "EmptyState",
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    title: "Nothing here yet",
    description: "Your content will appear here once added.",
    variant: "default",
  },
};

export const SearchVariant: Story = {
  args: {
    title: "No results found",
    description: "Try adjusting your search terms or filters.",
    variant: "search",
  },
};

export const ErrorVariant: Story = {
  args: {
    title: "Something went wrong",
    description: "An error occurred while loading your data.",
    variant: "error",
  },
};

export const OfflineVariant: Story = {
  args: {
    title: "No connection",
    description: "Please check your internet connection and try again.",
    variant: "offline",
  },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const SmallSize: Story = {
  args: {
    title: "Nothing here yet",
    description: "Your items will appear here.",
    size: "small",
  },
};

export const MediumSize: Story = {
  args: {
    title: "Nothing here yet",
    description: "Your items will appear here.",
    size: "medium",
  },
};

export const LargeSize: Story = {
  args: {
    title: "Nothing here yet",
    description: "Your items will appear here.",
    size: "large",
  },
};

// ─── With Action ──────────────────────────────────────────────────────────────

export const WithAction: Story = {
  args: {
    title: "No items yet",
    description: "Start by adding your first item.",
    actionLabel: "Add Item",
    onAction: () => {},
  },
};

export const WithActionSearch: Story = {
  args: {
    title: "No results found",
    description: "We couldn't find anything matching your search.",
    variant: "search",
    actionLabel: "Clear Search",
    onAction: () => {},
  },
};

export const WithActionError: Story = {
  args: {
    title: "Failed to load",
    description: "Something went wrong on our end.",
    variant: "error",
    actionLabel: "Try Again",
    onAction: () => {},
  },
};

export const WithActionOffline: Story = {
  args: {
    title: "You're offline",
    description: "Connect to the internet to continue.",
    variant: "offline",
    actionLabel: "Retry",
    onAction: () => {},
  },
};

export const SmallWithAction: Story = {
  args: {
    title: "No items",
    actionLabel: "Add",
    onAction: () => {},
    size: "small",
  },
};

export const LargeWithAction: Story = {
  args: {
    title: "Your inbox is empty",
    description: "Messages you receive will show up here.",
    actionLabel: "Compose Message",
    onAction: () => {},
    size: "large",
  },
};

// ─── Custom Icons ─────────────────────────────────────────────────────────────

export const CustomIconEmoji: Story = {
  args: {
    title: "No favorites",
    description: "Tap the heart icon to save your favorites.",
    icon: "❤️",
  },
};

export const CustomIconCart: Story = {
  args: {
    title: "Your cart is empty",
    description: "Add products to get started.",
    icon: "🛒",
  },
};

export const CustomIconRocket: Story = {
  args: {
    title: "Get started",
    description: "Complete your profile to launch your experience.",
    icon: "🚀",
    actionLabel: "Complete Profile",
    onAction: () => {},
  },
};

// ─── Content Variations ───────────────────────────────────────────────────────

export const TitleOnly: Story = {
  args: {
    title: "No results",
  },
};

export const TitleAndDescription: Story = {
  args: {
    title: "No messages",
    description: "You have no messages in your inbox.",
  },
};

export const LongTitle: Story = {
  args: {
    title: "We couldn't find any matching results for your search",
    description: "Try different keywords.",
    variant: "search",
  },
};

export const LongDescription: Story = {
  args: {
    title: "Nothing yet",
    description:
      "Once you start adding content to your workspace, it will appear here. You can add new items using the button in the top right corner of the screen.",
  },
};

export const NoIconCustomEmpty: Story = {
  args: {
    title: "All caught up!",
    description: "You have no pending notifications.",
    icon: "",
  },
};

// ─── Combinations ─────────────────────────────────────────────────────────────

export const SearchSmallNoAction: Story = {
  args: {
    title: "No results",
    variant: "search",
    size: "small",
  },
};

export const ErrorLargeWithAction: Story = {
  args: {
    title: "Loading failed",
    description: "We hit an unexpected error.",
    variant: "error",
    size: "large",
    actionLabel: "Reload",
    onAction: () => {},
  },
};

export const DefaultMediumFullContent: Story = {
  args: {
    title: "Welcome to your workspace",
    description:
      "Add your first project to get started collaborating with your team.",
    actionLabel: "Create Project",
    onAction: () => {},
    size: "medium",
  },
};

export const OfflineLargeNoAction: Story = {
  args: {
    title: "No connection",
    description: "Check your network settings.",
    variant: "offline",
    size: "large",
  },
};

export const SearchLargeWithAction: Story = {
  args: {
    title: "No results found",
    description: "Try different keywords or clear your filters.",
    variant: "search",
    size: "large",
    actionLabel: "Clear Filters",
    onAction: () => {},
  },
};
