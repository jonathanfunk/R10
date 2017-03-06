import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  wrap: {
    padding: 10
  },
  headerText: {
    fontFamily: typography.fontMain,
    fontSize: 24,
    marginBottom: 10,
  },
  title: {
    fontFamily: typography.fontMain,
    marginBottom: 5,
  },
  time: {
    fontFamily: typography.fontMain,
    color: colors.red,
    marginBottom: 10,
  },
  description: {
    fontFamily: typography.fontMainLight,
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
  },
  locationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  greyHeader: {
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
    marginBottom: 10,
  },
  speakerLink: {
    paddingBottom: 20,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginBottom: 20,

  },
  speakerWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  speakerImage: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    marginRight: 10,
    ...Platform.select({
      ios: {
        borderRadius: 25,
      },
      android: {
        borderRadius: 100,
      },
    }),
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