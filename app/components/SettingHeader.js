import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors, FontSizes } from "../utils/constants";

const SettingHeader = ({ onBack, onSave }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        backgroundColor: Colors.Black,
        padding: 8,
      }}
    >
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={onBack}
      >
        <Ionicons name="chevron-back-outline" size={20} color={Colors.White} />
        <Text
          style={{
            color: Colors.White,
            marginLeft: 8,
            fontSize: FontSizes.Big,
          }}
        >
          Cancel
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          color: Colors.White,
          marginRight: 28,
          fontSize: FontSizes.Huge,
        }}
      >
        Settings
      </Text>
      <TouchableOpacity onPress={onSave}>
        <Text
          style={{
            color: Colors.White,
            fontSize: FontSizes.Big,
            fontWeight: "700",
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingHeader;
