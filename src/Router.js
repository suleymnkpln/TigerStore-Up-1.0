import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Meals from './pages/Meals';
import Categories from './pages/Categories';
import Detail from './pages/Detail';
import Welcome from './pages/Welcome';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
