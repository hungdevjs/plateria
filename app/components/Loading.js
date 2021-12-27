import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIndicator } from "react-native-indicators";

import { AppContext } from "../contexts/app.context";
import { Colors } from "../utils/constants";

const Loading = () => {
  const { isLoading } = useContext(AppContext);

  if (!isLoading) return null;

  return (
    <View style={styles.container}>
      <MaterialIndicator color={Colors.Red} count={3} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.Overlay,
    alignItems: "center",
    justifyContent: "center",
  },
});
