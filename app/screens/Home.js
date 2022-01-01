import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import Toast from "react-native-toast-message";
import { useIsFocused } from "@react-navigation/native";

import { AppContext } from "../contexts/app.context";
import { getUserPlant, drinkWater } from "../services/account.service";

import Exp from "../components/Exp";
import Gold from "../components/Gold";
import HomeButtons from "../components/HomeButtons";
import { getImageUrl } from "../utils/helpers";

const Home = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState(null);
  const animations = useRef(new Animated.ValueXY({ x: 0, y: 1 })).current;

  const animatePlant = () => {
    Animated.timing(animations, {
      toValue: { x: 20, y: 1.2 },
      duration: 300,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        Animated.timing(animations, {
          toValue: { x: 0, y: 1 },
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    });
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

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
      const res = await drinkWater();
      await getData();
      animatePlant();

      const { isEnough } = res.data;
      const text1 = isEnough
        ? "You completed your daily goal for today"
        : "Your plant is growing up!";

      setTimeout(() => {
        Toast.show({
          type: "success",
          text1,
          text2: "Keep it up!",
        });
      }, 700);
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
          <Animated.View style={{ transform: [{ scale: animations.y }] }}>
            <Exp level={data.level} expRate={data.expRate} />
          </Animated.View>
          <Animated.View style={{ transform: [{ scale: animations.y }] }}>
            <Gold gold={data.gold} />
          </Animated.View>
        </View>
        <Animated.View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexGrow: 1,
            transform: [
              { scale: animations.y },
              { translateY: (animations && -animations.x) || 0 },
            ],
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
        </Animated.View>
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
