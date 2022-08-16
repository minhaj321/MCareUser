import React from 'react'
import {View,Text} from 'react-native';
import LottieView from 'lottie-react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CalLottie = ({navigation}) => {

setTimeout(()=>{

    navigation.navigate('MCareMain')

},3000)

    return (
    <View>
        <View style={{height: wp(100),marginLeft:wp(0),width:wp(100),marginTop:hp(10)}}>
<LottieView  
source={require('./../../JsonFiles/schedule request.json') }
autoPlay={true}
loop={true}
style={{height:'100%',width:'100%'}}
/>        
</View>
<View style={{width:wp(80),marginHorizontal:wp(10)}}>
<Text style={{textAlign:'center',color:'#333333',fontSize:wp(4.5),fontWeight:'700'}}>Your schedule service request has been sent</Text>
</View>
    </View>
    )
}

export default CalLottie