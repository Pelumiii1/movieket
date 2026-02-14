import { colors } from "@/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const RegisterForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#5E645E"
          keyboardType="default"
          style={styles.input}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#5E645E"
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#5E645E"
          keyboardType="phone-pad"
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

        {/* Confrim Password  */}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confrim Password"
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
            onPress={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
          />
        </View>
      </View>

      <Text style={styles.termsText}>
        By continuing, you agree to our{" "}
        <Text style={styles.termsLink} onPress={() => console.log("hello")}>
          Terms of Service and Private Policy
        </Text>
      </Text>

      <Pressable
        style={styles.createAnAccoount}
        // onPress={() => router.push("/(auth)/register")}
      >
        <Text style={styles.buttonText}>Create an Account</Text>
      </Pressable>
      <Pressable
        style={styles.loginButton}
        // onPress={() => router.push("/(auth)")}
      >
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </Pressable>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
  },
  inputContainer: {
    rowGap: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    height: 50,
    padding: 12,
    borderRadius: 8,
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
  termsText: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.SECONDARY,
    textAlign: "center",
    marginVertical: 15,
  },
  termsLink: {
    color: colors.PRIMARY,
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
