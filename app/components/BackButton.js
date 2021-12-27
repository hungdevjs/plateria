import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { IconSize, Colors, FontSizes } from "../utils/constants";

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons name="arrow-back-outline" size={IconSize} color={Colors.Gray} />
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    paddingRight: 16,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: Colors.Gray,
    position: "absolute",
    top: 16,
    left: 16,
  },
  text: {
    color: Colors.Gray,
    fontWeight: "700",
    fontSize: FontSizes.Huge,
  },
});
