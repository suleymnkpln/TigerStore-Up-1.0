import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window'); //Ekrana sıgdır

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 23,
  },
  desc: {
    fontStyle: 'italic',
    marginVertical: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'right',
  },
  animation: {
    height: 200,
  },
});
