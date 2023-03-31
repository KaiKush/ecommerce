import * as Font from "expo-font";
// Define your fonts here
const fontsInitial = {
  "Roboto-Bold": require("assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Italic": require("assets/fonts/Roboto-Italic.ttf"),
  "Roboto-Regular": require("assets/fonts/Roboto-Regular.ttf"),
};

// Load your fonts
export async function loadFonts() {
  await Font.loadAsync(fontsInitial);
}

// Export your fonts
export const Fonts = {
  RobotoBold: { fontFamily: "Roboto-Bold" },
  RobotoItalic: { fontFamily: "Roboto-Italic" },
  RobotoRegular: { fontRegular: "Roboto-Regular" },
};
