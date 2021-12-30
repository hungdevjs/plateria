import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Gold from "./Gold";
import { FontSizes } from "../utils/constants";

const StoreHeader = ({ onBack, gold }) => {
  return (
    <View
      style={{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 8,
      }}
    >
      <TouchableOpacity onPress={onBack}>
        <Ionicons name="caret-back-outline" size={25} />
      </TouchableOpacity>
      <Text
        style={{ fontSize: FontSizes.Big, fontWeight: "700", marginLeft: 25 }}
      >
        STORE
      </Text>
      <Gold gold={gold} />
    </View>
  );
};

export default StoreHeader;
