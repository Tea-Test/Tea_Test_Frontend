// import React, {useState} from 'react';
// import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
// import tw from 'twrnc';

// const myData = [
//   {
//     id: 1,
//     name: 'Item 1',
//     company:  "Ahmad Tea",
//     brand:  "Ahmad Tea Ceylon Earl Grey",
//     description: 'Description of Item 1',
//     source: require('../assets/green-tea.png'),
//     price: 'Rs. 300.00',
//   },
//   {
//     id: 2,
//     name: 'Item 2',
//     company:  "Ahmad Tea",
//     brand:  "Ahmad Tea Ceylon Earl Grey",
//     description: 'Description of Item 2',
//     source: require('../assets/TeaTestLogo.png'),
//     price: 'Rs. 300.00',
//   },
//   {
//     id: 3,
//     name: 'Item 2',
//     company:  "Ahmad Tea",
//     brand:  "Ahmad Tea Ceylon Earl Grey",
//     description: 'Description of Item 2',
//     source: require('../assets/TeaTestLogo.png'),
//     price: 'Rs. 300.00',
//   },
// ];

// const MoodResultScreen = () => {
//   return (
//     <View style={tw`flex`}>
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
//                 <Image style={tw`self-center w-80 h-80`} source={item.source} />
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
//   );
// };

// export default MoodResultScreen;


import React from 'react';
import { FlatList, View, Text, ActivityIndicator } from 'react-native';

const MoodResultScreen = ({route}:any) => {
  
 const {value} = route.params;


  return (
    <View>
      {/* {results ? (
        <FlatList
          data={results}
          renderItem={({ item }) => (
            <Text key={item.id}>{item.name}</Text> // Assuming each result has an id and a name property
          )}
        />
      ) : (
        <ActivityIndicator size="large" /> // Show a loading indicator while fetching results
      )} */}
      <Text>{value}</Text>
    </View>
  );
};

export default MoodResultScreen
