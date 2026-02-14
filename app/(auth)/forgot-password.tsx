import { colors } from "@/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ForgotPassword() {
  return (
    <SafeAreaView style={{ padding: 15 }}>
      <Ionicons
        name="arrow-back-sharp"
        size={28}
        color="black"
        onPress={() => router.back()}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "500",
          color: "#020202",
          marginTop: 20,
        }}
      >
        Forgot Password
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: "400",
          color: "#5E645E",
          marginTop: 10,
          width: "90%",
        }}
      >
        Please enter your registered email address in the field below and we
        will send you a link to reset your password
      </Text>

      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#5E645E"
        keyboardType="email-address"
        style={styles.input}
      />

      <Pressable
        style={styles.resetPasswordButton}
        // onPress={() => router.push("/(auth)/register")}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(auth)")}>
        <Text
          style={{
            color: colors.PRIMARY,
            fontWeight: "500",
            marginTop: 20,
          }}
        >
          Return to Log in
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    height: 50,
    padding: 12,
    borderRadius: 8,
    marginBottom: 18,
    marginTop: 30,
  },
  resetPasswordButton: {
    backgroundColor: colors.PRIMARY,
    marginTop: 20,
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
});
