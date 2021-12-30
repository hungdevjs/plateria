import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import Carousel from "react-native-snap-carousel";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { AppContext } from "../contexts/app.context";
import { getUserStuffs, updateUserStuffs } from "../services/account.service";
import { getImageUrl } from "../utils/helpers";
import { ScreenWidth, Colors, FontSizes, Screens } from "../utils/constants";

import Button from "../components/Button";

const Customize = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState(null);

  const [activePlantId, setActivePlantId] = useState(null);
  const [activePotId, setActivePotId] = useState(null);
  const [activeBackgroundId, setActiveBackgroundId] = useState(null);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getUserStuffs();
      setData(res.data);
      const { userPlants, userPots, userBackgrounds } = res.data;
      setActivePlantId(userPlants[0]?._id || null);
      setActivePotId(userPots[0]?._id || null);
      setActiveBackgroundId(userBackgrounds[0]?._id || null);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const save = async () => {
    setIsLoading(true);

    try {
      await updateUserStuffs({
        activeBackgroundId,
        activePlantId,
        activePotId,
      });
      Toast.show({
        type: "success",
        text1: "Update successfully",
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  if (!data) return null;

  const { userPlants, userPots, userBackgrounds } = data;

  const renderItem = ({ item, index }) => (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          padding: 16,
          borderWidth: 1,
          borderRadius: 4,
          borderColor: Colors.Gray,
          backgroundColor: Colors.White,
        }}
      >
        <Image
          source={{ uri: getImageUrl(item.image) }}
          style={{ width: 120, height: 120 }}
        />
      </View>
    </View>
  );

  const stuffs = [
    { name: "Plants", data: userPlants },
    { name: "Pots", data: userPots },
    { name: "Backgrounds", data: userBackgrounds },
  ];

  const onSelect = (name, index) => {
    if (name === "Plants") {
      const selectedPlantId = userPlants[index]?._id || null;
      setActivePlantId(selectedPlantId);
    }

    if (name == "Pots") {
      const selectedPotId = userPots[index]?._id || null;
      setActivePotId(selectedPotId);
    }

    if (name == "Backgrounds") {
      const selectedBackgroundId = userBackgrounds[index]?._id || null;
      setActiveBackgroundId(selectedBackgroundId);
    }
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
          marginBottom: 8,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate(Screens.Home)}>
          <Ionicons name="caret-back-outline" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: FontSizes.Big,
            fontWeight: "700",
            marginRight: 25,
          }}
        >
          CUSTOMIZE
        </Text>
      </View>
      <KeyboardAwareScrollView style={{ flexGrow: 1, padding: 16 }}>
        <Text>{JSON.stringify(data)}</Text>
        {stuffs.map((stuff) => (
          <View
            key={stuff.name}
            style={{ flexDirection: "row", marginBottom: 16 }}
          >
            <Text
              style={{ width: 100, fontWeight: "700", fontSize: FontSizes.Big }}
            >
              {stuff.name}
            </Text>
            <Carousel
              data={stuff.data}
              renderItem={renderItem}
              sliderWidth={ScreenWidth - 70}
              itemWidth={200}
              onSnapToItem={(slideIndex) => onSelect(stuff.name, slideIndex)}
            />
          </View>
        ))}
      </KeyboardAwareScrollView>
      <View style={{ padding: 16 }}>
        <Button text="Save" onPress={save} />
      </View>
    </View>
  );
};

export default Customize;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
