import { colors } from "@/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface ResetPasswordFormProps {
  onSuccess: () => void;
}

export default function ResetPasswordForm({
  onSuccess,
}: ResetPasswordFormProps) {
  const [isPasswordHidden, setIsPasswordHidden] = useState(false);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(false);

  const handleResetPassword = () => {
    onSuccess();
  };

  return (
    <>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Almost there!</Text>
        <Text style={styles.description}>
          Kindly input password below to create a new password
        </Text>

        <View style={{ rowGap: 20 }}>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#5E645E"
              keyboardType="default"
              secureTextEntry={isPasswordHidden}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.passwordInput}
            />
            <Ionicons
              name={isPasswordHidden ? "eye-off" : "eye-sharp"}
              size={20}
              color="#00000066"
              onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            />
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#5E645E"
              keyboardType="default"
              secureTextEntry={isConfirmPasswordHidden}
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.passwordInput}
            />
            <Ionicons
              name={isConfirmPasswordHidden ? "eye-off" : "eye-sharp"}
              size={20}
              color="#00000066"
              onPress={() =>
                setIsConfirmPasswordHidden(!isConfirmPasswordHidden)
              }
            />
          </View>
        </View>
      </View>

      <Pressable
        style={styles.resetPasswordButton}
        onPress={handleResetPassword}
      >
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
    marginTop: 40,
  },
  title: {
    color: "#020202",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#5E645E",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginTop: 10,
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

  passwordContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
});
