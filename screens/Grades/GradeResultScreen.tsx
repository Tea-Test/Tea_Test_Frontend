import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const GradeResultScreen = ({route}: any) => {
    const {uploadedImageUrl} = route.params;
  console.log({uploadedImageUrl});
  console.log('Variable is: ' + uploadedImageUrl);

    const [grade, setGrade] = useState([]);

    const [details, setDetails] = useState([]);

    // useEffect(() => {
    //     const fetchGrade = async () => {
    //       try {
    //         const response = await axios.post('http://192.168.8.100:8000/predict/',
    //         '',
    //         {
    //           params: {
    //             'url': {uploadedImageUrl}
            
    //           },
    //           headers: {
    //             'accept': 'application/json',
    //             'content-type': 'application/x-www-form-urlencoded'
    //           }
    //         }

    //         );
    //         setGrade(response.data);
    //         console.log('Grade was successfully retrieved !!!');
    //       } catch (error) {
    //         console.error(error);
    //         Alert.alert('Message', 'Check your connection!');
    //       }
    //     };

    //     fetchGrade();
       
    //   }, []);

    
    // useEffect(() => {
    //     const fetchDetails = async () => {
    //       try {
    //         const response = await axios.get('http://192.168.8.100:5009/grades/${grade}');
    //         setDetails(response.data);
    //         console.log('Grade was successfully retrieved !!!');
    //       } catch (error) {
    //         console.error(error);
    //         Alert.alert('Message', 'Check your connection!');
    //       }
    //     };

    //     fetchDetails();
       
    //   }, []);

    

  return (
    <ScrollView>

        <View>
            <Text>{uploadedImageUrl}</Text>

        </View>


        {details.map((details, index)=>(
            <View key={index}>

            </View>
        ))}

    </ScrollView>
  )
}

export default GradeResultScreen