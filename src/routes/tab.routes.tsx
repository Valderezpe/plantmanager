import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();
   
const AuthRoutes = () => {
    return(
        <AppTab.Navigator
        tabBarOptions={{
            activeTintColor: Colors.green,
            inactiveTintColor: Colors.heading,
            labelPosition: 'beside-icon',

            style: {
                paddingVertical: 20,
                height: 88,
            },
        }}
         >
             <AppTab.Screen
             name="Nova Planta"
             component={PlantSelect}
             options={{
                 tabBarIcon: (({size, color})=>(
                     <MaterialIcons
                     name="add-circle-outline"
                     size={size}
                     color={color}
                     />
                         
                     
                 ))
             }}
             />

            <AppTab.Screen
             name="Minhas Plantas"
             component={MyPlants}
             options={{
                 tabBarIcon: (({size, color})=>(
                     <MaterialIcons
                     name="format-list-bulleted"
                     size={size}
                     color={color}
                     />
                         
                     
                 ))
             }}
             />

            /</AppTab.Navigator>
    )
}

export default AuthRoutes;


