import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Colors, FontSizes, Screens } from "../utils/constants";
import { AppContext } from "../contexts/app.context";
import { getSettings, updateSettings } from "../services/account.service";

import SettingHeader from "../components/SettingHeader";
import SettingLanguage from "../components/SettingLanguage";
import SettingSocial from "../components/SettingSocial";
import SettingGame from "../components/SettingGame";
import SettingWater from "../components/SettingWater";

const Setting = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState(null);

  const changeData = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const {
    _id,
    name,
    language,
    instagram,
    tiktok,
    facebook,
    twitter,
    activeSocial,
    music,
    soundEffect,
    dailyGoal,
    cupVolume,
    reminder,
  } = data || {};

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getSettings();
      setData(res.data);
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

  const onSave = async () => {
    setIsLoading(true);

    try {
      await updateSettings({
        language,
        instagram,
        tiktok,
        facebook,
        twitter,
        activeSocial,
        music,
        soundEffect,
        dailyGoal,
        cupVolume,
        reminder,
      });
      Toast.show({
        type: "success",
        text1: "Update settings successfully",
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

  return (
    <View style={styles.container}>
      <SettingHeader
        onBack={() => navigation.navigate(Screens.Home)}
        onSave={onSave}
      />
      {/* <Text>{JSON.stringify(data)}</Text> */}
      <KeyboardAwareScrollView style={{ padding: 16 }}>
        <View style={styles.item}>
          <Text style={styles.label}>ID number</Text>
          <Text style={styles.value}>{_id}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Profile name</Text>
          <Text style={styles.value}>{name}</Text>
        </View>
        <View
          style={{
            height: 2,
            backgroundColor: Colors.Gray,
            marginVertical: 4,
          }}
        />
        <View style={styles.item}>
          <Text style={styles.label}>Language</Text>
          <SettingLanguage
            language={language}
            onSelectLanguage={(value) => changeData("language", value)}
          />
        </View>
        <View style={styles.item}>
          <SettingSocial
            values={{ instagram, tiktok, facebook, twitter }}
            activeSocial={activeSocial}
            changeData={changeData}
          />
        </View>
        <View style={styles.item}>
          <SettingGame
            music={music}
            soundEffect={soundEffect}
            changeData={changeData}
          />
        </View>
        <View style={styles.item}>
          <SettingWater
            dailyGoal={dailyGoal}
            cupVolume={cupVolume}
            reminder={reminder}
            changeData={changeData}
          />
        </View>
        <View style={{ height: 50 }} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginVertical: 8,
  },
  label: {
    fontSize: FontSizes.Small,
    color: Colors.Gray,
    marginBottom: 4,
  },
  value: {
    fontSize: FontSizes.Big,
  },
});
