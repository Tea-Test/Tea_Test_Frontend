import React from 'react';
import {Button, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import styles from '../Login&Register/style';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen(hm:any) {

const edu = hm.navigation;

function goToEducation(){
    edu.navigate('Tea News');
}





  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={tw`text-3xl font-bold text-black m-7`}>
          Welcome to Tea Test
        </Text>
      </View>
      <Text>This is HomeScreen</Text>

      {/* <TouchableOpacity style={tw`p-3 bg-teal-500 rounded-lg m-7`}>
        <Text style={tw`text-3xl font-bold text-white`}>Scan Tea</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={tw`p-3 bg-teal-500 rounded-lg m-7`} onPress={goToEducation}>
        <Text style={tw`text-3xl font-bold text-white`}>Education</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={tw`p-3 bg-teal-500 rounded-lg m-7`} onPress={goToMoodSelect}>
        <Text style={tw`text-3xl font-bold text-white`}>MoodSelect</Text>
      </TouchableOpacity> */}
    </View>
  );
}
