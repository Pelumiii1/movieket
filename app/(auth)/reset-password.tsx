import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import ResetPasswordLinkSent from "@/components/Auth/ResetPasswordLinkSent";
import ResetPasswordSuccess from "@/components/Auth/ResetPasswordSuccess";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenType = "linkSent" | "form" | "success";

export default function ResetPassword() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>("linkSent");

  const handleShowForm = () => {
    setCurrentScreen("form");
  };

  const handleFormSuccess = () => {
    setCurrentScreen("success");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="arrow-back-sharp"
        size={28}
        color="black"
        onPress={() => router.back()}
      />

      {currentScreen === "linkSent" && (
        <ResetPasswordLinkSent onContinue={handleShowForm} />
      )}
      {currentScreen === "form" && (
        <ResetPasswordForm onSuccess={handleFormSuccess} />
      )}
      {currentScreen === "success" && <ResetPasswordSuccess />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
