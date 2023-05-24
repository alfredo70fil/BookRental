import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const sagas_Libros = [
  {
    id: 1,
    bookSaga: "1. Harry Potter y el Cáliz de Fuego, de J.K. Rowling",
    fama: "Una emocionante aventura llena de magia y misterio que atrapa a los lectores desde la primera página.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/9149GGuBoDL.jpg"
  },

  {
    id: 2,
    bookSaga: "2. El señor de los anillos, de J.R.R. Tolkien",
    fama: "Una trilogía épica que se desarrolla en el mundo ficticio de la Tierra Media y sigue la lucha por el poder del Anillo Único.",
    sagaImageUrl: "https://www.elsotano.com/imagenes_grandes/9788445/978844500068.JPG"
  },

  {
    id: 3,
    bookSaga: "3. Crónicas de Narnia, de C.S. Lewis",
    fama: "Una serie de siete libros que transporta a los lectores a un mundo mágico lleno de criaturas fantásticas, donde los niños descubren su destino como reyes y reinas.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/91hkAAEpLIL.jpg"
  },

  {
    id: 4,
    bookSaga: "4. Juego de tronos, de George R.R. Martin",
    fama: "La serie 'Canción de hielo y fuego' presenta un elaborado juego de poder, política y batallas en un mundo medieval lleno de intrigas y personajes complejos.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/91w3b+PWB3L.jpg"
  },

  {
    id: 5,
    bookSaga: "5. Saga Crepúsculo, de Stephenie Meyer",
    fama: "Una historia de romance sobrenatural entre una humana y un vampiro, que se desarrolla en una serie de cuatro libros llenos de drama y acción.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/71FQ4Ui2yGL.jpg"
  },

  {
    id: 6,
    bookSaga: "6. Percy Jackson y los dioses del Olimpo, de Rick Riordan",
    fama: "Una serie de libros que combina la mitología griega con la vida moderna, siguiendo las aventuras de Percy Jackson, un semidiós con poderes especiales.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/91QVAkfs+-L.jpg"
  },

  {
    id: 7,
    bookSaga: "7. Millennium, de Stieg Larsson y David Lagercrantz",
    fama: "Una serie de libros de thriller y misterio que sigue las investigaciones del periodista Mikael Blomkvist y la hacker Lisbeth Salander.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/81Wn8LGRQZL.jpg"
  },

  {
    id: 8,
    bookSaga: "8. Outlander, de Diana Gabaldon",
    fama: "Una serie de libros que mezcla romance, aventura y viajes en el tiempo, ambientada en las Tierras Altas de Escocia.",
    sagaImageUrl: "https://m.media-amazon.com/images/I/91N80HaX8rL.jpg"
  },

  {
    id: 9,
    bookSaga: "9. Saga de Ender, de Orson Scott Card",
    fama: "Una serie de libros de ciencia ficción que sigue la historia de Ender Wiggin, un niño genio reclutado para luchar contra una invasión alienígena.",
    sagaImageUrl: "https://images.cdn1.buscalibre.com/fit-in/360x360/cf/8a/cf8a83ec458bc9243790472189478435.jpg"
  },

  {
    id: 10,
    bookSaga: "10. Las crónicas de Thomas Covenant, de Stephen R. Donaldson",
    fama: "Una serie de libros de fantasía que sigue las aventuras de Thomas Covenant, un hombre leproso que se encuentra transportado a un mundo mágico llamado Tierra.",
    sagaImageUrl: "https://pictures.abebooks.com/inventory/md/md30996894204.jpg"
  }
];

const BookSaga = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Sagas Famosas</Text>
        {sagas_Libros.map((autor) => (
          <View key={autor.id}>
            <Text style={styles.bookSaga}>{autor.bookSaga}</Text>
            <View style={styles.infoContainer}>
              <Image source={{ uri: autor.sagaImageUrl }} style={styles.sagaImage} />
              <Text style={styles.infoText}>{autor.fama}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookSaga: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  sagaImage: {
    width: 200,
    height: 300,
    marginBottom: 20,
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default BookSaga;
