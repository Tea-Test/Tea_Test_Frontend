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
} from 'react-native';
import axios from 'axios';

import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {Screen} from 'react-native-screens';

const LoginScreen = (props: any) => {
  console.log('Rendered Login Screen');

  const stack = props.navigation;

  const t_email = 'abc@gmail.com';
  const t_password = '123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function moveToHome() {
    if (email == t_email) {
      if (t_password == password) {
        stack.navigate('HomePage');
      } else {
        Alert.alert('Message', 'Password is incorrect!');
      }
    } else {
      Alert.alert('Message', 'Email is incorrect!');
    }
  }

  function moveToRegister() {
    stack.navigate('RegisterPage');
  }

  return (
    <ScrollView style={styles.loginContainer}>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/TeaTestLogo.png')}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login !!!</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Mobile or Email"
            style={styles.textInput}
            // value="email"
            onChangeText={v => setEmail(v)}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            // value="password"
            onChangeText={v => setPassword(v)}
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 8,
            marginRight: 10,
          }}>
          <Text style={{color: '#919191', fontWeight: '700'}}>
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={moveToHome}>
          <View>
            <Text style={styles.textSign}>Log In</Text>
          </View>
        </TouchableOpacity>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#919191'}}>
            ---or Continue as---
          </Text>
        </View>
        <View>
          <View style={styles.bottomButton}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={styles.inBut} onPress={moveToRegister}>
                <Text style={styles.bottomText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={styles.inBut}>
                <FontAwesome
                  name="user-circle-o"
                  color="white"
                  style={styles.smallIcon2}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>Google</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity style={styles.inBut}>
                <FontAwesome
                  name="user-circle-o"
                  color="white"
                  style={styles.smallIcon2}
                />
              </TouchableOpacity>
              <Text style={styles.bottomText}>FaceBook</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
