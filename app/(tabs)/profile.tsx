import { colors } from "@/utils/constants";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  function handleLogout() {
    Alert.alert("Log Out", "Are you sure you want to log out", [
      {
        text: "No",
        onPress: () => console.log("Cancel"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => router.push("/(auth)"),
        style: "destructive",
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.accountInfo}>
            <Text style={styles.title}>My Account</Text>
            <Text style={styles.name}>Emmanuel Adebayo</Text>
          </View>
          <Image
            source={require("../../assets/profile.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.actionsContainer}>
          <Pressable
            style={styles.editButton}
            onPress={() => router.push("/profile/edit-profile")}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </Pressable>
          <Pressable style={styles.pointsButton}>
            <Text style={styles.pointsText}>100,000</Text>
          </Pressable>
        </View>
        <View
          style={{ borderColor: "#C4C4C433", borderWidth: 1, marginTop: 20 }}
        />

        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 20,
            padding: 15,
            marginTop: 20,
            gap: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/profile/account-settings")}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/account-settings.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>
                  Account Settings
                </Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/wallet.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>Wallet</Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/card.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>
                  Card Management
                </Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 20,
            padding: 15,
            marginTop: 20,
            gap: 30,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/refer.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>
                  Refer and Earn
                </Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/mail.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>
                  Email Verification
                </Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/contact.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>
                  Contact Us
                </Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: 20,
            padding: 15,
            marginTop: 20,
            gap: 30,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/help.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>About Us</Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image
                  source={require("../../assets/icons/logout.png")}
                  style={{ width: 28, height: 28 }}
                  contentFit="contain"
                />
                <Text style={{ color: "#363C36", fontSize: 14 }}>Log Out</Text>
              </View>
              <AntDesign name="right" size={20} color="#D994DB" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accountInfo: {
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "500",
    color: "#020202",
    marginBottom: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: "500",
    color: "#020202",
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 1000,
  },
  actionsContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: colors.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  editButtonText: {
    color: "white",
    fontWeight: "500",
  },
  pointsButton: {
    borderColor: colors.PRIMARY,
    paddingVertical: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  pointsText: {
    fontWeight: "500",
  },
});
