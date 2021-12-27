import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Input from "../components/Input";
import { Colors, Screens, Images } from "../utils/constants";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <BackButton onPress={() => navigation.navigate(Screens.Start)} />
        <Image source={Images.title} style={styles.img} />
        <Image source={Images.plant} style={styles.img} />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Input
          placeholder="Password"
          isPassword
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          text="Login"
          backgroundColor={Colors.Green}
          onPress={() => navigation.navigate(Screens.LogIn)}
          style={styles.btn}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginBottom: 16,
  },
  btn: {
    width: "100%",
    marginBottom: 16,
  },
});
