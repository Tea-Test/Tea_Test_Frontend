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
import { ActivityIndicator } from 'react-native-paper';
import { Alert } from 'react-native';

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


  function saveUser() {
    Alert.alert(name + " " + email + " " + phone + " " + password );

}

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsHorizontalScrollIndicator={false}
      //   keyboardShouldPersistTaps={true}
    >
      <Screen style={styles.container}>
        <View>
          <View>
            <Text style={styles.registerTitle}>Register</Text>
          </View>

          <View style={styles.list}>
            <View style={styles.row}>
              <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Name</Text>
              </View>
              <View style={styles.columnRight}>
                <TextInput
                  placeholder="Enter your Name"
                  style={styles.registerInputText}
                  onChangeText={(v) => setName(v)}
                />
                {/* {name.length < 1 ? null : nameVerify ? (
                    <Feather name="check-circle" color="green" size={20} />
                ) : (
                    <Error name="error" color="red" size={20} />
                )} */}
              </View>
              {/* {name.length < 1 ? null : nameVerify ? null : (
                <Text
                    style={{
                    marginLeft: 20,
                    color: 'red',
                    }}>
                    Name sholud be more then 1 characters.
                </Text>
                )} */}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.list}>
            <View style={styles.row}>
              <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Email</Text>
              </View>
              <View style={styles.columnRight}>
                <TextInput
                  placeholder="Enter your Email"
                  style={styles.registerInputText}
                  onChangeText={(v) => setEmail(v)}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.list}>
            <View style={styles.row}>
              <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Phone</Text>
              </View>
              <View style={styles.columnRight}>
                <TextInput
                  placeholder="Enter your Phone"
                  style={styles.registerInputText}
                  onChangeText={(v) => setPhone(v)}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.list}>
            <View style={styles.row}>
              <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Password</Text>
              </View>
              <View style={styles.columnRight}>
                <TextInput
                secureTextEntry
                  placeholder="Enter your Password"
                  style={styles.registerInputText}
                  onChangeText={(v) => setPassword(v)}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          {/* <View style={styles.list}>
            <View style={styles.row}>
              <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Confrim Password</Text>
              </View>
              <View style={styles.columnRight}>
                <TextInput
                  placeholder="Enter your Password Again"
                  style={styles.registerInputText}
                  onChangeText={(v) => setName(v)}
                />
              </View>
            </View>
          </View> */}
        </View>

        <View style={tw`self-end py-6`}>
          <TouchableOpacity
            onPress={saveUser}
            style={tw`bg-green-600 rounded w-20 p-2`}>
            <View>
            {
                (saving) ? <ActivityIndicator color='white' />
                :
                <Text style={tw`text-white self-center`}>Register</Text>
            }
            </View>
          </TouchableOpacity>
        </View>



        <View>
          <TouchableOpacity onPress={moveToLogin}>
            <Text style={tw`text-black`}>Go to Login</Text>
          </TouchableOpacity>
        </View>
      </Screen>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  registerTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    padding: 20,
  },

  list: {},

  row: {
    flexDirection: 'row',
    paddingTop: 30,
  },

  columnLeft: {
    flexDirection: 'column',
    width: '40%',
  },

  columnRight: {
    flexDirection: 'column',
    width: '60%',
  },

  registerLabel: {
    fontSize: 16,
    fontFamily: 'poppins',
  },

  registerInputText: {
    borderWidth: 0.6,
    borderColor: '#2EC82B',
    borderRadius: 6,
    height: 38,
    backgroundColor: '#ffffff',
    paddingLeft: 8,
    paddingRight: 15,
  },

  button: {
    fontSize: 0,
    color: 'red',
    borderRadius: 6,
  },
});

export default RegisterScreen;

{
  /* <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>Last Name</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter your last name"
              style={styles.registerInputText}></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>Phone Number</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter your phone number"
              style={styles.registerInputText}></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>Email Address</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter your email address"
              style={styles.registerInputText}></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>Country</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter the country"
              style={styles.registerInputText}></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>DoB</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter your date of birth"
              style={styles.registerInputText}></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>New Password</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter a strong password"
              style={styles.registerInputText}></TextInput>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.registerLabel}>Confirm Password</Text>
          </View>
          <View style={styles.columnRight}>
            <TextInput
              placeholder="Enter your password again"
              style={styles.registerInputText}></TextInput>
          </View>
        </View> */
}
