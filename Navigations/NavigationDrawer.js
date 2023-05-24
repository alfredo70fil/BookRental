import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailScreen from '../Screens/DetailScreen';
import Authors from '../Authors/Autores';
import Recomendaciones from '../Recomendaciones/Libros_Recomendados';
import Sagas from '../Sagas/Sagas_Libros';
import Resenas from '../Resenas/Resenas_Libros';
import Acercade from '../AboutUs/AboutUs';

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
        <Drawer.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            drawerLabel: 'Inicio',
          }}
        />
        <Drawer.Screen
          name="Autores"
          component={Authors}
          options={{
            drawerLabel: 'Autores',
          }}
        />
        <Drawer.Screen
          name="Recomendaciones"
          component={Recomendaciones}
          options={{
            drawerLabel: 'Recomendaciones',
          }}
        />
        <Drawer.Screen
          name="Sagas"
          component={Sagas}
          options={{
            drawerLabel: 'Sagas',
          }}
        />
        <Drawer.Screen
          name="Reseñas"
          component={Resenas}
          options={{
            drawerLabel: 'Reseñas',
          }}
        />
        <Drawer.Screen
          name="Acerca de nosotros"
          component={Acercade}
          options={{
            drawerLabel: 'Acerca de nosotros',
          }}
        />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}
