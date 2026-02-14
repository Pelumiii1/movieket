import LoginForm from "@/components/Auth/LoginForm";
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

export default function Login() {
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
          <View style={styles.header}>
            <Image
              source={require("../../assets/product-logo-primary.png")}
              width={100}
              height={100}
              resizeMode="contain"
              style={styles.logo}
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.title}>Welcome Back</Text>
              <Text style={styles.subtitle}>
                Log into your account to view and book upcoming movies showing
                at the Cinema
              </Text>
            </View>
          </View>

          <LoginForm />
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar backgroundColor="#F5F5F5" barStyle={"dark-content"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flex: 1,
  },
  header: {
    padding: 10,
    paddingTop: 30,
  },
  logo: {
    width: 170,
    height: 25,
  },
  welcomeContainer: {
    marginTop: 70,
    marginBottom: 10,
    rowGap: 10,
  },
  title: {
    color: "#222822",
    fontSize: 22,
    fontWeight: "500",
  },
  subtitle: {
    color: "#919191",
    fontSize: 14,
    fontWeight: "500",
    width: "85%",
  },
});
