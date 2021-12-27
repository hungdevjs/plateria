import React from "react";
import { View, Text } from "react-native";

import { ScreenWidth, Colors, FontSizes } from "../utils/constants";

const width = ScreenWidth * 0.25;

const Exp = ({ level, expRate }) => {
  return (
    <View>
      <Text style={{ marginBottom: 4, fontSize: FontSizes.Small }}>
        Level {level}
      </Text>
      <View
        style={{
          height: 10,
          width,
          backgroundColor: Colors.Gray,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 10,
            backgroundColor: Colors.Green,
            width: `${Math.round(expRate)}%`,
          }}
        />
      </View>
    </View>
  );
};

export default Exp;
