import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";

import { AppContext } from "../contexts/app.context";
import { getStore, buy } from "../services/store.service";
import { getUserGold } from "../services/account.service";
import {
  Screens,
  Images,
  ScreenHeight,
  FontSizes,
  Colors,
} from "../utils/constants";
import { getImageUrl } from "../utils/helpers";

import Button from "../components/Button";
import Gold from "../components/Gold";
import StoreHeader from "../components/StoreHeader";
import StoreFooter from "../components/StoreFooter";

const BuyTypes = {
  Plant: "Plant",
  Pot: "Pot",
  Background: "Background",
};

const Store = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [gold, setGold] = useState(0);
  const [data, setData] = useState(null);
  const [type, setType] = useState(BuyTypes.Plant);
  const [_id, setId] = useState(null);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getStore();
      setData(res.data);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  const getGold = async () => {
    setIsLoading(true);

    try {
      const res = await getUserGold();
      setGold(res.data.gold);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getGold();
    getData();
  }, []);

  if (!data) return null;

  const { plants, pots, backgrounds } = data;

  const items = (() => {
    switch (type) {
      case BuyTypes.Plant:
        return plants;
      case BuyTypes.Pot:
        return pots;
      case BuyTypes.Background:
        return backgrounds;
      default:
        return [];
    }
  })();

  const numberOfBoard = Math.ceil(items.length / 3);

  const activeItem = (() => {
    if (!_id) return null;

    return items.find((item) => item._id === _id);
  })();

  const buyItem = async () => {
    setIsLoading(true);

    try {
      await buy({ type, _id });
      await getGold();
      Toast.show({
        type: "success",
        text1: "Buy successfully",
      });
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setId(null);
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={!!_id}>
        <View
          style={{
            backgroundColor: Colors.White,
            borderRadius: 4,
            padding: 16,
          }}
        >
          <Text
            style={{
              marginBottom: 8,
              fontSize: FontSizes.Big,
              fontWeight: "700",
            }}
          >
            Do you want to buy this {type.toLowerCase()}
            {activeItem?.name ? ` ${activeItem.name}` : ""} with{" "}
            {activeItem?.price} gold?
          </Text>
          <Button
            text="Buy it"
            style={{ height: 40, marginBottom: 8 }}
            onPress={buyItem}
          />
          <Button
            text="Cancel"
            backgroundColor={Colors.Red}
            style={{ height: 40, marginBottom: 8 }}
            onPress={() => setId(null)}
          />
        </View>
      </Modal>
      <StoreHeader
        onBack={() => navigation.navigate(Screens.Home)}
        gold={gold}
      />
      <KeyboardAwareScrollView style={{ flexGrow: 1 }}>
        {/* <Text>{JSON.stringify(items)}</Text> */}
        {Array(numberOfBoard)
          .fill("")
          .map((item, index) => (
            <View
              key={index}
              style={{
                marginTop: ScreenHeight * 0.15,
              }}
            >
              <Image source={Images.board} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  position: "absolute",
                  top: -40,
                  left: 0,
                  width: "100%",
                }}
              >
                {items.slice(3 * index, 3 * index + 3).map((product, i) => (
                  <TouchableOpacity
                    key={i}
                    style={{ alignItems: "center" }}
                    onPress={() => setId(product._id)}
                  >
                    <Image
                      source={{ uri: getImageUrl(product.image) }}
                      style={{ width: 60, height: 60, marginBottom: 20 }}
                    />
                    {type !== BuyTypes.Background && (
                      <Text
                        style={{
                          textAlign: "center",
                          fontWeight: "700",
                          fontSize: FontSizes.Big,
                        }}
                      >
                        {product.name}
                      </Text>
                    )}
                    <Gold gold={product.price} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
      </KeyboardAwareScrollView>
      <StoreFooter type={type} setType={setType} BuyTypes={BuyTypes} />
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
