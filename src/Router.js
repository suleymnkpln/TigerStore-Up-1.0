import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Welcome from './pages/Welcome';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Tiger Store',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerTintColor: 'white', //Geri buton rengi
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Product Details',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
            headerTintColor: 'white', //Geri buton rengi
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
