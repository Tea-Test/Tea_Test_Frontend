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

const RegisterScreen = (props: any) => {
  console.log('Rendered Register Screen');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // function handleSubmit() {
  //     const userData = {
  //         name: name,
  //         email: email,
  //         phone: phone,
  //         password: password,
  //         confirmPassword: confirmPassword
  // };

  //     axios
  //       .post('http://192.168.8.177:5001/users', userData)
  //       .then(res => console.log("Done!"))
  //       .catch(e => console.log(e));
  //   }

  //   function handleName(e1) {
  //     const nameVar = e1.nativeEvent.text;
  //     setName(nameVar);
  //   }
  //   function handleEmail(e2) {
  //     const emailVar = e2.nativeEvent.text;
  //     setEmail(emailVar);
  //   }
  //   function handlePhone(e3) {
  //     const phoneVar = e3.nativeEvent.text;
  //     setPhone(phoneVar);
  //   }
  //   function handlePassword(e4) {
  //     const passwordVar = e4.nativeEvent.text;
  //     setPassword(passwordVar);
  //   }
  //   function handleConfirmPassword(e5) {
  //     const confirmPasswordVar = e5.nativeEvent.text;
  //     setConfirmPassword(confirmPasswordVar);
  //   }

  const stack = props.navigation;

  function moveToLogin() {
    stack.navigate('LoginPage');
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
                  // onChange={e1 => handleName(e1)}
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
                  // onChange={e2 => handleEmail(e2)}
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
                  // onChange={e3 => handlePhone(e3)}
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
                  placeholder="Enter your Password"
                  style={styles.registerInputText}
                  // onChange={e4 => handlePassword(e4)}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.list}>
            <View style={styles.row}>
              <View style={styles.columnLeft}>
                <Text style={styles.registerLabel}>Confrim Password</Text>
              </View>
              <View style={styles.columnRight}>
                <TextInput
                  placeholder="Enter your Password Again"
                  style={styles.registerInputText}
                  // onChange={e5 => handleConfirmPassword(e5)}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={tw`self-end py-6`}>
          <TouchableOpacity
            // onPress={() => handleSubmit()}
            style={tw`bg-green-600 rounded w-20 p-2`}>
            <Text style={tw`text-white self-center`}>Register</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={moveToLogin}>
            <Text style={tw`text-black`}>Register</Text>
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
