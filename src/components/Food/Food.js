import React from 'react';
import Lottie from 'lottie-react-native';

function Food() {
  return <Lottie source={require('../../assets/food.json')} autoPlay />;
}

export default Food;
