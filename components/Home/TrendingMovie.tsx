import { colors } from "@/utils/constants";
import moviesData from "@/utils/movies.json";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MovieCard from "./MovieCard";
import { Movie } from "./NowShowing";

const TrendingMovie = () => {
  const router = useRouter();
  const movies: Movie[] = moviesData.trending;

  const renderMovieCard: ListRenderItem<Movie> = ({ item }) => (
    <MovieCard
      id={item.id}
      title={item.title}
      image={item.image}
      rating={item.rating}
      genres={item.genres}
      status="Now Showing" // Since MovieCard's status prop has limited options
      onPress={() => {
        router.push({
          pathname: "/movie/[id]",
          params: { id: item.id.toString(), category: "trending" },
        });
      }}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trending Movies</Text>
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(tabs)/see-all",
              params: { category: "trending" },
            })
          }
        >
          <Text style={styles.viewAll}>See More</Text>
        </TouchableOpacity>
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

export default TrendingMovie;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
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
