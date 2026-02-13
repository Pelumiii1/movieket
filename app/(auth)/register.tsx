import RegisterForm from "@/components/Auth/RegisterForm";
import { colors } from "@/utils/constants";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          <Image
            source={require("../../assets/product-logo-primary.png")}
            width={100}
            height={100}
            resizeMode="contain"
            style={{ width: 170, height: 25 }}
          />

          <View style={{ rowGap: 5, paddingTop: 20 }}>
            <Text style={{ color: "#020202", fontWeight: "500", fontSize: 22 }}>
              Create Account
            </Text>
            <Text
              style={{
                color: colors.SECONDARY,
                fontWeight: "500",
                fontSize: 14,
                maxWidth: "80%",
              }}
            >
              Kindly fill your information below to register with us today
            </Text>
          </View>
          <RegisterForm />

          <Text
            style={{
              color: colors.SECONDARY,
              fontSize: 14,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Text style={{ color: colors.PRIMARY }}>Login</Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>

      <StatusBar barStyle="dark-content" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingVertical: 30,
  },
});
