import React, { useState, useCallback, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import Constants from 'expo-constants';
import SearchForm from '../Search/SearchForm';
import BookList from '../BookList/BookList';

const URL = "http://openlibrary.org/search.json?title=";

export const HomeScreenContext = createContext();

const HomeScreen = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      if (!searchTerm) {
        setBooks([]);
        setResultTitle("Ingrese un texto");
        setLoading(false);
        return;
      }

      const timer = setTimeout(async () => {
        const response = await fetch(`${URL}${searchTerm}`);
        const data = await response.json();
        const { docs } = data;

        if (docs) {
          const newBooks = docs.map((bookSingle) => {
            const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;

            return {
              id: key,
              author: author_name,
              cover_id: cover_i,
              edition_count: edition_count,
              first_publish_year: first_publish_year,
              title: title,
            };
          });

          setBooks(newBooks);

          if (newBooks.length > 0) {
            setResultTitle("Resultado de Búsqueda");
          } else {
            setResultTitle("Resultado de Búsqueda no Encontrado");
          }
        } else {
          setBooks([]);
          setResultTitle("Resultado de Búsqueda no Encontrado");
        }

        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <HomeScreenContext.Provider value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}>
      <View style={styles.container}>
        <Text style={styles.texto}>Buscador de libros</Text>
        <View style={styles.searchContainer}>
          <TextInput
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Escribe aquí..."
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton} onPress={fetchBooks}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultContainer}>
          {loading ? (
            <Text style={styles.texto}>Cargando...</Text>
          ) : books.length > 0 ? (
            <Text style={styles.texto}>Hay {books.length} resultado(s)</Text>
          ) : (
            <Text style={styles.texto}>{resultTitle}</Text>
          )}
        </View>
        {children}
        <BookList books={books} />
      </View>
    </HomeScreenContext.Provider>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  images: {
    width: 100,
    height: 150,
    margin: 5,
  },
  texto: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});
