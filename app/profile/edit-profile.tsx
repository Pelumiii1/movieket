import AppButton from "@/components/Common/AppButton";
import { colors } from "@/utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: colors.PRIMARY,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign
          name="arrow-left"
          size={24}
          color="white"
          onPress={() => router.back()}
        />
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Edit Profile
        </Text>
        <View />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          paddingBottom: 40,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginVertical: 10, gap: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/images/image1.jpg")}
              style={{
                width: 120,
                height: 120,
                borderRadius: 1000,
                marginVertical: 10,
              }}
            />
            <Text style={{ color: "#020202", fontWeight: "500" }}>
              Tap to change
            </Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Full Name"
            style={{
              borderColor: "#C4C4C4",
              borderWidth: 1,
              borderRadius: 8,
              height: 50,
              paddingHorizontal: 10,
            }}
            placeholderTextColor={"#5E645E"}
          />
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            style={{
              borderColor: "#C4C4C4",
              borderWidth: 1,
              borderRadius: 8,
              height: 50,
              paddingHorizontal: 10,
            }}
            placeholderTextColor={"#5E645E"}
          />
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            style={{
              borderColor: "#C4C4C4",
              borderWidth: 1,
              borderRadius: 8,
              height: 50,
              paddingHorizontal: 10,
            }}
            placeholderTextColor={"#5E645E"}
          />
        </View>
        <View>
          <Text
            style={{ textAlign: "center", marginBottom: 20, color: "#020202" }}
          >
            You can change your picture with this form. To change your account
            information please send an an email contact@movieket.com
          </Text>
          <AppButton
            title="Update Profile"
            onPress={() => {}}
            style={{ width: "100%" }}
          />
        </View>
      </View>
      <StatusBar backgroundColor={"red"} barStyle={"dark-content"} />
    </SafeAreaView>
  );
}
