import { colors } from "@/utils/constants";
import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ResetPasswordSuccess() {
  return (
    <>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/check-circle.png")}
          style={{
            height: 200,
            width: 200,
          }}
          contentFit="contain"
        />
        <Text style={styles.title}>Successful</Text>
        <Text style={styles.subTitle}>
          You have successfully reset your password
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => router.push("/(auth)")}>
        <Text style={styles.buttonText}>Proceed to Log In Now</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    textAlign: "center",
    color: "#020202",
    fontSize: 24,
    fontWeight: "600",
    marginTop: 20,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    color: "#5E645E",
  },
  button: {
    backgroundColor: colors.PRIMARY,
    marginTop: 50,
    borderRadius: 10,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  subTitle: {
    color: "#444444",
    fontWeight: "500",
    textAlign: "center",
  },
});
