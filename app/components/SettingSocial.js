import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, FontSizes } from "../utils/constants";

const socials = [
  { name: "instagram", icon: "logo-instagram" },
  { name: "tiktok", icon: "share-social-outline" },
  { name: "facebook", icon: "logo-facebook" },
  { name: "twitter", icon: "logo-twitter" },
];

const SettingSocial = ({ values, activeSocial, changeData }) => {
  return (
    <View>
      <Text style={{ color: Colors.Gray, marginVertical: 8 }}>
        Add social network for watermark
      </Text>
      {socials.map((item) => (
        <View key={item.name} style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexGrow: 1,
              height: 60,
              marginRight: 4,
              marginBottom: 8,
              backgroundColor: "#ddd",
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              padding: 8,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f2f2",
                marginRight: 8,
              }}
            >
              <Ionicons name={item.icon} size={25} color={Colors.Gray} />
            </View>
            <Text style={{ marginRight: 4 }}>@</Text>
            <TextInput
              style={{ flexGrow: 1 }}
              value={values[item.name]}
              onChangeText={(value) => changeData(item.name, value)}
            />
          </View>
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#ddd",
              borderTopRightRadius: 4,
              borderBottomRightRadius: 4,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => changeData("activeSocial", item.name)}
            >
              <Ionicons
                name={
                  activeSocial === item.name
                    ? "checkmark-circle"
                    : "ellipse-outline"
                }
                size={25}
                color={activeSocial === item.name ? Colors.Green : Colors.Gray}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <Text
        style={{ fontSize: FontSizes.Small, color: Colors.Gray, marginTop: 8 }}
      >
        * Selected social network will be watermarked
      </Text>
    </View>
  );
};

export default SettingSocial;

const styles = StyleSheet.create({});
