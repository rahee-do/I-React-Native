import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Alert,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';

function SingIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((text: string): void => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback((text: string): void => {
    setPassword(text);
  }, []);
  const onSubmit = useCallback(() => {
    Alert.alert('알림', '안녕~');
  }, []);

  const canGoNext = email && password;

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.labelText}>이메일</Text>
        <TextInput
          style={styles.labelTextInput}
          placeholder="이메일을 입력해주세요."
          onChangeText={onChangeEmail}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.labelText}>비밀번호</Text>
        <TextInput
          style={styles.labelTextInput}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={onChangePassword}
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
        <Pressable onPress={onSubmit} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
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
