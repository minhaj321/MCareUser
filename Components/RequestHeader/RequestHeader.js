import React from 'react'
import {View,Text} from 'react-native'
import BackIcon from './../../assets/backbutton.svg'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'



const RequestHeader = ({title,cond,profile}) => {

var navigation = useNavigation();

  return (
    <View style={{flexDirection:'row',paddingVertical:hp(2)}}>
        <View style={{width:wp(15),alignItems:'baseline',justifyContent:'center'}}>
        <BackIcon  style={{elevation:cond ? 0 : 10,borderRadius:22,marginLeft:wp(2)}} onPress={()=>{
          if(profile){
            navigation.navigate("MainProfile")
            console.log('profile')
            
          }else{
            navigation.navigate("MCareMain")
            console.log('main')
          }
          
        }} />
        </View>

        <View style={{width:wp(85),alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontFamily:'Montserrat',fontWeight:'600',marginLeft:wp(-15),textAlign:'center',color:cond ? '#fff' :'#333333',fontSize:wp(4.5)}}>{title}</Text>
        </View>
    </View>
    )
}

export default RequestHeader