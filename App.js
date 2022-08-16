
import React,{useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Provider} from 'react-redux';
import { NativeBaseProvider } from 'native-base';
import store from './Store/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Pages/Home/Home.js';
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import RequestForm from './Pages/RequestForm/RequestForm.js';
import RescueMe from './Pages/RescueMe/RescueMe.js';
import MCareMain from './Pages/MCareMain/MCareMain.js';
import TowOperator from './Pages/TowOperator/TowOperator.js';
import RequestArti from './Pages/RequestArti/RequestArti.js';
import SelectCate from './Pages/SelectCate/SelectCate.js';
import Profile from './Pages/Profile/Profile.js';
import Reviews from './Pages/Reviews/Reviews.js';
import Bidding from './Pages/Bidding/Bidding.js';
import BidderListPage from './Pages/BidderListPage/BidderListPage.js';
import CalLottie from './Pages/CalLottie/CalLottie.js';
import RescuedLottie from './Pages/RescuedLottie/RescuedLottie.js';
import OrderHistory from './Pages/OrderHistory/OrderHistory.js';
import Schedule from './Pages/Schedule/Schedule.js';
// import ProfileReviews from './Pages/ProfileReviews/ProfileReviews.js';
// import ViewProfile from './Pages/ViewProfile/ViewProfile.js';
import MainProfile from './Pages/MainProfile/MainProfile.js';
import EditProfile from './Pages/EditProfile/EditProfile.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { io } from "socket.io-client";
import {dev} from './Route/Route'
export var socket = io(dev,{
  path:'/custom',timeout: 20000,transports:['websocket']
});


const Stack = createNativeStackNavigator();

const App = () => {

//   <script async
//   src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBm-xt-zBBtvE_AreqKHODWIsNvkrsU1Qw&libraries=places&callback=initMap">
// </script>


socket.on('connect',()=>{    

  socket.on('connecteddd',(data)=>{

    if(data.message=='yahoooo'){
      console.log('done')
      // socket.emit('connected',socket.id)
    }

  })

  
})

  return (
    <View style={styles.container}>
      <NativeBaseProvider>
      <Provider store={store}>
        
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
      }}
      >
        
        
        <Stack.Screen name="/" component={RequestArti} />
        {/* <Stack.Screen name="/" component={Home} /> */}
        <Stack.Screen name="MCareMain" component={MCareMain} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="MainProfile" component={MainProfile} />
        <Stack.Screen name="RescuedLottie" component={RescuedLottie} />
        <Stack.Screen name="CalLottie" component={CalLottie} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ListPage" component={BidderListPage} />
        <Stack.Screen name="Bidding" component={Bidding} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="SpareParts" component={RequestForm} />
        <Stack.Screen name="SelectCate" component={SelectCate} />
        <Stack.Screen name="TowOperator" component={TowOperator} />
        <Stack.Screen name="RescueMe" component={RescueMe} />

        <Stack.Screen name="RequestArti" component={RequestArti} />
        

      </Stack.Navigator>
    </NavigationContainer>

      </Provider>
      </NativeBaseProvider>
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;


// orange  ==>  F47400
// blue    ==>  223A9c // 97a0c7
// placehoder ==> afafaf


// jofa TowOperator
// trasformation clinic

// AIzaSyBO-b2c7ujRl8fW8jWBtJw3pYQWGySv3Pk