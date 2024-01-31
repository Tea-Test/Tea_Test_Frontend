// import React, { useState, useEffect  } from 'react';
// import { Button, View, StyleSheet  } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { SelectList } from 'react-native-dropdown-select-list'
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Text } from 'react-native-paper';


// const MoodSelectScreen = (sl:any) => {

//     const stack = sl.navigation;

//     function goToResult (){
//         stack.navigate("MoodResult");
//     }

//     // const data = [
//     //     { value: 'Sleepy', category: 'sl' },
//     //     { value: 'Stress', category: 'st' },
//     //     { value: 'Less Energy', category: 'en' },
//     // ]

//     // const [selectedOption, setSelectedOption] = React.useState("");

//     // const handleOptionChange = (category) => {
//     //     setSelectedOption(category);
//     //   };

//     // const handleButtonPress = async () => {
//     //     try {
//     //         const response = await axios.get(`http://192.168.8.177:5001/product/${selectedOption}`);
//     //         const results = response.data;

//     //         const navigation = useNavigation(); // Move navigation hook inside the function
//     //         navigation.navigate('MoodResultScreen', { results });
//     //     } 
//     //     catch (error) {
//     //         console.error(error);
//     //         alert('Failed to fetch results. Please try again.');
//     //     }
//     // };

//   return (
//     <View>
//     {/* <SelectList
//       setSelected={setSelectedOption} // Use setSelectedOption directly
//     //   data={data}
//     //   save="category" // Save the category value
      
//     /> */}
    
//     <View>
//               <TouchableOpacity onPress={goToResult}>
//                 <Text>Result</Text>
//               </TouchableOpacity>
//             </View>
//   </View>
//   );
// };

// export default MoodSelectScreen;


import React from 'react'
import { Button, View, StyleSheet, Text, TouchableOpacity   } from 'react-native';
import tw from 'twrnc';


const MoodSelectScreen = (sl:any) => {

        const MoodStack = sl.navigation;

    function goToResult (){
        MoodStack.navigate("MoodResult");
    } 
  return (
    <View>
        
        <View>
            <Text>MoodSelectScreen</Text>  
            </View>

            <Text>MoodSelectScreen</Text>
    <View style={tw`self-center`}>
              <TouchableOpacity onPress={goToResult}>
              <View style={tw`bg-green-400 p-6`}>
               <Text>Result</Text>
               </View>
             </TouchableOpacity>
           </View>

    </View>
  )
}

export default MoodSelectScreen



