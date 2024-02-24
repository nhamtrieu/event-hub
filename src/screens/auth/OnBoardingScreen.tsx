import {View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {globalStyle} from '../../styles/globalStyle';
import Swiper from 'react-native-swiper';
import {appInfo} from '../../constants/appInfo';
import {appColors} from '../../constants/appColors';
import {TextComponent} from '../../components';
import {fontFamilies} from '../../constants/fontFamilies';

const OnBoardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyle.contaier]}>
      <Swiper
        index={index}
        style={{}}
        loop={false}
        activeDotColor={appColors.white}
        onIndexChanged={index => {
          setIndex(index);
        }}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.size.WIDTH,
            height: appInfo.size.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.size.WIDTH,
            height: appInfo.size.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.size.WIDTH,
            height: appInfo.size.HEIGHT,
            resizeMode: 'contain',
          }}
        />
      </Swiper>
      <View
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 20,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <TextComponent
            text="Skip"
            color={appColors.gray2}
            font={fontFamilies.medium}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <TextComponent
            text="Next"
            color={appColors.white}
            font={fontFamilies.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
