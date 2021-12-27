import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, FontSizes } from "../utils/constants";

const Input = ({ value, onChangeText, placeholder, isPassword }) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isPassword && !show}
      />
      {isPassword && (
        <TouchableOpacity activeOpacity={0.7} onPress={() => setShow(!show)}>
          <Ionicons
            name={show ? "eye-outline" : "eye-off-outline"}
            size={24}
            color={Colors.Gray}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#ccc",
    height: 60,
    marginBottom: 16,
  },
  input: {
    color: Colors.Gray,
    marginLeft: 8,
    flexGrow: 1,
    fontWeight: "700",
    fontSize: FontSizes.Big,
  },
});
