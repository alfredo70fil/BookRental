import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import Authors from '../Authors/Autores';
import Recomendaciones from '../Recomendaciones/Libros_Recomendados';
import Sagas from '../Sagas/Sagas_Libros';
import Resenas from '../Resenas/Resenas_Libros';


const Stack = createStackNavigator();

export default function StackNavigator1() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Authors"
                component={Authors}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })
                }
            />

            <Stack.Screen
                name="Recomendaciones"
                component={Recomendaciones}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })
                }
            />

            <Stack.Screen
                name="Sagas"
                component={Sagas}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })
                }
            />

            <Stack.Screen
                name="Reseñas"
                component={Resenas}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })
                }
            />

            <Stack.Screen
                name="Acerca de nosotros"
                component={Resenas}
                options={({ route }) => ({
                    title: route.params.movie.Title
                })
                }
            />
        </Stack.Navigator>
    )
}