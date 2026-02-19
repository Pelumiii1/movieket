import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  rating?: number;
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
  return (
    <Pressable style={styles.card} onPress={onPress}>
      {/* Movie Poster Image */}
      <Image source={{ uri: image }} style={styles.poster} />

      {/* Status Badge */}
      {/* {status && (
        <View
          style={[
            styles.statusBadge,
            status === "Coming Soon"
              ? styles.comingSoonBadge
              : styles.nowShowingBadge,
          ]}
        >
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )} */}

      {/* Rating */}
      {rating && (
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      )}

      {/* Movie Info */}
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        {/* Genres */}
        {genres && genres.length > 0 && (
          <Text style={styles.genres} numberOfLines={1}>
            {genres.join(", ")}
          </Text>
        )}
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
    padding: 12,
    gap: 6,
  },
  title: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
  genres: {
    color: "#919191",
    fontSize: 11,
  },
});

export default MovieCard;
