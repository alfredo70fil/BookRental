import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const recomendacionSemanal = [
  {
    id: 1,
    bookName: '1. IT, de Stephen King',
    bookImageUrl: 'https://images.cdn2.buscalibre.com/fit-in/360x360/3c/a0/3ca0d5641108924db725e1d9b5971d52.jpg',
    country: 'Estados Unidos',
    year: 1986,
    genre: 'Terror',
    recommendation: 'El manejo del terror en este libro es alucinante en la forma de la estructura narrativa empleada por el autor para retratar aspectos del terror clásico en épocas actuales de forma magistral',
  },
  {
    id: 2,
    bookName: "2. Harry Potter y el Cáliz de Fuego, de J.K. Rowling",
    bookImageUrl: "https://m.media-amazon.com/images/I/81FkAD3UO1L.jpg",
    country: "Reino Unido",
    year: 2000,
    genre: "Fantasía",
    recommendation: "Una emocionante aventura llena de magia y misterio que atrapa a los lectores desde la primera página."
  },

  {
    id: 3,
    bookName: "3. El señor de los anillos, de J.R.R. Tolkien",
    bookImageUrl: "data:image/jpeg;base64,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",
    country: "Reino Unido",
    year: 1954,
    genre: "Fantasía épica",
    recommendation: "Una épica trilogía que narra la lucha del bien contra el mal en la Tierra Media. Sumérgete en el mundo de hobbits, elfos, enanos y magia."
  },

  {
    id: 4,
    bookName: "4. Juego de tronos, de George R.R. Martin",
    bookImageUrl: "https://m.media-amazon.com/images/I/61royjw7ITL.jpg",
    country: "Estados Unidos",
    year: 1996,
    genre: "Fantasía épica",
    recommendation: "El primero de la serie 'Canción de hielo y fuego', donde las intrigas políticas y las batallas por el poder se entrelazan en un mundo medieval lleno de personajes complejos y giros inesperados."
  },

  {
    id: 5,
    bookName: "5. Orgullo y prejuicio, de Jane Austen",
    bookImageUrl: "https://m.media-amazon.com/images/I/71wnBzT9WqL.jpg",
    country: "Reino Unido",
    year: 1813,
    genre: "Novela romántica",
    recommendation: "Una historia clásica de amor y desafíos sociales. Elizabeth Bennet y el señor Darcy se encuentran en un mundo de prejuicios y malentendidos antes de descubrir su amor mutuo."
  },

  {
    id: 6,
    bookName: "6. Cumbres borrascosas, de Emily Brontë",
    bookImageUrl: "https://m.media-amazon.com/images/I/81G3b+sNSjL.jpg",
    country: "Reino Unido",
    year: 1847,
    genre: "Novela gótica",
    recommendation: "Una apasionada y turbulenta historia de amor entre Heathcliff y Catherine Earnshaw, envuelta en misterio y tragedia, que se desarrolla en los sombríos páramos de Yorkshire."
  },

  {
    id: 7,
    bookName: "7. Crónica de una muerte anunciada, de Gabriel García Márquez",
    bookImageUrl: "https://m.media-amazon.com/images/I/81ItYmT-50L.jpg",
    country: "Colombia",
    year: 1981,
    genre: "Realismo mágico",
    recommendation: "Un relato impactante y poético que explora el tema del destino y el poder del amor en un pequeño pueblo latinoamericano donde todos conocen el trágico final."
  },

  {
    id: 8,
    bookName: "8. El Gran Gatsby, de F. Scott Fitzgerald",
    bookImageUrl: "https://m.media-amazon.com/images/I/81sxyC3isSL.jpg",
    country: "Estados Unidos",
    year: 1925,
    genre: "Novela de época",
    recommendation: "Ambientada en los locos años veinte, esta novela retrata la vida glamorosa y superficial de Jay Gatsby, mientras reflexiona sobre el sueño americano y la corrupción de la riqueza."
  },

  {
    id: 9,
    bookName: "9. Mujercitas, de Louisa May Alcott",
    bookImageUrl: "https://m.media-amazon.com/images/I/91Op0BdHd0L.jpg",
    country: "Estados Unidos",
    year: 1868,
    genre: "Literatura infantil",
    recommendation: "Una entrañable historia sobre las hermanas March y su transición a la edad adulta, con personajes memorables y lecciones de vida intemporales."
  },

  {
    id: 10,
    bookName: "10. El código Da Vinci, de Dan Brown",
    bookImageUrl: "https://m.media-amazon.com/images/I/51WmNPpn5sL.jpg",
    country: "Estados Unidos",
    year: 2003,
    genre: "Thriller",
    recommendation: "Una emocionante mezcla de arte, historia y misterio. El profesor de simbología Robert Langdon se embarca en una búsqueda para desentrañar un antiguo secreto oculto por siglos."
  },
];

const BookPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Libros de la Semana</Text>
        {recomendacionSemanal.map((autor) => (
          <View key={autor.id}>
            <Text style={styles.bookName}>{autor.bookName}</Text>
            <Image source={{ uri: autor.bookImageUrl }} style={styles.bookImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>País: {autor.country}</Text>
              <Text style={styles.infoText}>Año: {autor.year}</Text>
              <Text style={styles.infoText}>Género: {autor.genre}</Text>
              <Text style={styles.infoText}>{autor.recommendation}</Text>
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
    marginBottom: 50,
    textAlign: 'center',
  },
  bookName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookImage: {
    width: 200,
    height: 300,
    marginBottom: 16,
    marginTop: 15,
    alignSelf: 'center',
  },
  infoContainer: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: 'justify',
  },
});

export default BookPage;
