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
        const response = await axios.get(`http://192.168.8.101:5009/news`);
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
    <View style={tw`flex-1 flex self-center bg-white`}>
      <View  style={tw``}>
        <View style={tw`flex-4 bg-yellow-300  px-3 shadow-xl`} >
          <View>
            <Text style={tw`text-3xl font-bold text-black m-7 pt-3`}>
              Welcome to TeaTest..!!
            </Text>
          </View>
          <View style={tw``}>
            <Text style={tw`pb-3 pt-6 px-3 text-base text-black text-justify`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              dolorem at labore soluta, unde est sit possimus nobis beatae.
              Fugit qui eos perspiciatis libero quas illum quam nam, dolore
              iste.
            </Text>
          </View>
        </View>
        <View style={tw` flex-6 mx-3 my-8`}>
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
                      <View style={tw`bg-blue-100 `}>
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
                        <Text style={tw`text-base text-black text-justify `}>
                          {news.title}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>

          <View style={tw`mt-2 self-end`}>
            <TouchableOpacity
              style={tw`bg-yellow-500 p-3 px-5 self-center rounded-2xl shadow-lg`}
              onPress={goToEducation}>
              <View>
                <Text style={tw`text-white font-bold text-lg`}>Read more</Text>
              </View>
            </TouchableOpacity>
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