import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Toast from "react-native-toast-message";
import validator from "email-validator";

import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Input from "../components/Input";
import { Colors, Screens, Images } from "../utils/constants";
import { AppContext } from "../contexts/app.context";
import { signUp } from "../services/account.service";

const SignUp = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = () => {
    if (
      !name ||
      !name.trim() ||
      !email ||
      !email.trim() ||
      !password ||
      !password.trim()
    )
      throw new Error("Please fill in all informations");

    if (!validator.validate(email)) throw new Error("Invalid email");

    if (password.length < 8)
      throw new Error("Password must have at least 8 characters");
    if (password !== confirmPassword) throw new Error("Password is not match");
  };

  const submit = async () => {
    setIsLoading(true);

    try {
      validate();
      await signUp({ email, name, password });
      navigation.navigate(Screens.LogIn);
      Toast.show({
        type: "success",
        text1: "Register successfully",
      });
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
          placeholder="Name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value.trim())}
        />
        <Input
          placeholder="Password"
          isPassword
          value={password}
          onChangeText={(value) => setPassword(value.trim())}
        />
        <Input
          placeholder="Confirm password"
          isPassword
          value={confirmPassword}
          onChangeText={(value) => setConfirmPassword(value.trim())}
        />
        <Button
          text="Create account"
          backgroundColor={Colors.Green}
          onPress={submit}
          style={styles.btn}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

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
