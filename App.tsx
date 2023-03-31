import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Fonts } from "src/constants";

export default function App() {
  console.log({
    Fonts: Fonts,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={styles.textItalic}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBold: {
    ...Fonts.RobotoRegular,
    fontWeight: "bold",
  },
  textItalic: {
    ...Fonts.RobotoRegular,
    fontStyle: "italic",
  },
});
