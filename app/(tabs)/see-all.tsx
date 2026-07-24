import MovieCard from "@/components/Home/MovieCard";
import moviesData from "@/utils/movies.json";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SeeAllScreen = () => {
  const { category } = useLocalSearchParams<{ category: string }>();
  const router = useRouter();

  // Determine which movies to show based on category
  const movies =
    category === "trending" ? moviesData.trending : moviesData.nowShowing;
  const title =
    category === "trending" ? "Trending Movies" : "Now Showing in Cinema";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieWrapper}>
            <MovieCard
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              genres={item.genres}
              status="Now Showing"
              onPress={() => console.log(`Movie pressed: ${item.title}`)}
            />
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  movieWrapper: {
    flex: 1,
    margin: 8,
  },
});

export default SeeAllScreen;
