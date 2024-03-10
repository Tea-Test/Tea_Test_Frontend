import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import DropDownPicker from 'react-native-dropdown-picker';
import {Screen} from 'react-native-screens';
// import bg from '../../assets/mood-select-bg.png'
import LinearGradient from 'react-native-linear-gradient';
//import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const GradeScanScreen = (md: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  //
  const GradeNavigator = md.navigation;

  const [image, setImage] = useState(null); // Use null instead of an empty string for the image state

  const uploadImage = async imageData => {
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageData.uri,
        type: imageData.type,
        name: imageData.fileName,
      });

      // Add your logic to send the formData to the server if needed
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageUpload = async () => {
    try {
      ImagePicker.launchCamera(
        {
          mediaType: 'photo',
          includeBase64: false,
        },
        response => {
          if (!response.didCancel) {
            // setImage(response);
            uploadImage(response);
          }
        },
      );
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  function goToResult() {
    GradeNavigator.navigate('Grade Result');
  }

  const scan = async () => {
    try {
      const requestData = {
        image: image ? image.uri : null, // Pass the URI or null if no image is selected
      };

      const response = await axios.post(
        'http://192.168.8.100:5009/users',
        requestData,
      );

      console.log('Registration successful:', response.data);
      Alert.alert('Success', 'Registration successful!', [
        {
          text: 'OK',
          onPress: () => {
            goToResult();
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`justify-center pt-10 pb-7`}>
        <Text style={tw`text-black self-center text-3xl`}>
          Upload the Image here
        </Text>
      </View>

      <View style={tw` mx-3 px-4 bg-white rounded-3 shadow-2xl opacity-100`}>
        <View style={tw`py-4`}>
          <Text
            style={tw`text-black self-center text-lg text-justify  font-mono`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            dolor asperiores eos. Dicta!
          </Text>
        </View>
        <View style={tw`py-4`}>
          <Text style={tw`text-black text-lg text-justify pb-2`}>
            {'\u2751'} Lorem ipsum.
          </Text>
          <Text style={tw`text-black text-lg text-justify pb-2 `}>
            {'\u2751'} Lorem ipsum.
          </Text>
          <Text style={tw`text-black  text-lg text-justify pb-2 `}>
            {'\u2751'} Lorem ipsum.
          </Text>
        </View>
      </View>

      <View style={tw` px-3 pt-18 flex flex-row`}>
        <View style={tw`bg-red-100 p-3`}>
          {image && (
            <Image
              source={{uri: image.uri}}
              style={{width: 200, height: 200}}
            />
          )}
          <TouchableOpacity onPress={handleImageUpload}>
            <Text style={tw`text-black`}>Upload Image</Text>
          </TouchableOpacity>
        </View>
        <View style={tw` flex-1 justify-center`}>
          <View style={tw`py-3 bg-yellow-500  rounded-3 p-2`}>
            <TouchableOpacity onPress={goToResult}>
              <View>
                <Text style={tw`text-white self-center font-bold text-lg`}>
                  View
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GradeScanScreen;
