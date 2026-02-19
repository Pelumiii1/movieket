import { colors } from "@/utils/constants";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ padding: 15 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginBottom: 10 }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 500,
              color: "#020202",
              marginBottom: 10,
            }}
          >
            My Account
          </Text>
          <Text style={{ fontSize: 17, fontWeight: 500, color: "#020202" }}>
            Emmanuel Adebayo
          </Text>
        </View>
        <Image
          source={require("../../assets/profile.jpg")}
          style={{ width: 55, height: 55, borderRadius: 1000 }}
        />
      </View>
      <View
        style={{ flexDirection: "row", gap: 20, justifyContent: "flex-end" }}
      >
        <Pressable
          style={{
            backgroundColor: colors.PRIMARY,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>
            Edit Profile
          </Text>
        </Pressable>
        <Pressable
          style={{
            borderColor: colors.PRIMARY,
            paddingVertical: 10,
            borderWidth: 1,
            paddingHorizontal: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontWeight: "500" }}>100,000</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
