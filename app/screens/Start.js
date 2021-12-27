import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import Button from "../components/Button";
import {
  Images,
  Colors,
  FontSizes,
  ScreenWidth,
  Screens,
} from "../utils/constants";

const socialBtns = [
  { name: "Google", icon: "logo-google" },
  { name: "TikTok", icon: "share-social-outline" },
  { name: "Twitter", icon: "logo-twitter" },
  { name: "Facebook", icon: "logo-facebook" },
];

const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={Images.cloud} style={styles.cloudImg} />
      <Image source={Images.title} style={styles.img} />
      <Image source={Images.plant} style={styles.img} />
      <Button
        text="Login"
        backgroundColor={Colors.Green}
        onPress={() => navigation.navigate(Screens.LogIn)}
        style={styles.btn}
      />
      <Button
        outline
        text="Register"
        backgroundColor={Colors.Gray}
        color={Colors.Gray}
        onPress={() => navigation.navigate(Screens.SignUp)}
        style={styles.btn}
      />
      <TouchableOpacity>
        <Text style={{ color: Colors.Green, marginBottom: 16 }}>
          Forgot password?
        </Text>
      </TouchableOpacity>
      <View
        style={{
          height: 20,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "50%",
            width: "100%",
            height: 2,
            backgroundColor: Colors.Black,
          }}
        />
        <View style={{ backgroundColor: Colors.White }}>
          <Text
            style={{
              fontSize: FontSizes.Big,
              fontWeight: "600",
              color: Colors.Black,
              paddingHorizontal: 16,
            }}
          >
            OR
          </Text>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        {socialBtns.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingVertical: 4,
            }}
          >
            <Ionicons name={item.icon} size={30} color={Colors.Gray} />
            <Text
              style={{
                marginLeft: ScreenWidth * 0.2,
                fontSize: FontSizes.Big,
                fontWeight: "700",
                color: Colors.Gray,
              }}
            >
              Login with {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 16,
    paddingHorizontal: 32,
  },
  cloudImg: {
    position: "absolute",
    top: -24,
    right: 16,
  },
  btn: {
    width: "100%",
    marginBottom: 16,
  },
  img: {
    marginBottom: 16,
  },
});
