import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
// import {  } from 'react-native-gesture-handler';
import tw from 'twrnc';

const ProfileScreen = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://192.168.8.100:5009/users/chamaalidilka@gmail.com',
        ); //${email}
        setCustomers(response.data);
        console.log('User retrieved successfully!');
      } catch (error) {
        console.error('Check your connection for ProfileScreen', error);
        Alert.alert('Message', 'Check your connection!');
      }
    };

    fetchUser();
  }, []);

  return (
    <ScrollView style={tw`bg-white flex-1`}>
      <View>
        <View style={tw`justify-center`}>
          <View>
            <Text style={tw`self-center p-5 text-2xl text-black`}>
              Hi, {customers.firstName}
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
            <View style={tw`flex-row pt-5`}>
              <View style={tw`basis-1/2`}>
                <Text style={tw`text-gray-400`}>First Name:</Text>
              </View>
              <View style={tw`basis-1/2`}>
                <Text style={tw`text-gray-400`}>Second Name:</Text>
              </View>
            </View>
            <View style={tw`flex-row pb-15`}>
              <View style={tw`basis-1/2`}>
                <Text style={tw`text-xl text-black`}>
                  {customers.firstName}
                </Text>
              </View>
              <View style={tw`basis-1/2`}>
                <Text style={tw`text-xl text-black`}>
                  {customers.secondName}
                </Text>
              </View>
            </View>
            <View style={tw`flex-row`}>
              <View style={tw``}>
                <Text style={tw`text-gray-400`}>Email:</Text>
              </View>
            </View>
            <View style={tw`flex-row pb-5`}>
              <View style={tw``}>
                <Text style={tw`text-xl text-black`}>{customers.email}</Text>
              </View>
            </View>
            {/* <View style={tw`flex-row`}>
              <View style={tw``}>
                <Text style={tw`text-gray-400`}>Contact Number:</Text>
              </View>
            </View> */}
            {/* <View style={tw`flex-row pb-5`}>
              <View style={tw``}>
                <Text style={tw`text-xl text-black`}>+94763560081</Text>
              </View>
            </View> 
          </View>*/}
            <View style={tw`flex-row pt-20`}>
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
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
