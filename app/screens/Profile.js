import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Ionicons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

import { FontSizes, Screens, Colors } from "../utils/constants";
import { getProfile } from "../services/account.service";
import { AppContext } from "../contexts/app.context";
import { getImageUrl } from "../utils/helpers";

const Profile = ({ navigation }) => {
  const { setIsLoading } = useContext(AppContext);
  const [data, setData] = useState(null);

  const getData = async () => {
    setIsLoading(true);

    try {
      const res = await getProfile();
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

  if (!data) return null;

  const { _id, name, userPlants } = data || {};

  const renderItem = (item) => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 130,
        width: 130,
        backgroundColor: Colors.White,
        borderRadius: 8,
        marginRight: 10,
      }}
    >
      <Image
        source={{ uri: getImageUrl(item.image) }}
        style={{ height: 80, width: 80, marginBottom: 8 }}
      />
      <Text style={{ fontSize: FontSizes.Big }}>{item.name}</Text>
    </View>
  );

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
          PROFILE
        </Text>
      </View>
      <KeyboardAwareScrollView style={{ flexGrow: 1, padding: 16 }}>
        {/* <Text>{JSON.stringify(data)}</Text> */}
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{
              fontWeight: "200",
              fontSize: FontSizes.Big,
              color: "#888",
            }}
          >
            Welcome back,
          </Text>
          <Text style={{ fontWeight: "700", fontSize: 20, color: "#582949" }}>
            {name}
          </Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "700", fontSize: 22, marginBottom: 8 }}>
            Recent plants
          </Text>
          <View style={{ flexDirection: "row" }}>
            {userPlants.slice(0, 2).map((item, index) => (
              <View
                key={item._id}
                style={[
                  { flexGrow: 1 },
                  !index && { marginRight: 5 },
                  index === 1 && { marginLeft: 5 },
                ]}
              >
                <View
                  style={[
                    {
                      height: 250,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 8,
                      marginBottom: 16,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    },
                    !index && { backgroundColor: "#ffceb6" },
                    index === 1 && { backgroundColor: "#ffdeb0" },
                  ]}
                >
                  <Image
                    source={{ uri: getImageUrl(item.image) }}
                    style={{ height: 80, width: 80 }}
                  />
                </View>
                <Text style={{ fontSize: FontSizes.Huge, marginBottom: 8 }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 4,
                      backgroundColor: "#fff2ea",
                      paddingVertical: 4,
                      paddingHorizontal: 16,
                    }}
                  >
                    <Text style={{ color: "tomato", fontWeight: "700" }}>
                      {item.type}
                    </Text>
                  </View>
                  <Text style={{ color: "#ccc", fontWeight: "700" }}>
                    Level: {item.level}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: "700", fontSize: 22, marginBottom: 8 }}>
            Your plants
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 45,
                width: 45,
                borderWidth: 1,
                borderColor: Colors.Gray,
                borderRadius: 14,
                marginRight: 16,
              }}
              onPress={() => navigation.navigate(Screens.Store)}
            >
              <Text style={{ fontSize: 24, color: Colors.Gray }}>+</Text>
            </TouchableOpacity>
            <FlatList
              horizontal
              data={userPlants}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => renderItem(item)}
            />
          </View>
        </View>
        <View style={{ height: 50 }} />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
