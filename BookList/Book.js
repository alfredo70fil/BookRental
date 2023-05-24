import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Book = ({ book }) => {
  const navigation = useNavigation();

  const handleBookPress = () => {
    navigation.navigate('DetailScreen', { book });
  };

  return (
    <TouchableOpacity style={styles.bookItem} onPress={handleBookPress}>
      <View style={styles.bookItemImage}>
        <Image source={{ uri: book.cover_img }} style={styles.image} />
      </View>
      <View style={styles.bookItemInfo}>
        <TouchableOpacity onPress={handleBookPress}>
          <View style={styles.bookItemInfoItemTitle}>
            <Text style={styles.title}>{book.title}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.bookItemInfoItem}>
          <Text style={styles.label}>Author: </Text>
          {Array.isArray(book.author) ? <Text>{book.author.join(", ")}</Text> : null}
        </View>

        <View style={styles.bookItemInfoItem}>
          <Text style={styles.label}>Total Editions: </Text>
          <Text>{book.edition_count}</Text>
        </View>

        <View style={styles.bookItemInfoItem}>
          <Text style={styles.label}>First Publish Year: </Text>
          <Text>{book.first_publish_year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookItem: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    marginBottom: 16,
  },
  bookItemImage: {
    marginRight: 16,
  },
  image: {
    width: 100,
    height: 150,
  },
  bookItemInfo: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  author: {
    fontSize: 15,
    marginBottom: 4,
  },
  editionCount: {
    fontSize: 15,
    marginBottom: 4,
  },
  publishYear: {
    fontSize: 15,
    marginBottom: 4,
  },
});

export default Book;
