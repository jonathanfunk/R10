import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles';

export const styles = StyleSheet.create({
  header: {
    height: 25,
    backgroundColor: colors.lightGrey,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: typography.fontMain,
    fontSize: 12,
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
  locationWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    color: colors.mediumGrey,
  }
});