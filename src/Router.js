import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Detail from './pages/Detail';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import {useSelector, useDispatch} from 'react-redux';
import Loading from './components/Loading';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
export default function () {
  const userSession = useSelector(s => s.user);
  const isAuthloading = useSelector(s => s.isAuthloading);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isAuthloading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            component={Login}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
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
              headerRight: () => (
                <Icon
                  name="logout"
                  size={30}
                  color="white"
                  onPress={() => dispatch({type: 'REMOVE_USER'})}
                />
              ),
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
      )}
    </NavigationContainer>
  );
}
