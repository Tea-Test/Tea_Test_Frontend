import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  ScrollView,
  Animated,
  StyleSheet,
} from 'react-native';
import styles from '../Login&Register/style';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

export default function HomeScreen(hm: any) {
  const edu = hm.navigation;

  const [news, setNews] = useState([]);
  const scrollX = new Animated.Value(0);

  function goToEducation() {
    edu.navigate('Tea News');
  }

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://192.168.8.100:5009/news`);
        setNews(response.data);
        console.log(' News were successfully retrieved !!!');
      } catch (error) {
        console.error(error);
        Alert.alert('Message', 'Check your connection!');
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={tw`flex-1 flex self-center bg-gray-100`}>
      <View  style={tw``}>
        <View style={tw`flex-4 bg-yellow-300  px-3 shadow-xl flex items-center justify-center h-screen`} >
          <View style={tw`self-center`}  >
            <Text style={tw`text-3xl font-bold text-black pb-3`}>
              Welcome to TeaTest..!!
            </Text>
          </View>
          <View style={tw``}>
            <Text style={tw` px-4 text-xl text-black text-justify`}>
            Step into a world of tea exploration with our innovative app! Powered by AI, it offers personalized recommendations and a vibrant community. Say hello to a tailored tea experience like no other!
            </Text>
          </View>
        </View>
        <View style={tw``}>
        <View style={tw` my-6 py-2 pb-4 bg-white  px-3 shadow-xl`}>
          <View style={tw`h-80 mb-4`}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: scrollX}}}],
                {useNativeDriver: false},
              )}
              scrollEventThrottle={16}>
              <View style={tw`flex-row overflow-visible flex-wrap`}>
                {news.map((news, index) => (
                  <View style={tw` mb-3   p-2  `} key={index}>
                    <View style={tw`bg-white shadow-md rounded-xl w-80 h-75`}>
                      <View style={tw``}>
                        <Image
                          height={180}
                          source={{uri: news.image}}
                          alt="{product.name}"
                          onError={error =>
                            console.error('Image loading error:', error)
                          }
                          style={tw`rounded-t-xl`}
                        />
                      </View>
                      <View style={tw`m-3  p-2 pb-10`}>
                        <Text style={tw`text-base text-black text-justify font-bold`}>
                          {news.title}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={tw` self-end`}>
            <TouchableOpacity
              style={tw`bg-yellow-500 p-3 px-5 self-center rounded-2xl shadow-lg`}
              onPress={goToEducation}>
              <View>
                <Text style={tw`text-white font-bold text-lg`}>More News</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </View>
        
      </View>
    </View>
  );
}


const st = StyleSheet.create({
    bg:{

        backgroundColor: '#fcce2a'
    }
})