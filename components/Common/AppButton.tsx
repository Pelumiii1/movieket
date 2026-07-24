import { colors } from "@/utils/constants";
import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const AppButton = ({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
  textStyle,
}: AppButtonProps) => {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      style={[
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? "white" : colors.PRIMARY} />
      ) : (
        <Text
          style={[
            styles.text,
            isPrimary ? styles.primaryText : styles.secondaryText,
            disabled && styles.disabledText,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 55,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: colors.PRIMARY,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.PRIMARY,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: colors.PRIMARY,
  },
  disabledText: {
    color: "#fff",
  },
});
