import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Store = () => {
  return (
    <View style={styles.container}>
      <Text>Store</Text>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
