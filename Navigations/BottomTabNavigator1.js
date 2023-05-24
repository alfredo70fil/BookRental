import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailScreen from '../Screens/DetailScreen';
import Authors from '../Authors/Autores';
import Recomendaciones from '../Recomendaciones/Libros_Recomendados';
import Sagas from '../Sagas/Sagas_Libros';
import Resenas from '../Resenas/Resenas_Libros';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#ff6600',//activeTintColor
                tabBarInactiveTintColor: "#060606",//inactiveTintColor
                tabBarShowLabel: true,//showLabel
                tabBarLabelStyle: { //labelStyle
                    fontSize: 12
                },
                tabBarStyle: {//style
                    paddingBottom: 5,
                    backgroundColor: "#f3f3f1"
                }

            }}
        >

            <Tab.Screen
                name="HomeScreen"
                component={Home}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    )
                }}

            />

            <Tab.Screen
                name="Autores"
                component={Authors}
                options={{
                    tabBarLabel: "Autores",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="library-outline" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Recomendaciones"
                component={Recomendaciones}
                options={{
                    tabBarLabel: "Recomendaciones",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="library-outline" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Sagas"
                component={Sagas}
                options={{
                    tabBarLabel: "Sagas",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="library-outline" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Reseñas"
                component={Resenas}
                options={{
                    tabBarLabel: "Reseñas",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="library-outline" size={20} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Acerca de nosotros"
                component={Resenas}
                options={{
                    tabBarLabel: "Acerca de nosotros",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="library-outline" size={20} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    )
}