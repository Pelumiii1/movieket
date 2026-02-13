import { colors } from "@/utils/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const RegisterForm = () => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfirmPasswordHidden, setIsConfirmPasswordHidden] = useState(true);

  return (
    <View style={{ paddingVertical: 15 }}>
      <View style={{ rowGap: 18 }}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="#5E645E"
          keyboardType="default"
          style={{
            borderWidth: 1,
            borderColor: "#C4C4C4",
            height: 50,
            padding: 12,
            borderRadius: 8,
          }}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#5E645E"
          keyboardType="email-address"
          style={{
            borderWidth: 1,
            borderColor: "#C4C4C4",
            height: 50,
            padding: 12,
            borderRadius: 8,
          }}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#5E645E"
          keyboardType="phone-pad"
          style={{
            borderWidth: 1,
            borderColor: "#C4C4C4",
            height: 50,
            padding: 12,
            borderRadius: 8,
          }}
        />
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#C4C4C4",
            height: 50,
            paddingHorizontal: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Password"
            placeholderTextColor="#5E645E"
            keyboardType="default"
            secureTextEntry={isPasswordHidden}
            autoCorrect={false}
            autoCapitalize="none"
            style={{
              flex: 1,
              height: 50,
            }}
          />
          <Ionicons
            name={isPasswordHidden ? "eye-off" : "eye-sharp"}
            size={20}
            color="#00000066"
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
          />
        </View>

        {/* Confrim Password  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#C4C4C4",
            paddingHorizontal: 12,
            borderRadius: 8,
          }}
        >
          <TextInput
            placeholder="Confrim Password"
            placeholderTextColor="#5E645E"
            keyboardType="default"
            secureTextEntry={isConfirmPasswordHidden}
            autoCorrect={false}
            autoCapitalize="none"
            style={{
              flex: 1,
              height: 50,
            }}
          />
          <Ionicons
            name={isConfirmPasswordHidden ? "eye-off" : "eye-sharp"}
            size={20}
            color="#00000066"
            onPress={() => setIsConfirmPasswordHidden(!isConfirmPasswordHidden)}
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: colors.SECONDARY,
          textAlign: "center",
          marginVertical: 15,
        }}
      >
        By continuing, you agree to our{" "}
        <Text
          style={{ color: colors.PRIMARY }}
          onPress={() => console.log("hello")}
        >
          Terms of Service and Private Policy
        </Text>
      </Text>

      <Pressable
        style={styles.createAnAccoount}
        // onPress={() => router.push("/(auth)/register")}
      >
        <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
          Create an Account
        </Text>
      </Pressable>
      <Pressable
        style={styles.loginButton}
        // onPress={() => router.push("/(auth)")}
      >
        <Text
          style={{ color: colors.PRIMARY, fontWeight: "500", fontSize: 18 }}
        >
          Continue with Google
        </Text>
      </Pressable>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
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
