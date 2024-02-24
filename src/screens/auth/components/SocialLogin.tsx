import React from 'react';
import {SectionComponent, TextComponent} from '../../../components';
import {appColors} from '../../../constants/appColors';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color={appColors.gray4}
        size={16}
        style={{textAlign: 'center'}}
      />
    </SectionComponent>
  );
};

export default SocialLogin;
