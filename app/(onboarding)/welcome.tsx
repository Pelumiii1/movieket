import { colors } from "@/utils/constants";
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

export default function Welcome() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/onboarding/welcome.gif")}
    >
      <View style={styles.overlay}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          Welcome to Movieket
        </Text>
        <Pressable style={styles.createAnAccoount}>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
            Create an Account
          </Text>
        </Pressable>
        <Pressable style={styles.loginButton}>
          <Text
            style={{ color: colors.PRIMARY, fontWeight: "500", fontSize: 18 }}
          >
            Log in
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
  createAnAccoount: {
    backgroundColor: colors.PRIMARY,
    marginTop: 20,
    borderRadius: 10,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
