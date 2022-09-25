import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    margin: 5,
  },
  textContainer: {
    paddingTop: 5,
    width: '40%',
  },
  innerText: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 3,
  },
  imageStyle: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});
