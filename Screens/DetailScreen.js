import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const DetailScreen = ({ route }) => {
  const { book } = route.params;
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    fetchBookDetails();

    async function fetchBookDetails() {
      try {
        const response = await fetch(`https://openlibrary.org${book.id}.json`);
        const data = await response.json();
        setBookDetails(data);
      } catch (error) {
        console.log("Error al obtener los detalles del libro:", error);
      }
    }
  }, [book]);

  if (!bookDetails) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando detalles del libro...</Text>
      </View>
    );
  }

  const bookCover = book.cover_id
    ? `https:covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`
    : 'https://www.freeiconspng.com/uploads/vector-for-free-use-red-book-icon-29.png';

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={{ uri: item }} style={styles.coverImage} />
      <Text style={styles.title}>{bookDetails.title}</Text>
      <Text style={styles.summary}>{bookDetails.description?.value}</Text>
    </View>
  );

  return (
    <FlatList
      data={[bookCover]}
      keyExtractor={(item) => item}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summary: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailScreen;
