import AppHeader from "@/components/AppHeader";
import { StyleSheet, Text, View } from "react-native";

export default function New() {
  return (
    <View style={styles.container}>
      <AppHeader />

      <View style={styles.content}>
        <Text style={styles.text}>New Quotation</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    fontWeight: "700",
  },
});
