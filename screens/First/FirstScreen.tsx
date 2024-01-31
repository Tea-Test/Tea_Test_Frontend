import React from 'react';
import {StatusBar, Text, Touchable, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

const FirstScreen = () => {
  return (
    <View style={tw`items-center justify-center flex-1 bg-black`}>
      <Text style={tw`text-3xl font-bold text-white`}>Tea Test</Text>
      <TouchableOpacity style={tw`p-3 bg-teal-500 rounded-lg`}>
        <Text style={tw`text-3xl font-bold text-white`} href="./Login&Register">
          Get Started!
        </Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
};

export default FirstScreen;
