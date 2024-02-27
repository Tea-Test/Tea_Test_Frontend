// import React, {useState, useEffect} from 'react';
// import {
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// import axios from 'axios';
// import tw from 'twrnc';
// import {Screen} from 'react-native-screens';
// import {Link} from '@react-navigation/native';
// import {ActivityIndicator} from 'react-native-paper';
// import {Alert} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import ImagePicker from 'react-native-image-picker';

// const RegisterScreen = (props: any) => {
//   const stack = props.navigation;

//   function moveToLogin() {
//     stack.navigate('Login');
//   }

//   function moveToHome() {
//     stack.navigate('Home');
//   }

//   console.log('Rendered Register Screen');

//   const [firstName, setFirstName] = useState('');
//   const [secondName, setSecondName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegistration = async () => {
//     try {
//       // Make an API request to your backend to save the data
//       const response = await axios.post('http://localhost:5009/users', {
//         firstName,
//         secondName,
//         email,
//         password,
//       });

//       // Handle the response, show a success message, or navigate to another screen
//       console.log('Registration successful:', response.data);
//       Alert.alert('Success', 'Registration successful!');
//     } catch (error) {
//       // Handle errors, show an error message, etc.
//       console.error('Registration failed:', error);
//       Alert.alert('Error', 'Registration failed. Please try again.');
//     }
//   };

//   return (
//     <View style={tw`flex-1  bg-stone-100`}>
//       <View style={tw` flex-1   bg-white px-4 justify-center`}>
//         <View>
//           <TouchableOpacity onPress={moveToLogin} style={tw``}>
//             <Feather name="arrow-left" color="#000000" size={25} />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={tw`p-4 flex-8`}>
//         <ScrollView>
//           <View style={tw`flex-2 justify-center`}>
//             <Text style={tw`text-black self-center  p-5 text-2xl`}>
//               Create a New Account
//             </Text>
//           </View>

//           <View style={tw` px-2 `}>
//     <View style={tw` px-2`}>
//       <View style={tw` py-3 `}>
//         <Text style={tw`text-black text-base`}>First Name:</Text>
//       </View>
//       <View style={tw``}>
//         <TextInput
//           placeholder="Enter your first name"
//           style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
//           value={firstName}
//           onChangeText={text => setFirstName(text)}
//         />
//       </View>
//     </View>

//     <View style={tw` px-2`}>
//       <View style={tw` py-3 `}>
//         <Text style={tw`text-black text-base`}>Last Name:</Text>
//       </View>
//       <View style={tw``}>
//         <TextInput
//           placeholder="Enter your last name"
//           style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
//           value={secondName}
//           onChangeText={text => setSecondName(text)}
//         />
//       </View>
//     </View>

//     <View style={tw`px-2`}>
//       <View style={tw` py-3 `}>
//         <Text style={tw`text-black text-base`}>Email:</Text>
//       </View>
//       <View style={tw``}>
//         <TextInput
//           placeholder="Enter your email"
//           style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
//           value={email}
//           onChangeText={text => setEmail(text)}
//         />
//       </View>
//     </View>

//     <View style={tw`px-2`}>
//       <View style={tw` py-3 `}>
//         <Text style={tw`text-black text-base`}>Password:</Text>
//       </View>
//       <View style={tw``}>
//         <TextInput
//           placeholder="Enter a new password"
//           style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
//           secureTextEntry={true}
//           value={password}
//           onChangeText={text => setPassword(text)}
//         />
//       </View>
//     </View>

//     <View style={tw`my-6 py-3 bg-yellow-500  rounded-6  mx-2`}>
//       <TouchableOpacity onPress={handleRegistration}>
//         <View style={tw``}>
//           <Text style={tw`text-white self-center font-bold text-lg`}>
//             Submit
//           </Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default RegisterScreen;

import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import tw from 'twrnc';
import axios from 'axios';
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const RegisterScreen = (props: any) => {
  const stack = props.navigation;

  function moveToLogin() {
    stack.navigate('Login');
  }

  function moveToHome() {
    stack.navigate('Home');
  }

  console.log('Rendered Register Screen');

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const handleRegistration = async () => {
    try {
      const requestData = {
        firstName,
        secondName,
        email,
        password,
        image,
      };

      console.log('Request Data:', requestData);

      // Make an API request to your backend to save the data
      const response = await axios.post(
        'http://192.168.8.101:5009/users',
        requestData,
      );

      // Handle the response, show a success message, or navigate to another screen
      console.log('Registration successful:', response.data);
      Alert.alert('Success', 'Registration successful!', [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to the "Home" screen
            moveToHome();
          },
        },
      ]);
    } catch (error) {
      // Handle errors, show an error message, etc.
      console.error('Registration failed:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

//   const pickImage = () => {
//     ImagePicker.showImagePicker({}, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else {
//         // Set the selected image
//         setImage({ uri: response.uri });
//       }
//     });
//   };

  const cameraHandler= async ()=>{
    const im = await launchCamera();
    image = im.getImage();
    setImage({ uri: response.uri });

  }

  return (
    <View style={tw`flex-1 bg-stone-100`}>
      <View style={tw`flex-1 bg-white px-4 justify-center`}>
        <View>
          <TouchableOpacity onPress={moveToLogin} style={tw``}>
            <Feather name="arrow-left" color="#000000" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`p-4 flex-8`}>
        <ScrollView>
          <View style={tw`flex-2 justify-center`}>
            <Text style={tw`text-black self-center p-5 text-2xl`}>
              Create a New Account
            </Text>
          </View>

          <View style={tw`px-2`}>
            <View style={tw` px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>First Name:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="Enter your first name"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                  value={firstName}
                  onChangeText={text => setFirstName(text)}
                />
              </View>
            </View>

            <View style={tw` px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>Last Name:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="Enter your last name"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                  value={secondName}
                  onChangeText={text => setSecondName(text)}
                />
              </View>
            </View>

            <View style={tw`px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>Email:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="Enter your email"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
            </View>

            <View style={tw`px-2`}>
              <View style={tw` py-3 `}>
                <Text style={tw`text-black text-base`}>Password:</Text>
              </View>
              <View style={tw``}>
                <TextInput
                  placeholder="Enter a new password"
                  style={tw`bg-white border rounded-6 px-4 border-yellow-500`}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
            </View>

            <View style={styles.container}>
      <TouchableOpacity onPress={cameraHandler} style={styles.button}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
      {image && <Image source={image} style={styles.image} />}
    </View>

            <View style={tw`my-6 py-3 bg-yellow-500  rounded-6  mx-2`}>
              <TouchableOpacity onPress={handleRegistration}>
                <View style={tw``}>
                  <Text style={tw`text-white self-center font-bold text-lg`}>
                    Submit
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
  });

export default RegisterScreen;
