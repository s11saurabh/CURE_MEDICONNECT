import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const Splash = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Splash</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate("Dashboard")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
