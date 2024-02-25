import React, {useEffect, useState} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
import FirstScreen from './screens/First/FirstScreen';
import GradeResultScreen from './screens/Grades/GradeResultScreen';
import GradeScanScreen from './screens/Grades/GradeScanScreen';

// //GetStarteScreen
// const StartStack = createNativeStackNavigator();

// const StartNavigator = () => {
//     return (
//       <StartStack.Navigator screenOptions={{headerShown: false}}>
//         <StartStack.Screen name="" component={FirstScreen} />
//         <StartStack.Screen name="LoginHome" component={LoginScreen} />
//       </StartStack.Navigator>
//     );
//   };

// Menu Navigator
const MenuStack = createNativeStackNavigator();

const MenuNavigator = () => {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen name="Home" component={HomeScreen} />
      <MenuStack.Screen name="Tea News" component={EducationScreen} />
    </MenuStack.Navigator>
  );
};

// Mood Navigator
const MoodStack = createNativeStackNavigator();

const MoodNavigator = () => {
  return (
    <MoodStack.Navigator>
      <MoodStack.Screen name="Mood Select" component={MoodSelectScreen} />
      <MoodStack.Screen name="Mood Result" component={MoodResultScreen} />
    </MoodStack.Navigator>
  );
};

// Mood Navigator
const GradeStack = createNativeStackNavigator();

const GradeNavigator = () => {
  return (
    <GradeStack.Navigator>
      <GradeStack.Screen name="Tea Scan" component={GradeScanScreen} />
      <GradeStack.Screen name="Grade Result" component={GradeResultScreen} />
    </GradeStack.Navigator>
  );
};

// Profile Navigator
const ProfileStack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator  screenOptions={{headerShown: true}}>
      <ProfileStack.Screen name="Profile Settings" component={ProfileScreen} />
      <ProfileStack.Screen name="Home" component={HomeScreen} />

    </ProfileStack.Navigator>
  );
};

// Main Tabs Navigator
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen
        name="Home"
        component={MenuNavigator}
        options={{
          tabBarIcon: () => (<Ionicons name="home" size={30} />),
          
        }}
      />
      <Tab.Screen
        name="Scan"
        component={GradeNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="camera" size={30} color="#8f8d8d" />
          ),
        }}
      />
      <Tab.Screen
        name="Mood"
        component={MoodNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="happy" size={30} color="#8f8d8d" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="person" size={30} color="#8f8d8d" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Auth Navigator
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Home" component={MainTabs} />
    </AuthStack.Navigator>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <AuthNavigator onLoginSuccess={handleLoginSuccess} />
      ) : (
        <MainTabs />
      )}
      {/* <MainTabs /> */}
    </NavigationContainer>
  );
}

export default App;
