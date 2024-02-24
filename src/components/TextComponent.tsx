import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamilies';

interface TextComponentProps {
  text?: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  style?: StyleProp<TextStyle>;
  title?: boolean;
}

const TextComponent = ({
  text,
  color,
  size,
  flex,
  font,
  style,
  title,
}: TextComponentProps) => {
  return (
    <Text
      style={[
        style,
        {
          color: color || appColors.text,
          flex: flex || 0,
          fontSize: size ? size : title ? 24 : 16,
          fontFamily: font
            ? font
            : title
            ? fontFamilies.bold
            : fontFamilies.semiBold,
        },
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
