import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert, Text, View, ScrollView} from 'react-native';
import tw from 'twrnc';

const GradeResultScreen = ({route}: any) => {
  const {uploadedImageUrl} = route.params;
  console.log({uploadedImageUrl});
  console.log('Variable is: ' + uploadedImageUrl);

  const [grade, setGrade] = useState('CTC');

  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchGrade = async () => {
      try {
        const response = await axios.post(
          'http://192.168.8.100:8000/predict/',
          '',
          {
            params: {
              url: uploadedImageUrl,
            },
            headers: {
              accept: 'application/json',
              'content-type': 'application/x-www-form-urlencoded',
            },
          },
        );
        if (response.data.grade) {
          setGrade(response.data.grade);
        } else {
          setGrade('CTC');
        }

        console.log('Grade was successfully retrieved !!!');
        console.log(grade);
      } catch (error) {
        console.error(error);
        Alert.alert('Message', 'Check your connection!');
      }
    };

    fetchGrade();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `http://192.168.8.100:5009/grades/${grade}`,
        );
        setDetails(response.data);
        console.log('Details were successfully retrieved !!!');
      } catch (error) {
        console.error('Check your connection', error);
        Alert.alert('Message', 'Check your connection!');
      }
    };

    fetchDetails();
  }, []);

  console.log(details);

  return (
    <View style={tw`bg-white py-6 px-3 flex-1 flex items-center justify-center h-screen`}>
      <View  style={tw`bg-yellow-400 px-3 py-6`}>
        <View style={tw`py-5`}>
          <Text style={tw`text-3xl font-bold self-center text-black pb-5`}>
            Tea Grade : {details.grade}
          </Text>
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl text-black`}>
            Water Extract Content: {details.wec}
          </Text>
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl  text-black`}>
            Caffeine: {details.caffeine}
          </Text>
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl font-bold text-black`}>
            Suitable Gimes to Get:
          </Text>
          <Text style={tw` text-black pt-4`}>{details.time}</Text>
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl font-bold text-black`}>
            Brewing Tempertature:
          </Text>
          <Text style={tw` text-black pt-4`}>{details.brew}</Text>
        </View>
        <View style={tw`py-5`}>
          <Text style={tw`text-xl font-bold  text-black`}>Health Effects:</Text>
          <Text style={tw`text-base text-black pt-4  text-justify`}>
            {details.health}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GradeResultScreen;
