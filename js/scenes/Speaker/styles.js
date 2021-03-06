import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  border: {
    padding: 10,
    backgroundColor: 'black',
  },
  speakerWrap: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  speakerImage: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    marginBottom: 20,
    ...Platform.select({
      ios: {
        borderRadius: 50,
      },
      android: {
        borderRadius: 100,
      },
    }),
  },
  headerText: {
    fontFamily: typography.fontMain,
    fontSize: 24,
    marginBottom: 20,
  },
  bio: {
    fontFamily: typography.fontMainLight,
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonText: {
    fontFamily: typography.fontMain,
    color: 'white',
  },
  button: {
    height: 40,
    width: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});