import { colors } from "@/utils/constants";
import moviesData from "@/utils/movies.json";
import React from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  title: string;
  image: string;
  rating: number;
  genres: string[];
  status: string;
}

const NowShowing = () => {
  const movies: Movie[] = moviesData.nowShowing;

  const renderMovieCard: ListRenderItem<Movie> = ({ item }) => (
    <MovieCard
      id={item.id}
      title={item.title}
      image={item.image}
      rating={item.rating}
      genres={item.genres}
      status="Now Showing"
      onPress={() => {
        // Handle movie press - navigate to details or booking
        console.log(`Movie pressed: ${item.title}`);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Now Showing in Cinema</Text>
        <Text style={styles.viewAll}>See More</Text>
      </View>

      <FlatList
        data={movies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    color: "#020202",
  },
  viewAll: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.PRIMARY,
  },
  listContent: {
    paddingHorizontal: 8,
  },
});

export default NowShowing;
