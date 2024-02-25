import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios';
import tw from 'twrnc';

const GradeScanScreen = (n:any) => {
    
    const [value, setValue] = useState(null);

    const MoodStack = n.navigation;

    function goToResult() {
      MoodStack.navigate('Grade Result', {value});
    }

  return (
    <View>
        <Text>GradeScanScreen</Text> 

        <View style={tw`py-3 bg-emerald-800  rounded-3 p-2`}>
          <TouchableOpacity onPress={goToResult}>
            <View>
              <Text  style={tw`text-white self-center font-bold text-lg`}>Result</Text>
            </View>
          </TouchableOpacity>
        </View>  
    </View>
  )
}

export default GradeScanScreen