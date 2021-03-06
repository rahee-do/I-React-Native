import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';

function Settings() {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Pressable onPress={() => setCount(p => p + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}
export default Settings;
