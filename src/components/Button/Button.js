import React from 'react';
import {TouchableOpacity, Text, View, Linking} from 'react-native';
import styles from './Button.style';

const Button = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.insta_container}>
        <Text
          onPress={() =>
            Linking.openURL('https://www.instagram.com/suleymnkplnx/')
          }
          style={styles.insta_text}>
          @suleymnkplnx
        </Text>
      </View>
    </View>
  );
};

export default Button;
