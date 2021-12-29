import React from "react";
import { View, Text } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

import { FontSizes, Colors } from "../utils/constants";

const SettingWater = ({ dailyGoal, cupVolume, reminder, changeData }) => {
  return (
    <View
      style={{
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: Colors.Gray,
        padding: 16,
      }}
    >
      <Text style={{ marginBottom: 8, fontSize: FontSizes.Big }}>
        Water comsumption
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="checkmark-circle" size={20} color={Colors.Black} />
          <Text style={{ marginLeft: 8 }}>Daily goal</Text>
        </View>
        <View style={{ flexGrow: 1 }}>
          <Picker
            selectedValue={dailyGoal}
            onValueChange={(itemValue) => changeData("dailyGoal", itemValue)}
          >
            <Picker.Item label="500ml" value={500} />
            <Picker.Item label="1000ml" value={1000} />
            <Picker.Item label="1500ml" value={1500} />
            <Picker.Item label="2000ml" value={2000} />
            <Picker.Item label="2500ml" value={2500} />
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: -16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="cafe" size={20} color={Colors.Black} />
          <Text style={{ marginLeft: 8 }}>Cup volume</Text>
        </View>
        <View style={{ flexGrow: 1 }}>
          <Picker
            selectedValue={cupVolume}
            onValueChange={(itemValue) => changeData("cupVolume", itemValue)}
          >
            <Picker.Item label="250ml" value={250} />
            <Picker.Item label="300ml" value={300} />
            <Picker.Item label="350ml" value={350} />
            <Picker.Item label="400ml" value={400} />
            <Picker.Item label="450ml" value={450} />
          </Picker>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="alarm" size={20} color={Colors.Black} />
          <Text style={{ marginLeft: 8 }}>Reminder</Text>
        </View>
        <ToggleSwitch
          isOn={reminder}
          onColor="#e4e4e4"
          offColor="#e4e4e4"
          size="medium"
          thumbOnStyle={{ backgroundColor: "#58d056" }}
          onToggle={(value) => changeData("reminder", value)}
        />
      </View>
    </View>
  );
};

export default SettingWater;
