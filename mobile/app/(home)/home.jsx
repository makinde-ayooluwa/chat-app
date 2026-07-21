import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Pressable } from 'react-native'
import { Image } from "expo-image"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

// Local image mapping asset lookup
const localImages = {
  "favicon.png": require("../../assets/images/favicon.png"),
};
const CARD_HEIGHT = height - 32;
const CARD_SPACING = 18;
const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  // Added local state so liking a post instantly toggles in the UI
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Milk and Honey",
      caption: "A milk and honey post",
      description: "A collection of poetry and prose about survival, love, heartbreak, and healing.",
      image: "favicon.png",
      genre: "Poetry",
      stars: 4.8,
      likes: 1240,
      isLiked: true,
      shares: 89,

      comments: [
        { id: "c1", username: "Makinde Ayooluwa", text: "Awesome post" },
        { id: "c2", username: "Makinde Ayomide", text: "Great post" },
        { id: "c3", username: "Makinde", text: "Beautiful post" }
      ],
      poster: {
        name: "Makinde Ayooluwa",
        image: "favicon.png"
      }
    },
    {
      id: 2,
      title: "The Alchemist",
      caption: "A fable about following your dream",
      description: "A magical story about a young Andalusian shepherd boy who journeys to Egypt in search of a hidden treasure.",
      image: "favicon.png",
      genre: "Fiction",
      stars: 4.9,
      likes: 3450,
      isLiked: false,
      shares: 412,
      comments: [
        { id: "c4", username: "John Doe", text: "This changed my entire perspective on life!" },
        { id: "c5", username: "Sarah Smith", text: "Highly recommend to everyone." }
      ]
    },
    {
      id: 3,
      title: "Atomic Habits",
      caption: "Tiny changes, remarkable results",
      description: "An easy and proven way to build good habits and break bad ones using behavioral psychology.",
      image: "favicon.png",
      genre: "Self-Help",
      stars: 4.7,
      likes: 5120,
      isLiked: true,
      shares: 967,
      comments: [
        { id: "c6", username: "David K.", text: "Simple, actionable, and straight to the point." },
        { id: "c7", username: "Grace Ola", "text": "Implementing the 2-minute rule today!" }
      ]
    },
    {
      id: 4,
      title: "Sapiens",
      caption: "A brief history of humankind",
      description: "An exploration of how biology and history have defined us and enhanced our understanding of what it means to be human.",
      image: "favicon.png",
      genre: "History",
      stars: 4.5,
      likes: 2890,
      isLiked: false,
      shares: 154,
      comments: [
        { id: "c8", username: "Professor Wale", text: "Mind-blowing analysis of human cognitive evolution." }
      ]
    },
    {
      id: 5,
      title: "Educated",
      caption: "A memoir of resilience",
      description: "An unforgettable memoir about a young girl who leaves her survivalist family in rural Idaho to earn a PhD from Cambridge University.",
      image: "favicon.png",
      genre: "Biography",
      stars: 4.6,
      likes: 1980,
      isLiked: false,
      shares: 230,
      comments: [
        { id: "c9", username: "Tunde James", text: "Absolutely gripping story from start to finish." },
        { id: "c10", username: "Ester_99", text: "Hard to believe this is a true story. Wow." }
      ]
    }
  ]);

  // Handler to toggle user like interactions
  const handleLike = (id) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === id) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          };
        }
        return post;
      })
    );
  };
  const handleCommentAddition = (id) => {
    // const post = posts.find((x)=>x.id == id);
    // post.comments.push({
    //   
    // })
    setPosts([...posts, posts.find((x) => x.id == id).comments.push({
      id: Math.floor(Math.random()) * 1234, username: "New Comment",
      text: newComment
    })])
    setNewComment([]);
  }
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.postList}
          showsVerticalScrollIndicator={false}
          snapToAlignment='start'
          // snapToInterval={CARD_HEIGHT - CARD_SPACING}
          decelerationRate={"fast"}
        >
          {posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <View style={styles.poster}>
                <Image style={styles.poster.image} source={localImages[post?.poster?.image] ?? "../../assets/images/favicon.png"} />
                <View>
                  <Text style={styles.poster.name}>{post?.poster?.name ?? "Anonymus participant"}</Text>
                  <Text>Just now</Text>
                </View>
              </View>
              {/* post Banner Graphic */}
              <Image
                source={localImages[post.image]}
                style={styles.image}
                contentFit="cover"
              />

              {/* Core Info Details */}
              <View style={styles.cardContent}>
                <View style={styles.badgeRow}>
                  <Text style={styles.genreBadge}>{post.genre}</Text>
                  <Text style={styles.ratingText}>⭐ {post.stars}</Text>
                </View>

                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.caption}>{post.caption}</Text>
                <Text style={styles.description}>{post.description}</Text>

                {/* Interaction Bar Actions Layout */}
                <View style={styles.interactionBar}>
                  <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(post.id)}>
                    <Text style={[styles.actionText, post.isLiked && styles.likedText]}>
                      {post.isLiked ? "❤️" : "🤍"} {post.likes}
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.actionButton}>
                    <Text style={styles.actionText}>💬 {post.comments.length}</Text>
                  </View>

                  <View style={styles.actionButton}>
                    <Text style={styles.actionText}>🔗 {post.shares}</Text>
                  </View>
                </View>

                {/* Nested Comments Display Block */}
                <View style={styles.commentSection}>
                  <Text style={styles.commentSectionTitle}>Top Comments</Text>
                  {post.comments.map((comment, index) => index < 3 && (
                    <View key={comment.id} style={styles.commentBubble}>
                      <Text style={styles.commentUser}>{comment.username}</Text>
                      <Text style={styles.commentText}>{comment.text}</Text>
                    </View>
                  ))}
                </View>
                {/* <View style={styles.addComment}>
                  <TextInput value={newComment[post.id]} onChangeText={()=>setNewComment(post.id)} style={styles.commentInput} placeholder='Add comment' />
                  <Pressable>
                    <Ionicons name='send' style={styles.sendComment} onPress={() => handleCommentAddition(post.id)} />
                  </Pressable>
                </View> */}
              </View>

            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  postList: {
    padding: 0
  },
  postCard: {
    flex: 1,
    height: CARD_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 2
  },
  image: {
    width: "100%",
    height: 300
  },
  poster: {
    flexDirection: "row",
    alignSelf: "start",
    padding: 10,
    alignItems: "center",
    gap: 10,
    image: {
      width: 30,
      height: 30,
      borderColor: "gray",
      borderRadius: 50,
      borderWidth: 1
    },
    name: {
      fontWeight: "bold"
    }
  },
  cardContent: {
    padding: 10
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  genreBadge: {
    backgroundColor: '#e8f0fe',
    color: '#1a73e8',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: 'bold',
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: '#1c1e21',
    marginBottom: 4
  },
  caption: {
    fontSize: 16,
    fontWeight: '500',
    color: '#606770',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    color: '#65676b',
    lineHeight: 20,
    marginBottom: 16,
  },
  interactionBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e4e6eb',
    paddingVertical: 10,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#65676b',
  },
  likedText: {
    color: '#e41e3f',
  },
  commentSection: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
  },
  commentSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#65676b',
    marginBottom: 8,
  },
  commentBubble: {
    marginBottom: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e4e6eb',
  },
  commentUser: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1c1e21',
    marginBottom: 2,
  },
  commentText: {
    fontSize: 13,
    color: '#4b4b4b',
  },
  addComment: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center"
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: width - 60,
    borderRadius: 20
  },
  sendComment: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 12.5,
    borderRadius: 50,
    backgroundColor: "green",
    color: "#fff"
  }
})
// const styles = StyleSheet.create({
//
//
//
//
// })
