import React, {useCallback, useState, useRef} from 'react';
import {
  StyleSheet,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import DismissKeyboardView from '../components/DismissKeyBoardView';

type SingInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SingIn({navigation}: SingInScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null); // Typescirpt: <TextInput | null> -> generic
  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback((text: string): void => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback((text: string): void => {
    setPassword(text.trim());
  }, []);
  const onSubmit = useCallback(() => {
    // Alert.alert('알림', '안녕~');
    if (!email || !email.trim()) {
      return Alert.alert('Notice', '이메일을 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('Notice', '비밀번호를 입력해주세요.');
    }
    Alert.alert('Notice', '로그인 되었습니다.');
  }, [email, password]);

  const canGoNext = email && password;

  const toSingUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);

  return (
    <DismissKeyboardView>
      <View style={styles.inputWrapper}>
        <Text style={styles.labelText}>이메일</Text>
        <TextInput
          style={styles.labelTextInput}
          placeholder="이메일을 입력해주세요."
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          returnKeyType="next"
          keyboardType="email-address"
          ref={emailRef}
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          clearButtonMode="while-editing"
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.labelText}>비밀번호</Text>
        <TextInput
          style={styles.labelTextInput}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChangeText={onChangePassword}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="password"
          returnKeyType="next"
          keyboardType="email-address"
          ref={passwordRef}
          onSubmitEditing={onSubmit}
          clearButtonMode="while-editing"
          secureTextEntry
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.loginButton
              : StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
          }
          disabled={!canGoNext}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </Pressable>
        <Pressable onPress={toSingUp}>
          <Text>회원가입하기</Text>
        </Pressable>
      </View>
    </DismissKeyboardView>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  labelTextInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonZone: {
    alignItems: 'center',
  },
});

export default SingIn;
