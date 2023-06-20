import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewButton from "../components/NewButton";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👋 </Text>
      <Text style={styles.title}>Welcome to the about page of the app!</Text>
      <NewButton title="here is a brand new button!" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A3E4D7",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 40,
  },
  title: {
    color: "#797EF6",
    fontSize: 30,
    padding: 20,
  },
  text: {
    fontWeight: "bold",
    margin: 10,
  },
});