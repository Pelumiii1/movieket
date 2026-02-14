import RegisterForm from "@/components/Auth/RegisterForm";
import { colors } from "@/utils/constants";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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
        style={styles.keyboardView}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Image
            source={require("../../assets/product-logo-primary.png")}
            width={100}
            height={100}
            resizeMode="contain"
            style={styles.logo}
          />

          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Kindly fill your information below to register with us today
            </Text>
          </View>
          <RegisterForm />

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <Pressable onPress={() => router.push("/(auth)")}>
              <Text style={styles.loginLink}>Login</Text>
            </Pressable>
          </View>
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
    paddingTop: 30,
    paddingBottom: 5,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  logo: {
    width: 170,
    height: 25,
  },
  header: {
    rowGap: 5,
    paddingTop: 20,
  },
  title: {
    color: "#020202",
    fontWeight: "500",
    fontSize: 22,
  },
  subtitle: {
    color: colors.SECONDARY,
    fontWeight: "500",
    fontSize: 14,
    maxWidth: "80%",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
