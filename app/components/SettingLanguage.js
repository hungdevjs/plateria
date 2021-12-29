import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../utils/constants";

const SettingLanguage = ({ language, onSelectLanguage }) => {
  const isEnglish = language === "English";
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#ddd",
        borderRadius: 4,
        padding: 4,
      }}
    >
      <TouchableOpacity
        style={[
          isEnglish && styles.activeItem,
          styles.item,
          { marginRight: 2 },
        ]}
        onPress={() => onSelectLanguage("English")}
      >
        <Text>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          !isEnglish && styles.activeItem,
          styles.item,
          { marginLeft: 2 },
        ]}
        onPress={() => onSelectLanguage("Arabic")}
      >
        <Text>Arabic</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingLanguage;

const styles = StyleSheet.create({
  item: {
    height: 30,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activeItem: {
    borderRadius: 4,
    backgroundColor: Colors.White,
  },
});
