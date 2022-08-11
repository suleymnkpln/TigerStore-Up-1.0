import React from 'react';
import {TouchableOpacity, Text, View, Linking} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <Text
        onPress={() =>
          Linking.openURL('https://www.instagram.com/suleymnkplnx/')
        }
        style={styles.instagram}>
        @suleymnkplnx
      </Text>
    </View>
  );
};

export default Button;
