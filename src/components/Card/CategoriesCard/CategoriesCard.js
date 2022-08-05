import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoriesCard.style';
import Food from '../../Food';

const CategoriesCard = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image
            style={styles.image}
            source={{uri: category.strCategoryThumb}}
          />
          <Text style={styles.text}>{category.strCategory}</Text>
          <View style={styles.food_container}>
            <Food />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
