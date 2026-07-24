import { colors } from "@/utils/constants";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
  genres?: string[];
  status?: "Now Showing" | "Coming Soon";
  onPress?: () => void;
}

const MovieCard = ({
  id,
  title,
  image,
  rating,
  genres,
  status,
  onPress,
}: MovieCardProps) => {
  const progress = (rating / 5.0) * 100;

  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Movie Poster Image */}
      <Image
        source={require("../../assets/images/dr-strange.jpg")}
        style={styles.poster}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingVertical: 12,
        }}
      >
        {/* Movie Info */}
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>

          {/* Genres */}
          {genres && genres.length > 0 && (
            <Text style={styles.genres} numberOfLines={1}>
              {genres.join(", ")}
            </Text>
          )}
        </View>

        {/* Rating    */}
        <AnimatedCircularProgress
          size={21}
          width={1}
          fill={progress}
          tintColor="#C580C7"
          // backgroundColor="#E0E0E0"
          rotation={0}
          lineCap="round"
          style={{ transform: [{ scaleX: -1 }] }}
        >
          {(fill: number) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                transform: [{ scaleX: -1 }],
              }}
            >
              <Text
                style={{
                  color: colors?.PRIMARY || "#000",
                  fontSize: 8,
                  fontWeight: "500",
                }}
              >
                {rating.toFixed(1)}
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>

        {/* </View> */}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  poster: {
    width: "100%",
    height: 220,
    borderRadius: 8,
  },
  statusBadge: {
    position: "absolute",
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  comingSoonBadge: {
    backgroundColor: "rgba(137, 68, 139, 0.9)",
  },
  nowShowingBadge: {
    backgroundColor: "rgba(76, 175, 80, 0.9)",
  },
  statusText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
  ratingContainer: {
    position: "absolute",
    bottom: 60,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    gap: 4,
  },
  ratingText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  info: {
    gap: 6,
    maxWidth: "80%",
  },
  title: {
    color: "black",
    fontSize: 13,
    fontWeight: "500",
  },
  genres: {
    color: "#4A504A",
    fontSize: 10,
    fontWeight: "500",
  },
});

export default MovieCard;
