import type { Preview } from "@storybook/react-native";
import { View } from "react-native";
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <View
        style={{ padding: 4, flex: 1, borderColor: "blue", borderWidth: 6 }}
      >
        <Story />
      </View>
      // <View style={{ padding: 44, flex: 1 }}>
      //   <Story />
      // </View>
    ),
  ],
};

export default preview;
