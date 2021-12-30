import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import Toast from "react-native-toast-message";

import { AppContext } from "../contexts/app.context";
import { getUserPlant, drinkWater } from "../services/account.service";

import Exp from "../components/Exp";
import Gold from "../components/Gold";
import HomeButtons from "../components/HomeButtons";
import { getImageUrl } from "../utils/helpers";

const Home = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getUserPlant();
      setData(res.data);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  const onDrinkWater = async () => {
    setIsLoading(true);

    try {
      await drinkWater();
      await getData();
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  if (!data) return null;

  return (
    <ImageBackground
      resizeMode="cover"
      source={{ uri: getImageUrl(data.activeBackground.image) }}
      style={{ height: "100%", width: "100%" }}
    >
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Exp level={data.level} expRate={data.expRate} />
          <Gold gold={data.gold} />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
          }}
        >
          <Image
            source={{ uri: getImageUrl(data.activePlant.image) }}
            style={{ height: 80, width: 80 }}
          />
          <Image
            source={{ uri: getImageUrl(data.activePot.image) }}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <HomeButtons navigation={navigation} onDrinkWater={onDrinkWater} />
        </View>
        {/* <Text>{JSON.stringify(data)}</Text> */}
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 48,
  },
});
