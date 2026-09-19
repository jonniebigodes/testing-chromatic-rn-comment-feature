import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// Prevent the splash screen from auto-hiding before fonts are loaded
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "(tabs)",
};

function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

// Get the appropriate entry point (app or Storybook)
const getAppEntryPoint = () => {
  // Testing for Chromatic
  return require("../.rnstorybook").default;
  /*  if (process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true") {
    // @ts-ignore
    return require("../.rnstorybook").default;
  }

  return RootLayout; */
};

// Wrapper component that handles font loading
function AppWithFonts() {
  const [fontsLoaded, fontsError] = useFonts({
    Percolate: require("../assets/images/font/percolate.ttf"),
    Todos: require("../assets/images/font/todos.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  const AppEntryPoint = getAppEntryPoint();
  return <AppEntryPoint />;
}

export default AppWithFonts;
