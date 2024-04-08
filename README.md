

import React, { useState, useEffect  } from 'react';
import { Button, View, StyleSheet  } from 'react-native';
import DropdownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list'


const MoodSelectScreen = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   useEffect(() => {
//     // Ensure dropdown is rendered correctly
//     setDropdownVisible(true);
//   }, []);

//   const options = [
//     { label: 'Sleepy', value: 'sl' }, // Use 'value' to specify the selected value
//     { label: 'Stress', value: 'st' },
//     { label: 'Less Energy', value: 'en' },
//   ];

  const handleOptionChange = (itemValue) => { // Receive the selected value
    setSelectedOption(itemValue);
  };

  const handleButtonPress = async () => {
    try {
      const response = await axios.get(`http://192.168.8.100:5009/product/${selectedOption}`);
      const results = response.data;

      const navigation = useNavigation(); // Move navigation hook inside the function
      navigation.navigate('MoodResultScreen', { results });
    } catch (error) {
      console.error(error);
      alert('Failed to fetch results. Please try again.');
    }
  };

const [selected, setSelected] = React.useState("");

const data = [
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]


  return (
    // <View  style={styles.container}>
    //   <DropdownPicker
    //     items={options}
    //     defaultValue={options[0]}
    //     visible={dropdownVisible} // Set a default value
    //     containerStyle={{ height: 50 }} // Adjust height for better visibility
    //     onChangeItem={handleOptionChange}
    //     style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc' }}
    //   />

    //   <Button title="Filter" onPress={handleButtonPress} />
    // </View>

        <View>
            <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data} 
                    save="value"
                    onChangeItem={handleOptionChange}
                />
            <Button title="Filter" onPress={handleButtonPress} />
        </View>

  );
};

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       // Ensure dropdown is positioned properly
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//   });

export default MoodSelectScreen;



