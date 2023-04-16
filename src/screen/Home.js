import React, { useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import { Forms } from "../components";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchIP } from "../redux/actions";

const Home = () => {
  const ipData = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIP());
  }, [dispatch]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
      </View>
    );
  }
  return (
    <View className="bg-slate-100 flex-1">
      <View className="z-10 bg-lime-600 h-2/4 w-full items-center">
        <View className="flex-row w-11/12 justify-between pt-6 items-center">
          <FontAwesome5 className="" name="bars" size={33} color="white" />
          <View style={styles.container}>
            <Text
              style={styles.text}
              className="text-2xl text-white font-bold translate-y-10"
            >
              Hiling.id{"\n"}
              {ipData?.ip_addr}
            </Text>
          </View>
          <FontAwesome5 name="user-alt" size={25} color="white" />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="z-20 h-full w-10/12 absolute justify-center self-center"
      >
        <Forms />
      </KeyboardAvoidingView>
      <Text className="bottom-0 absolute self-center pb-8">
        Copyright GMS ©️120140147
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Mengatur posisi vertikal menjadi di tengah
    alignItems: "center", // Mengatur posisi horizontal menjadi di tengah
  },
  text: {
    fontSize: 20,
    textAlign: "center", // Mengatur posisi teks menjadi di tengah
    color: "white",
    fontWeight: "bold",
    marginTop: 5, // Memberikan margin atas
  },
});
export default Home;
