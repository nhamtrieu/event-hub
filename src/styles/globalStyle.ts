import {StyleSheet} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

export const globalStyle = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  text: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    color: appColors.text,
  },
  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: appColors.white,
    paddingHorizontal: 16,
    paddingVertical: 18,
    minHeight: 56,
    flexDirection: 'row',
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
