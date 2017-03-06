import { StyleSheet } from 'react-native';
import { typography, colors } from './../../config/styles';

export const styles = StyleSheet.create({
  codeWrap: {
    flexDirection: 'row',
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
  expanded: {
    fontFamily: typography.fontMain,
    color: colors.purple,
    alignItems: 'center',
    textAlign: 'center',
    width: 12,
    height: 16,
  }
});