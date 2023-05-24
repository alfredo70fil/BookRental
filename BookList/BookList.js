import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Book from '../BookList/Book';
import coverImg from '../assets/book.png';
import Loading from "../Loader/Loader";
import { HomeScreenContext } from '../Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';

const BookList = () => {
  const { books } = useContext(HomeScreenContext);
  const navigation = useNavigation();

  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      cover_img: singleBook.cover_id ? `https:covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg.uri,
    };
  });
  console.log(booksWithCovers);
  const handleBookPress = (book) => {
    navigation.navigate('BookDetails', { book });
  };

  return (
    <View style={styles.bookList}>
      <View style={styles.container}>
        <View style={styles.sectionTitle}>
          <Text>Resultados</Text>
        </View>
        <FlatList
          data={booksWithCovers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Book book={item} onPress={() => handleBookPress(item)} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookList: {
    paddingVertical: 48,
    backgroundColor: '#f8f9fa',
  },
  bookDetails: {
    paddingVertical: 48,
    backgroundColor: '#f8f9fa',
  },
  bookListContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginVertical: 48,
  },
  bookItem: {
    paddingVertical: 48,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    transitionProperty: 'all',
    transitionDuration: 'var(--transition)',
  },
  bookItemHover: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
  },
  bookItemImage: {
    maxWidth: 180,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  bookItemInfo: {
    marginTop: 32,
  },
  bookItemInfoItemTitle: {
    lineHeight: 1.4,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bookItemInfoItem: {
    lineHeight: 1.4,
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  '@media (min-width: 600px)': {
    bookListContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  '@media (min-width: 992px)': {
    bookListContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    bookItemImage: {
      maxWidth: 150,
    },
  },
  '@media (min-width: 1200px)': {
    bookListContent: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    bookItemImage: {
      maxWidth: 120,
    },
  },
});

export default BookList;
