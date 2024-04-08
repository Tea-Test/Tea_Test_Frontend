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
// import { TextInput } from 'react-native-gesture-handler';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

import axios from 'axios';

const GradeScanScreen = (md: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImageUrl, setUploadedImageUrl] = useState();
  const [imgSrc, setImgSrc] = useState(null);

  const DEFAULT_HEIGHT = 500;
  const DEFAULT_WITH = 600;
  const defaultPickerOptions = {
    cropping: true,
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WITH,
  };
  //
  const GradeNavigator = md.navigation;

  const [image, setImage] = useState(null); // Use null instead of an empty string for the image state

  const recognizeFromCamera = async (options = defaultPickerOptions) => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      });
      setImgSrc({uri: image.path});
      console.log(image.path);
      uploadImage(image.path);
    } catch (err) {
      if (err.message !== 'User cancelled image selection') {
        console.error(err);
      }
    }
  };

  const uploadImage = async uploadImage => {
    const stack = md.navigation;

    function moveToResult() {
      stack.navigate('Grade Result', {uploadedImageUrl});
    }

    if (!uploadImage) {
      console.log('No image to upload');
      return;
    }

    const reference = storage().ref('images/' + new Date().getTime());

    try {
      await reference.putFile(uploadImage);
      console.log('Image uploaded successfully');
      Alert.alert('Success', 'Registration successful!', [
        {
          text: 'OK',
          onPress: () => {
            moveToResult();
          },
        },
      ]);

      // Retrieve the download URL of the uploaded image
      const url = await reference.getDownloadURL();
      console.log('Image URL:', url);
      setUploadedImageUrl({url});
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  };

  function goToResult() {
    GradeNavigator.navigate('Grade Result');
  }

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
          <TouchableOpacity onPress={recognizeFromCamera}>
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
      {imgSrc && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imgSrc} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginVertical: 15,
    height: 500 / 3.5,
    width: 600 / 3.5,
  },
});

export default GradeScanScreen;
