import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';

const Resenas_Libros = [
  {
    id: 1,
    bookName: '1. Lecturalia',
    bookImageUrl: 'https://pbs.twimg.com/media/FoQ9QbJWAAAeJls.jpg',
    bookUrl: 'https://www.lecturalia.com/',
    recommendation: 'Para los amantes de las reseñas de libros bien profundas, este sitio ofrece consejos muy prácticos sobre cuál podría ser su próxima lectura.',
    site:'Visitar página',
  },
  {
    id: 2,
    bookName: '2. Libros y Literatura',
    bookImageUrl: 'https://www.librosyliteratura.es/wp-content/uploads/2021/02/logo.png',
    bookUrl: 'https://www.librosyliteratura.es/',
    recommendation: 'Un grupo de lectores y lectoras, apasionados por el mundo de las letras, al que mueve el afán de compartir el placer por los libros e intercambiar ideas y opiniones sobre literatura.',
    site:'Visitar página',
  },
  {
      id: 3,
      bookName: '3. El quinto libro',
      bookImageUrl: 'https://m.media-amazon.com/images/I/41iIOgBuNjL.jpg',
      bookUrl: 'https://www.elquintolibro.es/',
      recommendation: 'Un blog con las últimas noticias y novedades sobre el apasionante mundo de la literatura. Análisis y críticas en profundidad de novelas de todo tipo y género, entrevistas muy personales para conocer al autor que hay detrás de cada novela.',
      site:'Visitar página',
    },

  {
      id: 4,
      bookName: '4. Donatexter',
      bookImageUrl: 'https://img.themesinfo.com/i/1/404/wordpress-website-template-wasabi-sey8o-m.jpg',
      bookUrl: 'https://donatexter.com/',
      recommendation: 'Web dedicada a las mejores reseñas de novelas con un rincón dedicado a la escritura para los que desean compartir sus escritos.',
      site:'Visitar página',
    },

  {
      id: 5,
      bookName: '5. QueLibroLeo',
      bookImageUrl: 'https://www.softandapps.info/wp-content/uploads/2014/10/Quelibroleo.jpg',
      bookUrl: 'https://quelibroleo.com/',
      recommendation: 'Quelibroleo es una comunidad de libros y lectores en español. Un punto de encuentro para los aficionados a la literatura. Vota y comenta los libros que lees y encuentra tu próxima lectura.',
      site:'Visitar página',
    },
];

const BookReview = () => {
  const handleBookPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Páginas de Reseñas</Text>
        {Resenas_Libros.map((autor) => (
          <View key={autor.id}>
            <Text style={styles.bookName} onPress={() => handleBookPress(autor.bookUrl)}>
              {autor.bookName}
            </Text>
            <Image source={{ uri: autor.bookImageUrl }} style={styles.bookImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>{autor.recommendation}</Text>
              <Text style={styles.site} onPress={() => handleBookPress(autor.bookUrl)}>
                {autor.site}
              </Text>
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
    marginTop: 30,
  },
  bookImage: {
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
    marginBottom: 2,
    textAlign: 'justify',
  },
  site:{
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 20,
    color: 'blue', // Cambio de color a azul
  },
});

export default BookReview;
