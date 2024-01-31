// import React, {useState} from 'react';
// import {Image, Text, TouchableOpacity, View, FlatList, ScrollView} from 'react-native';
// import tw from 'twrnc';

// const myData = [
//   {
//     id: 1,
//     name: 'Item 1',
//     company:  "Ahmad Tea",
//     brand:  "Ahmad Tea Ceylon Earl Grey",
//     description: 'Description of Item 1',
//     // source: require('../../assets/green-tea.png'),
//     price: 'Rs. 300.00',
//   },
//   {
//     id: 2,
//     name: 'Item 2',
//     company:  "Ahmad Tea",
//     brand:  "Ahmad Tea Ceylon Earl Grey",
//     description: 'Description of Item 2',
//     // source: require('../../assets/TeaTestLogo.png'),
//     price: 'Rs. 300.00',
//   },
//   {
//     id: 3,
//     name: 'Item 2',
//     company:  "Ahmad Tea",
//     brand:  "Ahmad Tea Ceylon Earl Grey",
//     description: 'Description of Item 2',
//     // source: require('../../assets/TeaTestLogo.png'),
//     price: 'Rs. 300.00',
//   },
// ];

// const LessEnergetic = () => {
//   return (
//     <ScrollView>
// <View style={tw`flex`}>
//       <View style={tw`bg-blue-700 p-4 `}>
//         <Text style={tw`text-xl self-center font-bold text-white`}>
//           MoodResultScreen
//         </Text>
//       </View>

//       <FlatList
//         data={myData}
//         renderItem={({item}) => (
//           <View style={tw`py-2`}>
//             <View style={tw`bg-blue-100 p-2 shadow-2xl`}>
//               <View style={tw`p-3`}>
//                 <Text style={tw`text-base self-center font-bold`}>
//                   {item.name}
//                 </Text>
//               </View>
//               <View style={tw`p-3`}>
//                 {/* <Image style={tw`self-center w-80 h-80`} source={item.source} /> */}
//               </View>
//               <View style={tw`p-3`}>
//                 <Text style={tw`text-base self-center font-bold`}>
//                   {item.name}
//                 </Text>
//               </View>
//               <View style={tw`p-3`}>
//                 <Text style={tw`text-base self-center font-bold`}>
//                   {item.name}
//                 </Text>
//               </View>
//               <View>
//                 <Text style={tw`text-justify`}>{item.description}</Text>
//               </View>
//               <View style={tw`flex-row  py-4 `}>
//                 <View style={tw`basis-1/2 justify-center`}>
//                   <Text style={tw`text-base font-bold`}>{item.price}</Text>
//                 </View>
//                 <View style={tw`basis-1/2 justify-center`}>
//                   <TouchableOpacity
//                     style={tw`self-end p-3 bg-green-500 rounded-xl`}>
//                     <Text
//                       style={tw`text-white justify-center self-center font-bold`}>
//                       Buy Now
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//     </ScrollView>
    
//   );
// };

// export default LessEnergetic;

import React from 'react'
import { View, Text } from 'react-native'

const LessEnergetic = () => {
  return (
    <View>
        <Text>LessEnergetic</Text>
    </View>
  )
}

export default LessEnergetic
