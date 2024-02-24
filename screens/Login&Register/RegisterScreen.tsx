import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import tw from 'twrnc';
import {Screen} from 'react-native-screens';
import {Link} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native-paper';
import {Alert} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = (props: any) => {
  const stack = props.navigation;

  function moveToLogin() {
    stack.navigate('LoginPage');
  }

  console.log('Rendered Register Screen');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [saving, setSaving] = useState('');

//   const saveUser = async () => {
//     Alert.alert(name + ' ' + email + ' ' + phone + ' ' + password);

//     try {
//       const response = await axios.post('http://192.168.8.101:5009/users', {
//         name,
//         email,
//         phone,
//         password,
//       });

//       // Handle the response data
//       console.log('Added a new user. Response:', response.data);
//     } catch (error) {
//       // Handle errors
//       console.error('Something went wrong! Error:', error);
//     }
//   };

  return (
    <View style={tw`flex-1  bg-stone-100`}>
      <View style={tw` flex-1   bg-white px-4 justify-center`}>
        <View>
          <TouchableOpacity onPress={moveToLogin} style={tw``}>
            <Feather name="arrow-left" color="#000000" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`p-4 flex-8`}>
        <ScrollView>
          <View style={tw`flex-2 justify-center`}>
            <Text style={tw`text-black self-center  p-5 text-2xl`}>
              Create a New Account
            </Text>
          </View>
          <View style={tw` px-2 `}>
            <View style={tw` px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>First Name:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="thwh"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                />
              </View>
            </View>
            <View style={tw` px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>Last Name:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="erjje"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                />
              </View>
            </View>
            <View style={tw`px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>Email:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="rhth"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                />
              </View>
            </View>
            
            <View style={tw`px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>Password:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="fssds"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                  secureTextEntry={true}
                />
              </View>
            </View>

            <View style={tw`my-6 py-3 bg-yellow-400  rounded-6  mx-4`}>
              <TouchableOpacity>
                <View style={tw``}>
                  <Text style={tw`text-white self-center font-bold text-lg`}>
                    Log In
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegisterScreen;
