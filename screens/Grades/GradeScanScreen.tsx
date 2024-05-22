import React, {useEffect, useState} from 'react';
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
import {useIsFocused} from '@react-navigation/native';

import axios from 'axios';

const GradeScanScreen = (md: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('n/a');
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

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // This will run when the screen is focused
      setUploadedImageUrl('n/a');
    }
  }, [isFocused]);
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
    if (!uploadImage) {
      console.log('No image to upload');
      return;
    }

    const reference = storage().ref('images/' + new Date().getTime());

    try {
      await reference.putFile(uploadImage);
      console.log('Image uploaded successfully');
      const url = await reference.getDownloadURL();
      console.log('Image URL:', url);
      setUploadedImageUrl(url);
      Alert.alert('Success', 'See the results!');

      // Retrieve the download URL of the uploaded image
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  };

  const stack = md.navigation;
  function moveToResult() {
    stack.navigate('Grade Result', {uploadedImageUrl});
  }
  return (
    <View style={tw`flex-1 px-5`}>
      <View style={tw`justify-center pt-10 pb-7`}>
        <Text style={tw`text-black self-center font-bold text-3xl`}>
          Capture the Tea Dust
        </Text>
      </View>

      <View style={tw`  bg-white rounded-3 shadow-2xl opacity-100`}>
        <View style={tw`py-6`}>
          <Text style={tw`text-black self-center text-lg text-justify px-4`}>
            "Let AI Tailor Your Tea Experience!" Our innovative system analyzes
            visual ideas to recommend personalized teas, delivering a seamless
            and customized journey to your ideal cup. It's the modern way to
            discover your perfect brew, tailored just for you.
          </Text>
        </View>
      </View>

      <View style={tw` py-8`}>
        <View style={tw``}>
          {image && (
            <Image
              source={{uri: image.uri}}
              style={{width: 200, height: 200}}
            />
          )}

          {uploadedImageUrl == 'n/a' ? (
            <View style={tw` flex flex-row  self-start`}>
              <TouchableOpacity
                onPress={recognizeFromCamera}
                style={tw`bg-yellow-400 p-3 w-92 rounded self-center`}>
                <Text style={tw`text-black font-bold self-center`}>
                  Upload Image
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={tw` flex flex-row  self-end`}>
              <TouchableOpacity
                onPress={moveToResult}
                style={tw`bg-green-500 p-3  w-92 rounded`}>
                <Text style={tw`text-white self-center font-bold`}>
                  See Results
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
      <View>
        {imgSrc && (
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imgSrc} />
          </View>
        )}
      </View>
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
    height: 400 / 2,
    width: 300 / 2,
  },
});

export default GradeScanScreen;
