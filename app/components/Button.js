import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Colors, FontSizes } from "../utils/constants";

const Button = ({ outline, backgroundColor, color, text, onPress, style }) => {
  const renderContainerStyle = () => {
    if (outline)
      return {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: backgroundColor,
      };
    if (backgroundColor) return { backgroundColor };
    return {};
  };

  return (
    <TouchableOpacity
      style={[styles.container, renderContainerStyle(), style]}
      onPress={onPress}
    >
      <Text style={[styles.text, color && { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Primary,
  },
  text: {
    fontWeight: "700",
    color: Colors.White,
    fontSize: FontSizes.Big,
  },
});
