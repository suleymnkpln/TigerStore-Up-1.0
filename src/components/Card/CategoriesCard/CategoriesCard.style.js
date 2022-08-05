import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4511e',
  },
  image: {
    minHeight: 90,
    width: 100,
    borderRadius: 40,
    resizeMode: 'contain',
    backgroundColor: '#efebe9',
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },
  body_container: {
    margin: 5,
    flexDirection: 'row',
    backgroundColor: '#FBFBFB',
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    textAlign: 'center',
    alignItems: 'center',
  },
  food_container: {
    // marginLeft: 10,
    // flex: 1,
    height: 120,
    width: 150,
    position: 'absolute',
    right: 0,
    top: -40,
  },
});
