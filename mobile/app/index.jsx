import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { useRef, useState } from "react";
import CustomView from "../components/customView";
const { height, width } = Dimensions.get("window");
const SPACING = 5;
const videos = [
  {
    id: "1",
    title: "Welcome to my app 🚀",
    video: require("../assets/videos/intro.mp4"),
  },
  {
    id: "2",
    title: "Building with React Native",
    video: require("../assets/videos/intro.mp4"),
  },
  {
    id: "3",
    title: "Expo SDK 54 is amazing",
    video: require("../assets/videos/intro.mp4"),
  },
];

function VideoCard({ item, active }) {
  const player = useVideoPlayer(item.video, (player) => {
    player.loop = true;

    if (active) {
      player.play();
    }
  });

  if (active) {
    player.play();
  } else {
    player.pause();
  }

  return (
    <CustomView safe style={styles.videoContainer}>
      <VideoView
        player={player}
        style={styles.video}
        contentFit="cover"
        nativeControls={false}
      />

      {/* Overlay */}
      <View style={styles.overlay}>
        <Text style={styles.title}>
          {item.title}
        </Text>

        <View style={styles.buttons}>
          <TouchableOpacity>
            <Text style={styles.button}>❤️</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.button}>💬</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.button}>↗️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </CustomView>
  );
}


export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index);
      }
    }
  ).current;


  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };


  return (
    <View style={styles.container}>

      {/*<FlatList
        data={videos}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}

        renderItem={({ item, index }) => (
          
        )}

        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}

        initialNumToRender={2}
        windowSize={3}
      />*/}
      <ScrollView
        showsVerticalScrollIndicator={false}
        decelerationRate={"fast"}
        snapToInterval={height + SPACING}
        snapToAlignment="start"

      >
        {videos.map((item, index) =>
          <VideoCard
            key={index}
            item={item}
            active={index === activeIndex}
          />
        )}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  videoContainer: {
    width,
    height: height - SPACING,
    backgroundColor: "#000",
  },

  video: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    bottom: 120,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  title: {
    color: "#fff",
    fontSize: 18,
    width: "70%",
    fontWeight: "600",
  },

  buttons: {
    alignItems: "center",
    gap: 20,
  },

  button: {
    fontSize: 35,
  },

});