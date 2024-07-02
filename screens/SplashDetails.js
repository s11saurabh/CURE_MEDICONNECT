import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SplashDetails = () => {
  return (
    <View style={styles.container}>
      <Text>SplashDetails</Text>
    </View>
  );
};

export default SplashDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
