import { colors } from "@/utils/constants";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function GetStarted() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/onboarding/get-started.gif")}
    >
      <View style={styles.overlay}>
        <Pressable
          style={styles.getStartedButton}
          onPress={() => router.push("/(onboarding)/welcome")}
        >
          <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    backgroundColor: "#00000059",
    height,
    width,
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 150,
    paddingHorizontal: 25,
  },
  getStartedButton: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 10,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
