import React, {useEffect, useState} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Import screens
import LoginScreen from './screens/Login&Register/LoginScreen';
import RegisterScreen from './screens/Login&Register/RegisterScreen';
import HomeScreen from './screens/Home/HomeScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import EducationScreen from './screens/Education/EducationScreen';
import MoodResultScreen from './screens/Moods/MoodResultScreen';
import MoodSelectScreen from './screens/Moods/MoodSelectScreen';
import {Alert} from 'react-native';


// Menu Navigator
const MenuStack = createNativeStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="MenuHome" component={HomeScreen} />
      <MenuStack.Screen name="MenuEducation" component={EducationScreen} />
      <MenuStack.Screen name="MenuMoodSelect" component={MoodSelectScreen} />
    </MenuStack.Navigator>
  );
};

// Mood Navigator
const MoodStack = createNativeStackNavigator();

const MoodNavigator = () => {
  return (
    <MoodStack.Navigator>
      <MoodStack.Screen name="MoodSelect" component={MoodSelectScreen} />
      <MoodStack.Screen name="MoodResult" component={MoodResultScreen} />
    </MoodStack.Navigator>
  );
};


// Main Tabs Navigator
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="HomeTab" component={MenuNavigator}/>
      <Tab.Screen name="MoodSelectTab" component={MoodNavigator} />

      <Tab.Screen name="ProfileTab" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

// Auth Navigator
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LoginPage" component={LoginScreen} />
      <AuthStack.Screen name="RegisterPage" component={RegisterScreen} />
      <AuthStack.Screen name="HomePage" component={MainTabs} />
    </AuthStack.Navigator>
  );
};





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const [isMoodSelected, setIsMoodSelected] = useState('');

  const handleGetResult = () => {
    setIsMoodSelected(true);
  };

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthNavigator onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainTabs />
      )}
    </NavigationContainer>
  );
}

export default App;
