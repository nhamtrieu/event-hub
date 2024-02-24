import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/globalStyle';

interface SectionComponentProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}

const SectionComponent = ({children, styles}: SectionComponentProps) => {
  return <View style={[globalStyle.section, {}, styles]}>{children}</View>;
};

export default SectionComponent;
