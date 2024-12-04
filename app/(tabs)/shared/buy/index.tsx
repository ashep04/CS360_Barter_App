import { Ionicons } from '@expo/vector-icons';
import { Modal, StyleSheet, Image, Platform, TextInput } from 'react-native';
import * as React from 'react';
import { useState } from 'react';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/components/ThemeContext';

import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const samplePosts = [
  {
    id: '1',
    offer: { item: 'Apples', qty: 10 },
    want: { item: 'Oranges', qty: 5 },
    date: new Date(2024, 11, 1),
  },
  {
    id: '2',
    offer: { item: 'Rice', qty: 20 },
    want: { item: 'Beans', qty: 10 },
    date: new Date(2024, 10, 30),
  },
  {
    id: '3',
    offer: { item: 'Wood Planks', qty: 50 },
    want: { item: 'Nails', qty: 100 },
    date: new Date(2024, 11, 2),
  },
];

export default function TabTwoScreen() {
const { currentTheme, toggleTheme } = useTheme();
  const [posts, setPosts] = useState(samplePosts);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const sortPosts = (criterion: string) => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (criterion === 'date') {
        return b.date - a.date;
      } else if (criterion === 'offer') {
        return a.offer.item.localeCompare(b.offer.item);
      }
      return 0;
    });
    setPosts(sortedPosts);
    setSortBy(criterion);
  };

  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.offer.item.toLowerCase().includes(query) ||
      post.want.item.toLowerCase().includes(query)
    );
  });

    const handleButtonPress = (post) => {
      setSelectedPost(post);
      setModalVisible(true);
    };

const renderPost = ({ item }: { item: typeof samplePosts[0] }) => {
  const offer = item.offer || { item: 'Unknown', qty: 0 };
  const want = item.want || { item: 'Unknown', qty: 0 };

  return (
    <View style={[styles.postContainer]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.postTitle, { color: currentTheme.text }]}>
            {offer.item} ({offer.qty})
          </Text>
          <Text style={[styles.postContent, { color: currentTheme.text }]}>
            Wants: {want.item} ({want.qty})
          </Text>
          <Text style={[styles.postDate, { color: currentTheme.text }]}>
            {item.date?.toDateString() || 'Unknown Date'}
          </Text>
        </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(item)}
          >
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
};


  return (
    <View style={[styles.container, { backgroundColor: currentTheme.background }]}>
      <ParallaxScrollView
        headerBackgroundColor={{
          light: currentTheme.background,
          dark: currentTheme.background,
        }}
        headerImage={
          <Image
            source={require('@/assets/images/BB-Logo-Long.png')}
            style={styles.headerImage}
          />
        }
      >
        <ThemedView style={[styles.titleContainer, { backgroundColor: currentTheme.background }]}>
          <ThemedText type="title">BarterBuy</ThemedText>
        </ThemedView>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={currentTheme.text} style={styles.searchIcon} />
          <TextInput
            style={[styles.searchInput, { color: currentTheme.text }]}
            placeholder="Search offers or wants"
            placeholderTextColor={currentTheme.text}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>

        {/* Sorting Buttons */}
        <View style={[styles.sortContainer, { backgroundColor: currentTheme.background }]}>
          <TouchableOpacity onPress={() => sortPosts('date')} style={styles.sortButton}>
            <Text style={[styles.sortText, { color: currentTheme.text }]}>
              Sort by Date {sortBy === 'date' && '✓'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => sortPosts('offer')} style={styles.sortButton}>
            <Text style={[styles.sortText, { color: currentTheme.text }]}>
              Sort by Offer {sortBy === 'offer' && '✓'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* List of Posts */}
        <FlatList
          data={filteredPosts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.postsList}
        />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: currentTheme.background }]}>
            {selectedPost && (
              <>
                <Text style={[styles.postTitle, { color: currentTheme.text }]}>
                  Offer: {selectedPost.offer.item} ({selectedPost.offer.qty})
                </Text>
                <Text style={[styles.postContent, { color: currentTheme.text }]}>
                  Wants: {selectedPost.want.item} ({selectedPost.want.qty})
                </Text>
                <Text style={[styles.postDate, { color: currentTheme.text }]}>
                  Posted on: {selectedPost.date?.toDateString()}
                </Text>
              </>
            )}
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Confirm Trade</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      </ParallaxScrollView>
      <View style={[styles.footer, { backgroundColor: currentTheme.background }]}>
        <Text style={[styles.baseText, { color: currentTheme.text }]}>
          © 2024 Barter Buddy. All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerImage: {
    alignSelf: 'center',
    marginTop: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
    },
    modalContent: {
      width: '80%', // Adjust the width of the modal
      padding: 20, // Add padding for spacing inside the modal
      borderRadius: 10, // Rounded corners
      backgroundColor: '#fff', // Background color of the modal
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5, // Shadow for Android
    },
    button: {
      padding: 10,
      backgroundColor: '#577399',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  actionButton: {
    marginLeft: 10,
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  sortButton: {
    marginHorizontal: 10,
  },
  sortText: {
    fontSize: 16,
  },
  postsList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  postContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: '#fff',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postContent: {
    marginTop: 5,
    fontSize: 14,
  },
  postDate: {
    marginTop: 10,
    fontSize: 12,
    fontStyle: 'italic',
  },
  footer: {
    gap: 4,
    marginBottom: 2,
    justifyContent: 'flex-end',
  },
  baseText: {},
});
