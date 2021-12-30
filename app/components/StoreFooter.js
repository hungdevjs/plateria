import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "../utils/constants";

const StoreFooter = ({ type, setType, BuyTypes }) => {
  const btns = [
    {
      name: "Pots",
      icon: "beaker-outline",
      type: BuyTypes.Pot,
    },
    {
      name: "Plants",
      icon: "leaf-outline",
      type: BuyTypes.Plant,
    },
    {
      name: "Backgrounds",
      icon: "image-outline",
      type: BuyTypes.Background,
    },
  ];

  return (
    <View
      style={{ height: 60, flexDirection: "row", justifyContent: "center" }}
    >
      {btns.map((item, index) => (
        <TouchableOpacity
          key={item.name}
          style={[
            {
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#62f668",
              width: "33.3333%",
            },
            index === 1 && {
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: Colors.Black,
            },
            item.type === type && { backgroundColor: Colors.Green },
          ]}
          onPress={() => setType(item.type)}
        >
          <Ionicons name={item.icon} size={20} color={Colors.Black} />
          <Text style={{ color: Colors.Black }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default StoreFooter;
