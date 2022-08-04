import React from 'react';
import {View, Text} from 'react-native';
import styles from './Welcome.style';
import Button from '../../components/Button';

function Welcome({navigation}) {
  function goToProductsPage() {
    navigation.navigate('ProductsPage');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TİGER STORE</Text>
      <Button text="PRODUCTS" onPress={goToProductsPage} />
    </View>
  );
}
export default Welcome;
