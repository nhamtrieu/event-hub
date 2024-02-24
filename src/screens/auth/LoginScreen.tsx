import {Text, View, Image, Switch, Button} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {globalStyle} from '../../styles/globalStyle';
import {Lock, Sms} from 'iconsax-react-native';
import {appColors} from '../../constants/appColors';
import {fontFamilies} from '../../constants/fontFamilies';
import SocialLogin from './components/SocialLogin';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  return (
    <ContainerComponent isImageBackground isScrollable>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{marginBottom: 30}}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Sign in" size={24} />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          placeholder="Email"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={password}
          placeholder="Password"
          onChange={val => setPassword(val)}
          allowClear
          isPassword
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <RowComponent justify="space-between">
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
              thumbColor={appColors.white}
              trackColor={{true: appColors.primary}}
            />
            <TextComponent text="Remember me" font={fontFamilies.regular} />
          </RowComponent>
          <ButtonComponent
            text="Forgot password?"
            onPress={() => {}}
            type="text"
            textFont={fontFamilies.regular}
          />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justify="center">
          <TextComponent
            text="Don't have an account? "
            font={fontFamilies.regular}
          />
          <ButtonComponent
            type="link"
            text="Sign up"
            textFont={fontFamilies.regular}
          />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
