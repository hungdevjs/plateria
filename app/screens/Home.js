import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";

import { AppContext } from "../contexts/app.context";
import { getUserPlant } from "../services/account.service";

const Home = () => {
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

  if (!data) return null;

  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
