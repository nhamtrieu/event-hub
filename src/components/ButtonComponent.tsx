import {StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';
import {globalStyle} from '../styles/globalStyle';
import {appColors} from '../constants/appColors';

interface ButtonComponentProps {
  icon?: ReactNode;
  text?: string;
  type?: 'primary' | 'text' | 'link';
  color?: string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<ViewStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'left' | 'right';
}

const ButtonComponent = ({
  icon,
  text,
  type,
  color,
  style,
  textColor,
  textStyles,
  iconFlex,
  textFont,
  onPress,
}: ButtonComponentProps) => {
  return type === 'primary' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyle.button,
        {backgroundColor: color ?? appColors.primary},
        style,
      ]}>
      {iconFlex === 'left' && icon}
      <TextComponent
        text={text}
        style={[textStyles, {marginLeft: icon ? 12 : 0}]}
        color={color ?? appColors.white}
      />
      {iconFlex === 'right' && icon}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity>
      <TextComponent
        text={text}
        color={type === 'link' ? appColors.primary : appColors.text}
        font={textFont}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
