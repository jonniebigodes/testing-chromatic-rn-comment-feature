// Updated configuration to support Storybook in Expo
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const {
  withStorybook,
} = require("@storybook/react-native/metro/withStorybook");

const config = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  //enabled: true, // Required for Chromatic, since it doesn't set the environment variable when building the app
});

module.exports = config;
