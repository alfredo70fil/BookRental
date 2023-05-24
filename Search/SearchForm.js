 import React, { useRef, useEffect, useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenContext } from '../Screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';

const SearchForm = () => {
  const { setSearchTerm, setResultTitle } = useContext(HomeScreenContext);
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const searchText = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('book', () => {
      setSearchValue('');
    });
    return unsubscribe;
  }, [navigation]);

  const handleSubmit = () => {
    let tempSearchTerm = searchValue.trim();

    if (tempSearchTerm.replace(/[^\w\s]/gi, "").length === 0) {
      setSearchTerm("the lost world");
      setResultTitle("Ingrese un texto");
    } else {
      setSearchTerm(tempSearchTerm);
    }

    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Buscador de libros</Text>
      <View style={styles.searchFormContent}>
        <View style={styles.searchFormElem}>
          <TextInput
            style={styles.input}
            placeholder="Escribe aquí..."
            value={searchValue}
            onChangeText={setSearchValue}
            ref={searchText}
          />
          <TouchableOpacity
            style={styles.searchButton}
            onPress={handleSubmit}
          >
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchForm;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchFormContent: {
    marginTop: 10,
  },
  searchFormElem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
  },
  searchButton: {
    backgroundColor: 'purple',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});