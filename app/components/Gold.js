import React from "react";
import { View, Text, Image } from "react-native";

import { Images } from "../utils/constants";

const Gold = ({ gold }) => {
  return (
    <View>
      <View
        style={{
          height: 20,
          borderRadius: 4,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={Images.gold}
          style={{ height: 20, width: 20, marginRight: 16 }}
        />
        <Text style={{ fontWeight: "700" }}>{gold}</Text>
      </View>
    </View>
  );
};

export default Gold;
