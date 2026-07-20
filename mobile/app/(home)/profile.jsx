import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
    const [activeTab, setActiveTab] = useState('My Books')

    // Mock profile dashboard tracking metrics
    const userProfile = {
        username: "Makinde Ayooluwa",
        bio: "Passionate reader, digital writer, and book collector. Sharing my thoughts on contemporary prose and tech classics.",
        avatar: require("../../assets/images/favicon.png"), // Reuses your avatar image asset map path
        stats: {
            booksPublished: 12,
            totalLikes: "14.2K",
            followers: 843
        }
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                {/* Header Profile Dashboard Information Panel Block */}
                <View style={styles.profileHeader}>
                    <Image
                        source={userProfile.avatar}
                        style={styles.avatarImage}
                        contentFit="cover"
                    />
                    <Text style={styles.usernameText}>{userProfile.username}</Text>
                    <Text style={styles.bioText}>{userProfile.bio}</Text>

                    {/* Dynamic Metric Count Cards Track Row */}
                    <View style={styles.statsRow}>
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>{userProfile.stats.booksPublished}</Text>
                            <Text style={styles.statLabel}>Books</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>{userProfile.stats.totalLikes}</Text>
                            <Text style={styles.statLabel}>Likes</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.statBox}>
                            <Text style={styles.statNumber}>{userProfile.stats.followers}</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                    </View>

                    {/* Functional Profile Customization Navigation Triggers */}
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Edit Profile Layout</Text>
                    </TouchableOpacity>
                </View>

                {/* Grid Tab Navigation Selection Controls layout bar */}
                <View style={styles.tabBar}>
                    {['My Books', 'Saved Items', 'Liked Posts'].map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[styles.tabButtonText, activeTab === tab && styles.activeTabButtonText]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Dynamic Conditional Subview Container Layout */}
                <View style={styles.tabContentContainer}>
                    {activeTab === 'My Books' && (
                        <View style={styles.emptyStateCard}>
                            <Text style={styles.emptyStateEmoji}>📚</Text>
                            <Text style={styles.emptyStateTitle}>Your Books Showcase Grid</Text>
                            <Text style={styles.emptyStateSub}>Books you publish on CreateScreen appear here.</Text>
                        </View>
                    )}
                    {activeTab === 'Saved Items' && (
                        <View style={styles.emptyStateCard}>
                            <Text style={styles.emptyStateEmoji}>🔖</Text>
                            <Text style={styles.emptyStateTitle}>No Saved Items Yet</Text>
                            <Text style={styles.emptyStateSub}>Bookmark items from home to read them later.</Text>
                        </View>
                    )}
                    {activeTab === 'Liked Posts' && (
                        <View style={styles.emptyStateCard}>
                            <Text style={styles.emptyStateEmoji}>❤️</Text>
                            <Text style={styles.emptyStateTitle}>No Liked Posts</Text>
                            <Text style={styles.emptyStateSub}>Books you liked on your feed stay cataloged here.</Text>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileHeader: {
        alignItems: 'center',
        padding: 24,
        borderBottomWidth: 1,
        borderColor: '#f0f2f5',
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f0f2f5',
        borderWidth: 3,
        borderColor: '#e4e6eb',
        marginBottom: 16,
    },
    usernameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1c1e21',
        marginBottom: 8,
    },
    bioText: {
        fontSize: 14,
        color: '#65676b',
        textAlign: 'center',
        lineHeight: 20,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '100%',
        marginBottom: 16,
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1c1e21',
    },
    statLabel: {
        fontSize: 12,
        color: '#65676b',
        marginTop: 2,
    },
    divider: {
        width: 1,
        height: 24,
        backgroundColor: '#e4e6eb',
    },
    editButton: {
        width: '100%',
        backgroundColor: '#f0f2f5',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#1c1e21',
        fontWeight: '600',
        fontSize: 14,
    },
    tabBar: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#e4e6eb',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 2,
        borderBottomColor: 'transparent',
    },
    activeTabButton: {
        borderBottomColor: '#1a73e8',
    },
    tabButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#65676b',
    },
    activeTabButtonText: {
        color: '#1a73e8',
    },
    tabContentContainer: {
        padding: 24,
    },
    emptyStateCard: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
    },
    emptyStateEmoji: {
        fontSize: 48,
        marginBottom: 12,
    },
    emptyStateTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1c1e21',
        marginBottom: 4,
    },
    emptyStateSub: {
        fontSize: 14,
        color: '#65676b',
        textAlign: 'center',
    },
})
