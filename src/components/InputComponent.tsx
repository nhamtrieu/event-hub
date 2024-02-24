import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardType,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {EyeSlash} from 'iconsax-react-native';
import {appColors} from '../constants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {globalStyle} from '../styles/globalStyle';

interface InputComponentProps {
  value: string;
  onChange: (val: string) => void;
  affix?: ReactNode;
  placeholder?: string | undefined;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
}

const InputComponent = ({
  value,
  onChange,
  affix,
  placeholder,
  suffix,
  isPassword,
  allowClear,
  type,
}: InputComponentProps) => {
  const [isShowPass, setIsShowPass] = useState(isPassword ?? false);
  return (
    <View style={[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        placeholder={placeholder ?? ''}
        onChangeText={val => onChange(val)}
        secureTextEntry={isShowPass}
        value={value}
        style={[globalStyle.text, styles.input]}
        placeholderTextColor={'#747688'}
        keyboardType={type ?? 'default'}
      />
      {suffix ?? suffix}
      <TouchableOpacity
        onPress={
          isPassword ? () => setIsShowPass(!isShowPass) : () => onChange('')
        }>
        {isPassword ? (
          <FontAwesome
            name={!isShowPass ? 'eye' : 'eye-slash'}
            size={22}
            color={appColors.gray}
          />
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 20,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
  },
});
