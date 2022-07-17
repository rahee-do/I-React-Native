import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {Provider, useSelector} from 'react-redux';
import store from './src/store';
import {RootState} from './src/store/reducer';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  // 리덕스에서 관리하는 상태 값으로 email 존재 여부로 로그인 여부 확인
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  // const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoggedIn ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Orders"
              component={Orders}
              options={{title: '오더 목록'}}
            />
            <Tab.Screen
              name="Delivery"
              component={Delivery}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{title: '내 정보'}}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: '로그인'}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{title: '회원가입'}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </Provider>
  );
}

export default App;
