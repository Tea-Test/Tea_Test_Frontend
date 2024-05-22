import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import tw from 'twrnc';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const MoodResultScreen = ({route}: any) => {
  const {value} = route.params;
  const [products, setProducts] = useState([]);
  console.log({value});
  console.log('Variable is: ' + value);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `http://192.168.8.100:5009/products/${value}`,
        );
        setProducts(response.data);
        console.log(value + ' Products were successfully retrieved !!!');
      } catch (error) {
        console.error('Check your connection for MoodResultPage', error);
        Alert.alert('Message', 'Check your connection!');
      }
    };

    fetchNews();
  }, []);

  return (
    <ScrollView>
        <View style={tw`pt-10 pb-6 `}>
            <Text style={tw`self-center text-black text-2xl shadow-xl`}>Discover Your Perfect Match!</Text>
        </View>
      <View style={tw` overflow-visible flex-row flex-wrap`}>
        {products.map((product, index) => (
          <View
            key={index}
            style={tw`bg-white w-48% mb-3 mx-1 rounded-3 shadow-md`}>
            <View>
              <View style={tw`self-center pt-3 pb-1`}>
                <View style={tw``}>
                <Image
                        width={140}
                        height={140}
                        source={{uri: product.image}}
                        alt="{product.name}"
                        onError={error =>
                          console.error('Image loading error:', error)
                        }
                      />
                </View>
              </View>
              <View style={tw`p-3`}>
                <View style={tw``}>
                  <Text style={tw`text-xs text-black`}>{product.company}</Text>
                </View>
                <View style={tw``}>
                  <Text style={tw`text-base text-black py-1`}>{product.brand}</Text>
                </View>
                <View style={tw`flex flex-row py-2`}>
                  <View style={tw`flex-1`}>
                    <Text style={tw` text-xs text-stone-600`}>
                      {product.size}
                    </Text>
                  </View>
                  <View style={tw`flex-1`}>
                    <Text style={tw` text-xs text-stone-600`}>
                      {product.price}
                    </Text>
                  </View>
                </View>
                <View style={tw`m-1`}>
                  <View key={index}>
                    <TouchableOpacity>
                      <FontAwesome
                        name="cart-plus"
                        color="#000000"
                        size={30}
                        style={tw`self-end mr-3`}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default MoodResultScreen;

//why this is not working

{
  /* <View>
                <Image
                  width={360}
                  height={200}
                  source={{uri: product.image}}
                  alt="hi"
                  onError={error =>
                    console.error('Image loading error:', error)
                  }
                />
              </View> */
}
{
  /* <View style={tw`p-3`}>
                <View key={index}>
                  {activeIndex === index && <Text>{product.description}</Text>}
                  <TouchableOpacity
                    onPress={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    style={tw`bg-white border rounded`}>
                    <Text style={tw`text-black`}>
                      {activeIndex === index ? 'Hide Text' : 'Show Text'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View> */
}

// <View>
//   <Text>{value}</Text>

//   <View>
//

{
  /* <FlatList */
}
//   data={myData}
//   renderItem={({item}) => (
//     <View style={tw`py-2`}>
//       <View style={tw`bg-blue-100 p-2 shadow-2xl`}>
//         <View style={tw`p-3`}>
//           <Text style={tw`text-base self-center font-bold`}>
//             {item.name}
//           </Text>
//         </View>
//         <View style={tw`p-3`}>
//           <Image
//             style={tw`self-center w-80 h-80`}
//             source={item.source}
//           />
//         </View>
//         <View style={tw`p-3`}>
//           <Text style={tw`text-base self-center font-bold`}>
//             {item.name}
//           </Text>
//         </View>
//         <View style={tw`p-3`}>
//           <Text style={tw`text-base self-center font-bold`}>
//             {item.name}
//           </Text>
//         </View>
//         <View>
//           <Text style={tw`text-justify`}>{item.description}</Text>
//         </View>
//         <View style={tw`flex-row  py-4 `}>
//           <View style={tw`basis-1/2 justify-center`}>
//             <Text style={tw`text-base font-bold`}>{item.price}</Text>
//           </View>
//           <View style={tw`basis-1/2 justify-center`}>
//             <TouchableOpacity
//               style={tw`self-end p-3 bg-green-500 rounded-xl`}>
//               <Text
//                 style={tw`text-white justify-center self-center font-bold`}>
//                 Buy Now
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   )}
// />
//   </View>
// </View>
