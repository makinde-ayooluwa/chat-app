import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreateScreen = () => {
    // 1. Form Inputs State Configuration
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')
    const [description, setDescription] = useState('')
    const [genre, setGenre] = useState('Fiction')

    const genres = ['Fiction', 'Poetry', 'Self-Help', 'History', 'Biography']

    // 2. Submission Handler Form logic
    const handleCreateBook = () => {
        if (!title || !caption || !description) {
            alert('Please fill out all input fields.')
            return
        }

        const newBook = {
            id: Date.now(), // Generate a unique identifier timestamp
            title,
            caption,
            description,
            image: "favicon.png", // Stand-in image asset reference key
            genre,
            stars: 5.0,
            likes: 0,
            isLiked: false,
            shares: 0,
            comments: [],
            createdAt: new Date().toISOString()
        }

        console.log('Successfully Compiled New Book Payload:', newBook)
        alert('Book Created successfully!')

        // Clear inputs after dynamic upload trigger completion
        setTitle('')
        setCaption('')
        setDescription('')
        setGenre('Fiction')
    }

    return (
        // KeyboardAvoidingView prevents the mobile keyboard from covering input elements
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <SafeAreaView>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Text style={styles.headerTitle}>Add New Book</Text>

                    {/* Title input entry text block */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Book Title</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter book title..."
                            value={title}
                            onChangeText={setTitle}
                        />
                    </View>

                    {/* Caption subheader text layout block */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Short Caption</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter catchy tagline..."
                            value={caption}
                            onChangeText={setCaption}
                        />
                    </View>

                    {/* Genre Selector Inline Layout Block */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Select Genre</Text>
                        <View style={styles.genreRow}>
                            {genres.map((g) => (
                                <TouchableOpacity
                                    key={g}
                                    style={[styles.genreChip, genre === g && styles.activeGenreChip]}
                                    onPress={() => setGenre(g)}
                                >
                                    <Text style={[styles.genreChipText, genre === g && styles.activeGenreChipText]}>
                                        {g}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Paragraph descriptive body field item element */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Description</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Write a brief overview of the book's narrative..."
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>

                    {/* Core dynamic operational trigger interface button layout */}
                    <TouchableOpacity style={styles.submitButton} onPress={handleCreateBook}>
                        <Text style={styles.submitButtonText}>Publish Book Entry</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        padding: 24,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1c1e21',
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#65676b',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e4e6eb',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        color: '#1c1e21',
        backgroundColor: '#f8f9fa',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top', // Ensures text aligns to top on Android platforms
    },
    genreRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    genreChip: {
        backgroundColor: '#f0f2f5',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
    },
    activeGenreChip: {
        backgroundColor: '#1a73e8',
    },
    genreChipText: {
        color: '#65676b',
        fontWeight: '600',
        fontSize: 13,
    },
    activeGenreChipText: {
        color: '#fff',
    },
    submitButton: {
        backgroundColor: '#1a73e8',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 10,
        elevation: 2,
        shadowColor: '#1a73e8',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
