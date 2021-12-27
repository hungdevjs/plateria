import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import validator from "email-validator";

import { AppContext } from "../contexts/app.context";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Input from "../components/Input";
import { Colors, Screens, Images, AccessToken } from "../utils/constants";
import { logIn } from "../services/account.service";

const LogIn = ({ navigation }) => {
  const { setIsLoading, setUser } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    if (!email || !email.trim() || !password || !password.trim())
      throw new Error("Please fill in email and password");

    if (!validator.validate(email)) throw new Error("Invalid email");
  };

  const submit = async () => {
    setIsLoading(true);

    try {
      validate();
      const res = await logIn({ email, password });
      const { accessToken, data } = res.data;
      await AsyncStorage.setItem(AccessToken, accessToken);
      setUser(data);
    } catch (err) {
      Toast.show({
        type: "error",
        text1: (err.response && err.response.data) || err.message,
      });
    }

    setIsLoading(false);
  };

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <BackButton onPress={() => navigation.navigate(Screens.Start)} />
        <Image source={Images.title} style={styles.img} />
        <Image source={Images.plant} style={styles.img} />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value.trim())}
        />
        <Input
          placeholder="Password"
          isPassword
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <Button
          text="Log in"
          backgroundColor={Colors.Green}
          onPress={submit}
          style={styles.btn}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LogIn;

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
