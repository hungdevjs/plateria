import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

import { Colors, FontSizes } from "../utils/constants";

const SettingGame = ({ music, soundEffect, changeData }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: Colors.Gray,
        padding: 16,
      }}
    >
      <Text style={{ marginBottom: 8, fontSize: FontSizes.Big }}>Game</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="musical-note" size={20} color={Colors.Black} />
          <Text style={{ marginLeft: 8 }}>Music</Text>
        </View>
        <ToggleSwitch
          isOn={music}
          onColor="#e4e4e4"
          offColor="#e4e4e4"
          size="medium"
          thumbOnStyle={{ backgroundColor: "#58d056" }}
          onToggle={(value) => changeData("music", value)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="volume-high-sharp" size={20} color={Colors.Black} />
          <Text style={{ marginLeft: 8 }}>Sound effects</Text>
        </View>
        <ToggleSwitch
          isOn={soundEffect}
          onColor="#e4e4e4"
          offColor="#e4e4e4"
          size="medium"
          thumbOnStyle={{ backgroundColor: "#58d056" }}
          onToggle={(value) => changeData("soundEffect", value)}
        />
      </View>
    </View>
  );
};

export default SettingGame;
