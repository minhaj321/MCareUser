import React,{useEffect, useState} from 'react'
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {View,Text,Pressable,ImageBackground,Animated,ScrollView} from 'react-native';
import { Image, ZStack } from 'native-base';
import RequestHeader from '../../Components/RequestHeader/RequestHeader';
import ProfileBg from './../../assets/Rectangle4267.png'
import ReviewsBg from './../../assets/Rectangle4268.png'
import AvatarBg from './../../assets/editprofileBG.png';
import Avatar from './../../assets/Group33966.png';

const ProfileHeader = () => {

    
    var opac1 = new Animated.Value(1)
    var opac2 = new Animated.Value(0)

    var anime1 =new Animated.parallel([
        Animated.timing(opac1,{
            toValue:0,
            duration:500,
            useNativeDriver:true,
        }),
        Animated.timing(opac2,{
            toValue:1,
            duration:500,
            useNativeDriver:true,
        })
        
    ])
    
    var anime2 = new Animated.parallel([
        Animated.timing(opac1,{
            toValue:1,
            duration:500,
            useNativeDriver:true,
        }),
        Animated.timing(opac2,{
            toValue:0,
            duration:500,
            useNativeDriver:true,
        })
        
    ])


    return (
      
<ZStack > 

<Animated.View style={{opacity:opac1}}>
    <Image 
    height={hp(45)}
    source={ProfileBg}
    alt='Bg'
    />
</Animated.View>

<Animated.View style={{opacity:opac2}}>
    <Image 
    height={hp(45)}
    // style={{marginTop:-20}}
    source={ReviewsBg}
    alt='Bg'
    />
    </Animated.View>


<View style={{marginTop:hp(1)}}>
    <RequestHeader title='PROFILE' cond={true} />
    <View style={{alignItems:'center'}}>

<ZStack style={{alignItems:'center',justifyContent:'center',marginTop:hp(9)}}>

    <Image
    source={AvatarBg}
    alt='bg'
    />
    <Image
    source={Avatar}
    alt='bg'
    />

</ZStack>

    <View style={{backgroundColor:'white',marginTop:hp(15),width:'45%',alignSelf:'center',borderRadius:30,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#f47400',paddingVertical:hp(1.2),paddingHorizontal:hp(3)}}>EDIT PROFILE</Text>
    </View>

    </View>
</View>

</ZStack>
  )
}

export default ProfileHeader