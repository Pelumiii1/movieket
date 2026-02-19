import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/constants";

interface ResetPasswordLinkSentProps {
  onContinue: () => void;
}

export default function ResetPasswordLinkSent({
  onContinue,
}: ResetPasswordLinkSentProps) {
  return (
    <>
      <View style={styles.contentContainer}>
        <Image
          source={require("../../assets/images/amico.png")}
          width={20}
          height={20}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Password reset link successfully sent</Text>
        <Text style={styles.description}>
          Please check your mail and follow the instruction to retrieve your
          password{" "}
        </Text>
      </View>

      <Pressable style={styles.resetPasswordButton} onPress={onContinue}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)")}>
        <Text style={styles.returnLink}>Return to Log in</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    textAlign: "center",
    color: "#020202",
    fontSize: 19,
    fontWeight: "500",
    marginTop: 20,
  },
  description: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    color: "#5E645E",
  },
  resetPasswordButton: {
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
  returnLink: {
    color: colors.PRIMARY,
    fontWeight: "500",
    marginTop: 20,
  },
});
