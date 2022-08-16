import React, { useState } from 'react'
import {View,Image,Animated,Text,ImageBackground,TextInput,Pressable, Alert} from 'react-native'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'
import HomeImg from './../../assets/Group33890.svg';
import InputBgImg from './../../assets/Rectangle4189.png';
import MsgIcon from './../../assets/Message.svg';
import Lock from './../../assets/Lock.svg';
import Eye from './../../assets/Group.svg'
import GoogleIcon from './../../assets/Google.svg';
import AppleID from './../../assets/AppleID.svg';
import {Radio,Switch} from 'native-base';
import HomeBg from './../../assets/Maskgroup.png';
import HomeBg1 from './../../assets/BG.svg';
import {BoxShadow} from 'react-native-shadow'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import { dev } from '../../Route/Route';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
    GoogleSignin.configure({
        webClientId: '809972830053-f9off9gcr2hesop83pjmu0tpbkdvqi15.apps.googleusercontent.com',
      });
    var [email,setEmail] = useState('')
    var [password,setPassword] = useState('')
    var [pass,showPass] = useState(true)
    var translationYEmail = new Animated.Value(hp(0))
    var translationYPass = new Animated.Value(hp(0))
    var translationY = new Animated.Value(hp(0))
    var xScaling = new Animated.Value(1)
    var yScaling = new Animated.Value(1)
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [err,setErr] = useState('')
    var toHome = Animated.sequence([

        Animated.parallel([
            Animated.timing(xScaling,{
                toValue:1.1,
                duration:200,
                useNativeDriver:true
            }),
            Animated.timing(yScaling,{
                toValue:1.1,
                duration:200,
                useNativeDriver:true
            }),
        ]),
        Animated.parallel([
            Animated.timing(xScaling,{
                toValue:0.9,
                duration:400,
                useNativeDriver:true
            }),
            Animated.timing(yScaling,{
                toValue:0.9,
                duration:400,
                useNativeDriver:true
            }),
            Animated.timing(translationY,{
                toValue:hp(-8),
                duration:400,
                useNativeDriver:true
            }),
        ])

    ]) 


    var toRegister = Animated.parallel([
        Animated.timing(translationYEmail,{
            toValue:hp(12),
            duration:500,
            useNativeDriver:true
        }),
        Animated.timing(translationYPass,{
            toValue:hp(12),
            duration:500,
            useNativeDriver:true
        }),
    ])

    const handleLoginPress =()=>{
        try{
            console.log('gog ')
        if(email=='' || password==''){
            setErr('Please fill form completely')
            Alert.alert('Please fill form completely')
        }else{
            auth()
            .signInWithEmailAndPassword(email,password)
            .then(async(res) => {
                console.log(res)
                var {data} = await axios.put(dev+'user/login',{
                    firebaseUID:res.user.uid
                })
                console.log('dada==>',data)
                if(data.message=='Success'){
                    console.log('data=>',data)
                    toHome.start();
              setTimeout(()=>{
                navigation.navigate('MCareMain')
               toHome.reset();
               },500)
                }else{
            Alert.alert('There is an error to logging you in')
                }
            })
            .catch(error => {          
              if (error.code === 'auth/invalid-email') {
                setErr('That email address is invalid!');
            Alert.alert('That email address is invalid!')

              }
              else if(error.code=='auth/wrong-password'){
                Alert.alert('Your password is incorrect')
              }
              else{
                  console.log(error);
                  Alert.alert('There is an error to logging you in ')
              }
            });            //  code end
    
    
        }
    }catch(err){
        console.log('asd=>',err.message)
    }
        //  code start
    }

async function handleGoogleLogin(){
         // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  var user =auth().signInWithCredential(googleCredential);
  console.log('user=',user)
  user.then(async(res)=>{
    var dataObj={
        email:res.user.email,
        firebaseUID:res.user.uid,
        fName:res.user.displayName,
        profilePic:res.user.photoURL,
    }
        var {data} = await axios.post(dev+'user/userGoogle',dataObj)
        if(data.message=='Success'){
            console.log(data.doc)
                toHome.start();
              setTimeout(()=>{
                navigation.navigate('MCareMain')
               toHome.reset();
               },500)
                }else{
            Alert.alert('There is an error to logging you in')
                }

            // console.log('data=.',data)
  }).catch(error => {          
    if (error.code === 'auth/invalid-email') {
      setErr('That email address is invalid!');
  Alert.alert('That email address is invalid!')

    }
    else if(error.code=='auth/wrong-password'){
      Alert.alert('Your password is incorrect')
    }
    else{
        console.log(error);
        Alert.alert('There is an error to logging you in ')
    }
  });
    }

    return (

        <View style={{backgroundColor:'white',height:'100%'}}>

<HomeBg1 width={'110%'} marginTop={hp(-11)} height={hp(35)} />
            <Animated.View style={{marginTop:hp(-17),transform:[{translateY:translationY},{scaleX:xScaling},{scaleY:yScaling}]}}>
        <HomeImg width={'70%'} style={{marginLeft:'15%'}} />
        </Animated.View>

            {/* <ImageBackground style={{width:'100%',height:hp(25),alignItems:'center',justifyContent:'flex-end'}} source={HomeBg} >

            <Animated.View style={{width:'70%',height:'50%',transform:[{translateY:translationY},{scaleX:xScaling},{scaleY:yScaling}]}}>
            <HomeImg width={'100%'} height={'100%'} />
            </Animated.View>

            </ImageBackground> */}

            <Text style={{fontFamily:'Montserrat',textAlign:'center',fontWeight:'700',color:'#333333',fontSize:wp(5),marginTop:hp(3)}}>LOGIN</Text>

            <View style={{width:'100%'}}>

            <Animated.View style={{transform:[{translateY:translationYEmail}]}}>
            <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused1 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused1 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
            <View style={{alignItems:'center',width:'10%'}}>
                    <MsgIcon style={{marginLeft:wp(8)}} />
                </View>
                <View style={{width:'75%'}}>
                <TextInput style={{fontFamily:'Montserrat',width:'80%',alignSelf:'center'}} 
                    placeholder='Email'
                    value={email}
                    onChangeText={txt=>setEmail(txt)}
                    />
                </View>
                <View style={{width:'10%'}}>
                </View>
            </View>

            <BoxShadow setting={{
    width:wp(87),
    height:10,
    style:{
        marginHorizontal:wp(6.5)
        ,zIndex:-1,
        
    },
    
    color:focused1 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>
            
            </Animated.View>

            <Animated.View style={{transform:[{translateY:translationYPass}]}}>

            <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused2 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
            <View style={{alignItems:'center',width:'10%'}}>
                    <Lock style={{marginLeft:wp(8)}} />
                </View>
                <View  style={{width:'75%'}}>
                    <TextInput style={{fontFamily:'Montserrat',width:'80%',alignSelf:'center'}} 
                    placeholder='Password'
                    secureTextEntry={pass}
                    value={password}
                    onChangeText={txt=>setPassword(txt)}

/>
                </View>
                <View style={{alignItems:'center',width:'10%'}}>
                    <Eye style={{marginLeft:wp(-5)}} onPress={()=>showPass(!pass)} />
                </View>
            </View>
            <BoxShadow setting={{
    width:wp(87),
    height:10,
    style:{
        marginHorizontal:wp(6.5)
        ,zIndex:-1,
        
    },
    
    color:focused2 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


            </Animated.View>

            </View>

            <View style={{flexDirection:'row',marginTop:hp(2),width:wp(94),marginHorizontal:wp(3),justifyContent:'space-between'}}>
        
        <View style={{flexDirection:'row',alignItems:'center'}}>
            {/* <Radio.Group>
            <Radio size={'md'} style={{margnLeft:-10}} />
            </Radio.Group> */}
        <Switch style={{color:'#97a0c7'}} />
            <Text style={{fontFamily:'Montserrat'}}>Remember me</Text>
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontFamily:'Montserrat'}}>Forget Password?</Text>
        </View>
            
            </View>
        
            <View style={{backgroundColor:'#F47400',width:wp(55),alignSelf:'center',marginTop:hp(4),borderRadius:50}}>
            <Pressable onPress={handleLoginPress}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>LOGIN</Text>
        </Pressable>
        </View>

        <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),textAlign:'center',marginTop:hp(1.5),color:'#97a0c7',fontWeight:'700'}}>OR</Text>
        <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),textAlign:'center',marginTop:hp(1.5),color:'#333333',fontWeight:'700'}}>LOG IN WITH</Text>
        
        <View style={{width:'100%',flexDirection:'row',justifyContent:'center'}}>
        <GoogleIcon
        onPress={handleGoogleLogin}
        />
        <AppleID/>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>
            <Text style={{fontFamily:'Montserrat',color:'#333333'}}>Don't have an account?</Text>
            <Pressable onPress={()=>{
                toRegister.start();
                setTimeout(()=>{
                    navigation.navigate('Register')
                    toRegister.reset();
                },400)
            }
            }>
            <Text style={{fontFamily:'Montserrat',color:'#97a0c7',fontWeight:'600'}}> Sign up</Text>
            </Pressable>
        </View>

        </View>

    )
}

export default Login