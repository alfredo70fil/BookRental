import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SobreNosotrosScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bookrentals_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Sobre Nosotros</Text>
      <Text style={styles.description}>
        Somos estudiantes que están realizando el proyecto de BookRentals para aprender el desarrollo de aplicaciones móviles utilizando el framework de React Native y estamos comprometidos en crear experiencias increíbles para los usuarios.
      </Text>
      <Text style={styles.description}>
        Estamos constantemente investigando y aprendiendo nuevas tecnologías para estar al día en el mundo del desarrollo. Este proyecto es una oportunidad para aplicar nuestros conocimientos y explorar nuevas ideas.
      </Text>
      <Text style={styles.description}>
        Agradecemos tu apoyo y esperamos que disfrutes de nuestra aplicación. ¡Si tienes alguna pregunta o sugerencia, no dudes en contactarnos!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
  },
});

export default SobreNosotrosScreen;
