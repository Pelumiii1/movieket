import moviesData from "@/utils/movies.json";
import { useLocalSearchParams } from "expo-router";
import React from "react";

import AppButton from "@/components/Common/AppButton";
import { colors } from "@/utils/constants";
import { Image } from "expo-image";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const movie = moviesData.nowShowing.find((movie) => movie.id === Number(id));
  const [activeTab, setActiveTab] = React.useState("info");

  const progress = ((movie?.rating || 0) / 5) * 100;

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/dr-strange.jpg")}
        style={styles.movieImage}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.headerRow}>
          <View style={styles.infoColumn}>
            <Text style={styles.title} numberOfLines={2}>
              {movie?.title ?? "-"}
            </Text>
            <Text style={styles.metadata}>2022 PG18 2hr, 15 mins</Text>
            <View style={styles.genreRow}>
              {movie?.genres.map((genre, idx) => (
                <View key={idx} style={styles.genreBadge}>
                  <Text style={styles.genreText}>{genre}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Rating */}
          <AnimatedCircularProgress
            size={44}
            width={5}
            fill={progress}
            tintColor="#C580C7"
            backgroundColor="#ffffffff"
            rotation={0}
            lineCap="round"
            style={styles.ratingProgress}
          >
            {(fill: number) => (
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>
                  {movie?.rating?.toFixed(1)}
                </Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 30,
            marginTop: 20,
            marginBottom: 20,
            borderBottomColor: "#72787280",
            borderBottomWidth: 1,
          }}
        >
          <Pressable onPress={() => setActiveTab("info")}>
            <Text
              style={{
                color: activeTab === "info" ? colors.PRIMARY : "#9CA29C",
                borderBottomColor:
                  activeTab === "info" ? colors.PRIMARY : "transparent",
                borderBottomWidth: 2,
                paddingBottom: 10,
                fontWeight: "500",
                paddingHorizontal: 10,
              }}
            >
              Info
            </Text>
          </Pressable>
          <Pressable onPress={() => setActiveTab("cast")}>
            <Text
              style={{
                color: activeTab === "cast" ? colors.PRIMARY : "#9CA29C",
                borderBottomColor:
                  activeTab === "cast" ? colors.PRIMARY : "transparent",
                borderBottomWidth: 2,
                paddingBottom: 10,
                fontWeight: "500",
                paddingHorizontal: 10,
              }}
            >
              Cast
            </Text>
          </Pressable>

          <Pressable onPress={() => setActiveTab("reviews")}>
            <Text
              style={{
                color: activeTab === "reviews" ? colors.PRIMARY : "#9CA29C",
                borderBottomColor:
                  activeTab === "reviews" ? colors.PRIMARY : "transparent",
                borderBottomWidth: 2,
                paddingBottom: 10,
                fontWeight: "500",
                paddingHorizontal: 10,
              }}
            >
              Reviews
            </Text>
          </Pressable>
        </View>

        <AppButton
          variant="primary"
          title="Make a Reservation"
          onPress={() => {}}
        />
      </View>
      <StatusBar barStyle={"light-content"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieImage: {
    width: "100%",
    height: "60%",
  },
  detailsContainer: {
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 30,
    marginTop: -50,
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
  },
  infoColumn: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: "#020202",
    fontWeight: "500",
  },
  metadata: {
    color: "#222822",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 10,
  },
  genreRow: {
    flexDirection: "row",
    gap: 5,
    marginTop: 10,
  },
  genreBadge: {
    borderColor: "#B9B9B9",
    borderRadius: 30,
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 27,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  genreText: {
    color: "#363C36",
    fontSize: 12,
    fontWeight: "500",
  },
  ratingProgress: {
    transform: [{ scaleX: -1 }],
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    transform: [{ scaleX: -1 }],
  },
  ratingText: {
    color: colors?.PRIMARY || "#000",
    fontSize: 12,
    fontWeight: "500",
  },
});
