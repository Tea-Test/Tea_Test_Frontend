import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Linking,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import axios from 'axios';

import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {Screen} from 'react-native-screens';
import tw from 'twrnc';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = (props: any) => {
  console.log('Rendered Login Screen');

  const stack = props.navigation;

  const t_email = 'chamaalidilka@gmail.com';
  const t_password = 'Abc123';



  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getUser = async () => {
    const response = await axios.get(
        `http://192.168.8.101:5009/user/${email}`,
      );
  }

  function moveToHome() {
    if (email == t_email) {
      if (t_password == password) {
        stack.navigate('Home');
      } else {
        Alert.alert('Message', 'Password is incorrect!');
      }
    } else {
      Alert.alert('Message', 'Email is incorrect!');
    }
  }

  function moveToRegister() {
    stack.navigate('Register');
  }

  return (
    <View style={tw`flex-1 p-3 bg-white`}>
      <View style={tw`flex-row flex-1 justify-center py-8`}>
        <View style={tw`flex-2   justify-center`}>
          <Text
            style={tw`text-yellow-500 font-bold text-4xl pl-4 justify-center`}>
            TeaTest
          </Text>
        </View>
        <View style={tw`flex-1`}>
          <Image
            style={tw`self-center `}
            source={require('../../assets/TeaTestLogo.png')}
          />
        </View>
      </View>

      <View style={tw`flex-6`}>
        <View style={tw``}>
          <ScrollView style={tw` `}>
            <View style={tw`flex-3`}>
              <Image
                style={tw`self-center mt-10`}
                source={require('../../assets/TeaCup.png')}
              />
            </View>
            <View style={tw` px-2 py-10 rounded-8`}>
              {/* <KeyboardAvoidingView> */}
              <View style={tw`flex flex-row px-2 py-4`}>
                <FontAwesome
                  name="user"
                  color="#000000"
                  size={25}
                  style={tw`flex-1  self-center justify-center`}
                />
                <TextInput
                  placeholder="Enter Email"
                  style={tw`flex-9 bg-white border rounded-6 mx-2 px-6`}
                //   secureTextEntry={true}
                  // value="password"
                  onChangeText={v => setEmail(v)}
                />
              </View>
              <View style={tw`flex flex-row px-2 py-4`}>
                <FontAwesome
                  name="lock"
                  color="#000000"
                  size={30}
                  style={tw`flex-1  self-center justify-center`}
                />
                <TextInput
                  placeholder="Enter Password"
                  style={tw`flex-9 bg-white border rounded-6 mx-2 px-6`}
                  secureTextEntry={true}
                  // value="password"
                  onChangeText={v => setPassword(v)}
                />
              </View>
              {/* </KeyboardAvoidingView>   */}
              {/* px-2 py-10 rounded-8 */}
              <View style={tw`py-3 bg-yellow-500  rounded-6  mx-2`}>
                <TouchableOpacity onPress={moveToHome}>
                  <View style={tw``}>
                    <Text style={tw`text-white self-center font-bold text-lg`}>
                      Log In
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={tw`justify-center`}>
                <View style={tw` py-4 self-center flex justify-center `}>
                  <Text style={tw`justify-center text-black`}>
                    Don't have an account
                    <TouchableOpacity
                      style={tw`justify-center`}
                      onPress={moveToRegister}>
                      <Text style={tw` text-yellow-600 justify-center`}>
                        {' '}
                        Register
                      </Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
