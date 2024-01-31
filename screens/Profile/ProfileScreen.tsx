import React from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';

export default function ProfileScreen() {
  return (
    <View style={tw`bg-white pb-100`}>
      <View style={tw`justify-center`}>
        <View>
          <Text style={tw`self-center p-5 text-2xl text-black`}>
            Hi, Sithumi
          </Text>
        </View>
        <View>
          <Image
            style={tw`self-center w-5 w-40 h-40`}
            source={require('../../assets/avatar-profile-icon_188544-4755.png')}
            alt="image"
          />
        </View>
        <View style={tw`p-8`}>
          <View style={tw`flex-row`}>
            <View style={tw`basis-1/2`}>
              <Text style={tw`text-gray-400`}>First Name:</Text>
            </View>
            <View style={tw`basis-1/2`}>
              <Text style={tw`text-gray-400`}>Second Name:</Text>
            </View>
          </View>
          <View style={tw`flex-row pb-5`}>
            <View style={tw`basis-1/2`}>
              <Text style={tw`text-xl text-black`}>Sithumi</Text>
            </View>
            <View style={tw`basis-1/2`}>
              <Text style={tw`text-xl text-black`}>Perera</Text>
            </View>
          </View>
          <View style={tw`flex-row`}>
            <View style={tw``}>
              <Text style={tw`text-gray-400`}>Email:</Text>
            </View>
          </View>
          <View style={tw`flex-row pb-5`}>
            <View style={tw``}>
              <Text style={tw`text-xl text-black`}>
                sithumiperera@gmail.com
              </Text>
            </View>
          </View>
          <View style={tw`flex-row`}>
            <View style={tw``}>
              <Text style={tw`text-gray-400`}>Contact Number:</Text>
            </View>
          </View>
          <View style={tw`flex-row pb-5`}>
            <View style={tw``}>
              <Text style={tw`text-xl text-black`}>+94763560081</Text>
            </View>
          </View>
        </View>
        <View style={tw`flex-row pb-5`}>
          <View style={tw`basis-1/2`}>
            <TouchableOpacity
              style={tw`bg-gray-400 p-3 px-5 self-center rounded-2xl`}>
              <Text style={tw`text-white text-base`}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={tw`basis-1/2`}>
            <TouchableOpacity
              style={tw`bg-red-400 p-3 px-5 self-center rounded-2xl`}>
              <Text style={tw`text-white text-base`}>Delete Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
