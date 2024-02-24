import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import {globalStyle} from '../styles/globalStyle';

interface ContainerComponentProps {
  isImageBackground?: boolean;
  isScrollable?: boolean;
  title?: string;
  children: React.ReactNode;
}

const ContainerComponent = ({
  isImageBackground,
  isScrollable,
  title,
  children,
}: ContainerComponentProps) => {
  const returnContainer = isScrollable ? (
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={{flex: 1}}>
      <View style={{flex: 1}}>{returnContainer}</View>
    </ImageBackground>
  ) : (
    <View style={[globalStyle.contaier]}>
      <View>{returnContainer}</View>
    </View>
  );
};

export default ContainerComponent;
