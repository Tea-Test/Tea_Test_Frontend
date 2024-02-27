// import React, { useState } from 'react'
// import { Text, TouchableOpacity, View } from 'react-native'
// import axios from 'axios';
// import tw from 'twrnc';

// const GradeScanScreen = (n:any) => {
    
//     const [value, setValue] = useState(null);

//     const MoodStack = n.navigation;

//     function goToResult() {
//       MoodStack.navigate('Grade Result', {value});
//     }

//   return (
//     <View>
//         <Text>GradeScanScreen</Text> 

//         <View style={tw`py-3 bg-emerald-800  rounded-3 p-2`}>
//           <TouchableOpacity onPress={goToResult}>
//             <View>
//               <Text  style={tw`text-white self-center font-bold text-lg`}>Result</Text>
//             </View>
//           </TouchableOpacity>
//         </View>  
//     </View>
//   )
// }



import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import tw from 'twrnc';
import DropDownPicker from 'react-native-dropdown-picker';
import {Screen} from 'react-native-screens';
// import bg from '../../assets/mood-select-bg.png'
import LinearGradient from 'react-native-linear-gradient';
//import { TextInput } from 'react-native-gesture-handler';

const GradeScanScreen = (md: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  //
  const GradeNavigator = md.navigation;

  function goToResult() {
    GradeNavigator.navigate('Grade Result');
  }



  return (

<View
      style={tw`flex-1`}>
        
      <View style={tw`justify-center pt-10 pb-7`}>
        <Text style={tw`text-black self-center text-3xl`}>
          Upload the Image here
        </Text>
      </View>
      

      <View style={tw` mx-3 px-4 bg-white rounded-3 shadow-2xl opacity-100`}>

      <View style={tw`py-4`}>
        <Text style={tw`text-black self-center text-lg text-justify  font-mono`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor
          asperiores eos. Dicta!
        </Text>
      </View>
      <View style={tw`py-4`}>
        <Text style={tw`text-black text-lg text-justify pb-2`}>
          {'\u2751'}  Lorem ipsum.
        </Text>
        <Text style={tw`text-black text-lg text-justify pb-2 `}>
          {'\u2751'}  Lorem ipsum.
        </Text>
        <Text style={tw`text-black  text-lg text-justify pb-2 `}>
          {'\u2751'}  Lorem ipsum.
        </Text>
      </View>
      </View>

      <View
        style={tw` px-3 pt-18 flex flex-row`}>
        <View style={tw`flex-2`}>
          <TextInput placeholder='upload image'  style={tw`border rounded-3 m-3 `} />
        </View>
<View style={tw ` flex-1 justify-center`}>
<View style={tw`py-3 bg-yellow-500  rounded-3 p-2`}>
          <TouchableOpacity onPress={goToResult}>
            <View>
              <Text  style={tw`text-white self-center font-bold text-lg`}>View</Text>
            </View>
          </TouchableOpacity>
        </View>
</View>
        
      </View>
    </View>

    
  );
};



export default GradeScanScreen