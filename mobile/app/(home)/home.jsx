import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Image } from "expo-image"

// Local image mapping asset lookup
const localImages = {
  "favicon.png": require("../../assets/images/favicon.png"),
};

const HomeScreen = () => {
  // Added local state so liking a book instantly toggles in the UI
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Milk and Honey",
      caption: "A milk and honey book",
      description: "A collection of poetry and prose about survival, love, heartbreak, and healing.",
      image: "favicon.png",
      genre: "Poetry",
      stars: 4.8,
      likes: 1240,
      isLiked: true,
      shares: 89,
      comments: [
        { id: "c1", username: "Makinde Ayooluwa", text: "Awesome book" },
        { id: "c2", username: "Makinde Ayomide", text: "Great book" },
        { id: "c3", username: "Makinde", text: "Beautiful book" }
      ]
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
    setBooks(prevBooks =>
      prevBooks.map(book => {
        if (book.id === id) {
          return {
            ...book,
            isLiked: !book.isLiked,
            likes: book.isLiked ? book.likes - 1 : book.likes + 1
          };
        }
        return book;
      })
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView 
      contentContainerStyle={styles.bookList}
       showsVerticalScrollIndicator={false}
       >
        {books.map((book) => (
          <View key={book.id} style={styles.bookCard}>

            {/* Book Banner Graphic */}
            <Image
              source={localImages[book.image]}
              style={styles.image}
              contentFit="cover"
            />

            {/* Core Info Details */}
            <View style={styles.cardContent}>
              <View style={styles.badgeRow}>
                <Text style={styles.genreBadge}>{book.genre}</Text>
                <Text style={styles.ratingText}>⭐ {book.stars}</Text>
              </View>

              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.caption}>{book.caption}</Text>
              <Text style={styles.description}>{book.description}</Text>

              {/* Interaction Bar Actions Layout */}
              <View style={styles.interactionBar}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(book.id)}>
                  <Text style={[styles.actionText, book.isLiked && styles.likedText]}>
                    {book.isLiked ? "❤️" : "🤍"} {book.likes}
                  </Text>
                </TouchableOpacity>

                <View style={styles.actionButton}>
                  <Text style={styles.actionText}>💬 {book.comments.length}</Text>
                </View>

                <View style={styles.actionButton}>
                  <Text style={styles.actionText}>🔗 {book.shares}</Text>
                </View>
              </View>

              {/* Nested Comments Display Block */}
              <View style={styles.commentSection}>
                <Text style={styles.commentSectionTitle}>Comments</Text>
                {book.comments.map((comment) => (
                  <View key={comment.id} style={styles.commentBubble}>
                    <Text style={styles.commentUser}>{comment.username}</Text>
                    <Text style={styles.commentText}>{comment.text}</Text>
                  </View>
                ))}
              </View>
            </View>

          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  bookList: {
    padding: 16,
  },
  bookCard: {
    width: '100%',
    backgroundColor: '#fff',
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
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
  }
})
