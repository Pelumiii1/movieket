import { colors } from "@/utils/constants";
import { ImageBackground } from "expo-image";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { slides } from "../../utils/onbordingData";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef<FlatList>(null);

  function routeToOnboardingScreen() {
    router.push("/(onboarding)/get-started");
  }

  const onViewableItemChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems[0] && viewableItems[0].index !== null) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  function handleNext() {
    const nextIndex = currentIndex + 1;
    if (nextIndex < slides.length) {
      setCurrentIndex(nextIndex);
      flatlistRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    } else {
      routeToOnboardingScreen();
    }
  }

  return (
    <View>
      <FlatList
        ref={flatlistRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        renderItem={({ item }) => (
          <ImageBackground
            style={styles.container}
            source={item.image}
            contentFit="cover"
          >
            <View style={styles.overlay}>
              <View style={{ marginRight: 40 }}>
                <Text
                  style={{ color: "white", fontWeight: "500", fontSize: 24 }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "500",
                    paddingTop: 5,
                  }}
                >
                  {item.description}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 20,
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={styles.skipButton}
                  onPress={routeToOnboardingScreen}
                >
                  Skip
                </Text>
                <Pressable style={styles.proceedButton} onPress={handleNext}>
                  <Text style={styles.nextText}>Next</Text>
                </Pressable>
              </View>
            </View>
          </ImageBackground>
        )}
      />
      <StatusBar barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    backgroundColor: "#00000059",
    height,
    width,
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 150,
    paddingHorizontal: 25,
  },

  proceedButton: {
    backgroundColor: colors.PRIMARY,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderTopRightRadius: 90,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  skipButton: {
    color: "#C4C4C4",
    fontSize: 18,
    fontWeight: "500",
  },

  nextText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
});
