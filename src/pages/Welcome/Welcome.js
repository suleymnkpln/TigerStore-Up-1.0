import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './Welcome.style';
import Button from '../../components/Button';

function Welcome({navigation}) {
  function goToCategoriesPage() {
    navigation.navigate('CategoriesPage');
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./background.png')}
        style={styles.image}>
        <Text style={styles.header}>FOOD RECİPES</Text>
        <Button text="CATEGORİES" onPress={goToCategoriesPage} />
      </ImageBackground>
    </View>
  );
}
export default Welcome;
