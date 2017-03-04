import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles';

export const styles = StyleSheet.create({
  wrap: {
    padding: 10
  },
  headerText: {
    fontFamily: typography.fontMain,
    fontSize: 24,
    marginBottom: 10,
  },
  row: {
    padding: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
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
  button: {
    backgroundColor: colors.purple,
  }
});