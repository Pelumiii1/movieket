import { colors } from "@/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const LoginForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email Address"
        placeholderTextColor="#5E645E"
        keyboardType="email-address"
        style={styles.input}
      />
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

      <View style={styles.optionsContainer}>
        <View style={styles.rememberMeContainer}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
            trackColor={{ false: "#E9E9EA", true: colors.PRIMARY }}
            thumbColor="white"
            ios_backgroundColor="#E9E9EA"
          />
          <Text style={styles.rememberMeText}>Remember Me</Text>
        </View>
        <Pressable onPress={() => router.push("/(auth)/forgot-password")}>
          <Text style={styles.forgotPasswordText}>Forgot password ?</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.loginButton}
        // onPress={() => router.push("/(auth)/register")}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </Pressable>
      <Pressable
        style={styles.continueWithGoogle}
        // onPress={() => router.push("/(auth)")}
      >
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </Pressable>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Dont have and account? </Text>
        <Pressable onPress={() => router.push("/(auth)/register")}>
          <Text style={styles.loginLink}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    height: 50,
    padding: 12,
    borderRadius: 8,
    marginBottom: 18,
    marginTop: 30,
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
  optionsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rememberMeText: {
    color: "#919191",
    fontWeight: "500",
  },
  forgotPasswordText: {
    color: colors.PRIMARY,
    fontWeight: "500",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 18,
  },
  googleButtonText: {
    color: colors.PRIMARY,
    fontWeight: "500",
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: colors.PRIMARY,
    marginTop: 20,
    borderRadius: 10,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  continueWithGoogle: {
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  footerText: {
    color: colors.SECONDARY,
    fontSize: 14,
    fontWeight: "500",
  },
  loginLink: {
    color: colors.PRIMARY,
    fontSize: 14,
    fontWeight: "500",
  },
});
