import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/globalStyle';

interface RowComponentProps {
  styles?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  onPress?: () => void;
}

const RowComponent = ({
  children,
  styles,
  justify,
  onPress,
}: RowComponentProps) => {
  const localStyles = [globalStyle.row, {justifyContent: justify}, styles];
  return onPress ? (
    <TouchableOpacity activeOpacity={1} style={localStyles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyles}>{children}</View>
  );
};

export default RowComponent;
