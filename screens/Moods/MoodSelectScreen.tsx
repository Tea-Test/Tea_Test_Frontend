import React, {useState} from 'react';
import {Button, View, StyleSheet, Text, TouchableOpacity, ImageBackground} from 'react-native';
import tw from 'twrnc';
import DropDownPicker from 'react-native-dropdown-picker';
import { Screen } from 'react-native-screens';
// import bg from '../../assets/mood-select-bg.png'

const MoodSelectScreen = (sl: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
//   
  const MoodStack = sl.navigation;

  function goToResult() {
    MoodStack.navigate('MoodResult', {value});
  }
  return (
    <ImageBackground source={require('../../assets/mood-select-bg.png')}  style={tw`flex-1`}>

        

      <View>
        <Text>MoodSelectScreen</Text>
      </View>
      <View   style={tw`bg-green-100 p-6 `}>
        <Text  style={tw`bg-pick-100 p-3`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor
          asperiores eos, aliquid eveniet dolorum magnam, sunt atque ipsa
          veritatis earum doloremque corrupti cumque voluptatum odio quaerat
          quis saepe. Dicta!
        </Text>
      </View>
      <View>
        <Text></Text>
      </View>
      
      <View>
        <Text></Text>
      </View>
      <View>
        <Text>{'\u2022'} Item 1</Text>
        <Text>{'\u2022'} Item 2</Text>
        <Text>{'\u2022'} Item 3</Text>
      </View>

      <View style={tw`bg-yellow-100 px-3 pt-10 flex flex-row`}>
        <View style={tw`bg-blue-100 flex-3 mr-3`}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={tw`bg-red-600`}
          />
        </View>

        <View style={tw`flex-1`}>
          <TouchableOpacity onPress={goToResult}>
            <View style={tw`bg-green-400 p-6`}>
              <Text>Result</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
    </ImageBackground>
  );
};

export default MoodSelectScreen;
