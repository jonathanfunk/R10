import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles';

export const styles = StyleSheet.create({
  aboutWrap: {
    padding: 10,
  },
  logo: {
    width: 200,
  },
  logoWrap: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  aboutContent: {
    paddingTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
  },
  paragraph: {
    fontFamily: typography.fontMainLight,
    marginBottom: 10,
  },
  codeTitle: {
    fontFamily: typography.fontMain,
    color: colors.purple,
    marginBottom: 10,
  },
  footer: {
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  footerText: {
    fontFamily: typography.fontMainLight,
  }
});