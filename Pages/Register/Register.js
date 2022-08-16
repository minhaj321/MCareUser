import React,{useState} from 'react'
import {View,Animated,Text,ImageBackground,TextInput,Pressable, Alert} from 'react-native'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'
import HomeImg from './../../assets/Group33890.svg';
import InputBgImg from './../../assets/Rectangle4189.png';
import MsgIcon from './../../assets/Message.svg';
import Lock from './../../assets/Lock.svg';
import Eye from './../../assets/Group.svg'
import Usericon from './../../assets/usericon.svg'
import HomeBg from './../../assets/Maskgroup.png';
import HomeBg1 from './../../assets/BG.svg';
import {BoxShadow} from 'react-native-shadow'
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import { dev } from '../../Route/Route';
const Register = ({navigation}) => {

    var translationYEmail = new Animated.Value(hp(0))
    var translationYPass = new Animated.Value(hp(0))
    var translationY = new Animated.Value(hp(0))
    var xScaling = new Animated.Value(1)
    var yScaling = new Animated.Value(1)
    var [pass,showPass] = useState(true)
    var [confpass,showConfPass] = useState(true)
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);
    const [focused5, setFocused5] = useState(false);
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

    var toLogin = Animated.parallel([
        Animated.timing(translationYEmail,{
            toValue:hp(-12),
            duration:500,
            useNativeDriver:true
        }),
        Animated.timing(translationYPass,{
            toValue:hp(-12),
            duration:500,
            useNativeDriver:true
        }),
    ])

const handleRegister =async ()=>{

        //  code start
        try{

        if(password=='' || email=='' || fName=='' || lName==''){
            setErr('Please fill form completely')            
        }
        else{
        if(password==confirmPassword){
            // setup for firebase signup check
            auth()
            .createUserWithEmailAndPassword(email,password)
            .then(async(ans) => {
        var dataObj={
            email,
            fName:fName+" "+lName,
            city:'ISB',
            phone:'74538694784964',
            firebaseUID:ans.user.uid
        }
        console.log(dataObj)
        var {data} = await axios.post('http://192.168.3.108:5400/user/addUser',dataObj)
                console.log('data=',data)
                if(data.message=='Success'){
                    console.log('registerd=>',data)
                    navigation.navigate('MCareMain')
                        toHome.start();
                        setTimeout(()=>{
                           toHome.reset();
                           },500)
                }
                else{
                    console.log('errors=>',data.err)
                }

    })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setErr('This email is already in use')
        }
      
          if (error.code === 'auth/invalid-email') {
            setErr('That email address is invalid!');
          }else{
              console.log('There is an error in signing up with this email');
              console.log(error)
          }
      
        });            //  code end
    


        // end of password matching checking
        }else{
            Alert.alert('Your password and confirm password are not same')
            setErr('Your password and confirm password are not same')
        }
    }
}catch(err){
    console.log(err.message)
}


}

    return (
    <View style={{backgroundColor:'white',height:'100%'}}>
<HomeBg1 width={'110%'} marginTop={hp(-11)} height={hp(35)} />
<Animated.View style={{marginTop:hp(-17),transform:[{translateY:translationY},{scaleX:xScaling},{scaleY:yScaling}]}}>
        <HomeImg width={'70%'} style={{marginLeft:'15%'}} />
        </Animated.View>

            {/* <ImageBackground style={{width:'100%',height:hp(22),alignItems:'center',justifyContent:'flex-end'}} source={HomeBg} >

            <Animated.View style={{width:'70%',height:'50%',transform:[{translateY:translationY},{scaleX:xScaling},{scaleY:yScaling}]}}>
            <HomeImg width={'100%'} height={'100%'} />
            </Animated.View>

            </ImageBackground> */}

    <Text style={{fontFamily:'Montserrat',textAlign:'center',fontWeight:'700',color:'#333333',fontSize:wp(5),marginTop:hp(3)}}>SIGN UP</Text>

    <View style={{width:'100%'}}>

    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused1 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused1 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <Usericon style={{marginLeft:wp(8)}} />
        </View>
        <View style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',alignSelf:'center'}} 
            placeholder='First Name'
            value={fName}
            onChangeText={txt=>setFName(txt)}
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

    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(0.5),borderWidth:focused2 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <MsgIcon style={{marginLeft:wp(8)}} />
        </View>
        <View style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',alignSelf:'center'}} 
            placeholder='Last Name'
            value={lName}
            onChangeText={txt=>setLName(txt)}
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
    
    color:focused2 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

    <Animated.View style={{transform:[{translateY:translationYEmail}]}}>
    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused3 ? '#F47400' : '#AFAFAF',marginTop:hp(0.5),borderWidth:focused3 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
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
    
    color:focused3 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

    </Animated.View>

    <Animated.View style={{transform:[{translateY:translationYPass}]}}>
    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused4 ? '#F47400' : '#AFAFAF',marginTop:hp(0.5),borderWidth:focused4 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
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
            <Eye style={{marginLeft:wp(-5)}}  onPress={()=>showPass(!pass)}/>
        </View>
        
        </View>
    <BoxShadow setting={{
    width:wp(87),
    height:10,
    style:{
        marginHorizontal:wp(6.5)
        ,zIndex:-1,
        
    },
    
    color:focused4 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>
    </Animated.View>

    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused5 ? '#F47400' : '#AFAFAF',marginTop:hp(0.5),borderWidth:focused5 ? 0.4 : 0.1,width:'94%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{alignItems:'center',width:'10%'}}>
            <Lock style={{marginLeft:wp(8)}} />
        </View>
        <View  style={{width:'75%'}}>
            <TextInput style={{fontFamily:'Montserrat',width:'80%',alignSelf:'center'}} 
            placeholder='Confirm Password'
            secureTextEntry={confpass}
            value={confirmPassword}
            onChangeText={txt=>setConfirmPassword(txt)}
    />
        </View>
        <View style={{alignItems:'center',width:'10%'}}>
            <Eye style={{marginLeft:wp(-5)}} onPress={()=>showConfPass(!confpass)} />
        </View>
        </View>
    <BoxShadow setting={{
    width:wp(87),
    height:10,
    style:{
        marginHorizontal:wp(6.5)
        ,zIndex:-1,
        
    },
    
    color:focused5 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

    </View>
    <View style={{backgroundColor:'#F47400',width:wp(55),alignSelf:'center',marginTop:hp(1.5),borderRadius:50}}>
    <Pressable onPress={()=>{
        handleRegister()
            }}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SIGN UP</Text>
</Pressable>
</View>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:hp(2)}}>
            <Text style={{fontFamily:'Montserrat',color:'#333333'}}>Already have an account?</Text>

            <Pressable onPress={()=>{
                toLogin.start();
                setTimeout(()=>{
                    navigation.navigate('Login')
                    toLogin.reset();
                },400)
            }
            }>
            <Text style={{fontFamily:'Montserrat',color:'#97a0c7',fontWeight:'600'}}> Log In</Text>
</Pressable>
        </View>


    </View>
    )
}

export default Register