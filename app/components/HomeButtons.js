import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Button from "./Button";
import { Colors, ScreenWidth, Screens, FontSizes } from "../utils/constants";

const btnSize = ScreenWidth * 0.15;

const btns = [
  { name: "Store", icon: "cart", screen: Screens.Store },
  { name: "Customize", icon: "create", screen: Screens.Customize },
  { name: "Profile", icon: "person", screen: Screens.Profile },
  { name: "Map", icon: "location", screen: Screens.Map },
  { name: "Settings", icon: "settings", screen: Screens.Setting },
];

const HomeButtons = ({ navigation, onDrinkWater }) => {
  return (
    <View>
      <View style={{ alignItems: "center", marginBottom: 48 }}>
        <View style={{ width: ScreenWidth * 0.4 }}>
          <Button
            text="Drink water"
            backgroundColor={Colors.Blue}
            onPress={onDrinkWater}
            style={{ borderRadius: 16 }}
            textStyle={{ fontSize: 24 }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: btnSize * 2.2,
        }}
      >
        {btns.map((item, index) => (
          <View
            style={{
              width: btnSize,
              justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
              height: btnSize * 2.2,
            }}
          >
            <TouchableOpacity
              key={index}
              style={{
                width: btnSize,
                height: btnSize,
                borderRadius: 50,
                backgroundColor: Colors.Green,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Ionicons name={item.icon} color={Colors.White} size={25} />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 8,
                color: Colors.Black,
                fontSize: 10,
                fontWeight: "700",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeButtons;
