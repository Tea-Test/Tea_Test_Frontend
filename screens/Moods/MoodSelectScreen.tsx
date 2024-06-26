import React, {useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import tw from 'twrnc';
import DropDownPicker from 'react-native-dropdown-picker';
import {Screen} from 'react-native-screens';
// import bg from '../../assets/mood-select-bg.png'
import LinearGradient from 'react-native-linear-gradient';

const MoodSelectScreen = (md: any) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Stressed', value: 'st'},
    {label: 'Sleepy', value: 'sl'},
    {label: 'Energy', value: 'en'},

  ]);
  //
  const MoodStack = md.navigation;

  function goToResult() {
    MoodStack.navigate('Mood Result', {value});
  }
  return (

<View
      style={tw`flex-1 px-5`}>
        
      <View style={tw`justify-center pt-10 pb-7`}>
        <Text style={tw`text-black self-center font-bold text-3xl`}>
          Select Your Mood
        </Text>
      </View>
      

      <View style={tw`  bg-white rounded-3 shadow-2xl opacity-100`}>

      <View style={tw`py-6`}>
        <Text style={tw`text-black self-center text-lg text-justify px-4`}>
        Choose Your Mood, Brew Your Bliss: Select sleepy, stressed, or energized, and discover your perfect tea match. Elevate your tea experience with personalized selections tailored to your emotional state. It's the ultimate way to find serenity or get that much-needed raise, one sip at a time.
        </Text>
      </View>
      
      </View>

      <View
        style={tw` px-3 pt-18 flex flex-row`}>
        <View style={tw`flex-3 mr-3 border-0`}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={tw`bg-white opacity-70 border-0`}
          />
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



export default MoodSelectScreen;
