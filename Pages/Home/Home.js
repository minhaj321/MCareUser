import React from 'react'
import {View,Text,ImageBackground,Pressable,Animated} from 'react-native'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeImg from './../../assets/Group33890.svg';
import HomeBg from './../../assets/Maskgroup.png';
import HomeBg1 from './../../assets/BG.svg';

const Home = ({navigation}) => {

    var translationY = new Animated.Value(hp(40))
    var xScaling = new Animated.Value(1)
    var yScaling = new Animated.Value(1)
    var opac = new Animated.Value(0)

    var anime = Animated.sequence([
        Animated.timing(translationY,{
            toValue:hp(41),
            duration:500,
            useNativeDriver:true
        }),
        Animated.timing(translationY,{
            toValue:hp(-2),
            duration:1000,
            useNativeDriver:true
        }),
        Animated.timing(translationY,{
            toValue:hp(0),
            duration:500,
            useNativeDriver:true
        }),
    
    ]).start()

    var anime2 = Animated.timing(opac,{
        toValue:1,
        duration:2000,
        useNativeDriver:true
    }).start();

    var anime3 = Animated.parallel([
        Animated.timing(xScaling,{
            toValue:0.8,
            duration:500,
            useNativeDriver:true
        }),
        Animated.timing(yScaling,{
            toValue:0.8,
            duration:500,
            useNativeDriver:true
        }),
        Animated.timing(translationY,{
            toValue:hp(0.5),
            duration:500,
            useNativeDriver:true
        }),
    ])

    return (
        <View>
            <HomeBg1 width={'110%'} marginTop={hp(-10)} height={hp(45)} />
            <Animated.View style={{marginTop:hp(-21),transform:[{translateY:translationY},{scaleX:xScaling},{scaleY:yScaling}]}}>
        <HomeImg width={'85%'} style={{marginLeft:'7%'}} />
        </Animated.View>
            {/* <ImageBackground style={{width:'100%',height:hp(25),justifyContent:'flex-end'}} source={HomeBg} >
            </ImageBackground> */}


            <Animated.View style={{opacity:opac}}>
        <View style={{marginTop:hp(24)}}>
            <Text style={{fontFamily:'Montserrat',textAlign:'center',fontSize:wp(8),color:'#333333',fontWeight:'600'}}>Welcome to</Text>
            <Text style={{fontFamily:'Montserrat',textAlign:'center',fontSize:wp(8),color:'#F47400',fontWeight:'600'}}>Mcare</Text>
        </View>

        <View style={{backgroundColor:'#F47400',width:wp(55),alignSelf:'center',marginTop:hp(17),borderRadius:50}}>
        <Pressable onPress={()=>{
            setTimeout(()=>{
                anime3.reset()
                navigation.navigate('Login')
            },1000)
            anime3.start();
        }
    }>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>Let's get Started</Text>
        </Pressable>
        </View>
        </Animated.View>

        </View>
        )
}

export default Home