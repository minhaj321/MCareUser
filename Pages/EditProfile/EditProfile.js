import React,{useState,useRef,useEffect} from 'react'
import {Text,View,TextInput,Pressable, Alert} from 'react-native';
import RequestHeader from '../../Components/RequestHeader/RequestHeader';
import PlusSign from '../../assets/Group33968.svg';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BadgeIcon from './../../assets/BadgeIcon.svg';
import {BoxShadow} from 'react-native-shadow';
import NextIcon from './../../assets/Group33967.svg';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownIcon from './../../assets/dropdownIcon.svg'
import { ScrollView, ZStack,TextArea } from 'native-base';
import {CountryCodes} from './../../Components/CountryCodes/CountryCodes.js';
import CloseIcon from './../../assets/Close.svg';
import DocumentPicker from 'react-native-document-picker';
import PhoneInput from "react-native-phone-number-input";
import auth from '@react-native-firebase/auth';
import axios from 'axios';
import { dev } from '../../Route/Route';

const EditProfile = ({navigation}) => {

    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);
    const [value, setValue] = useState('US');
    const [show, setShow] = useState(false);
    const phoneInput = useRef(null);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('Minhaj Sohail');


    const [editDesc,setEditDesc] = useState(false);
    const [descTxt,setDescTxt] = useState('John');
    const [descDetails,setDescDetails] = useState('Aute adipisicing reprehenderit irure sit veniam eiusmod veniam cupidatat. Nisi dolore irure irure do laboris ad qui tempor eu .');

    const [editExp,setEditExp] = useState(false);
    const [expTxt,setExpTxt] = useState('John');
    const [expTitle,setExpTitle] = useState('Expert in Suv AC');
    const [expDetails,setExpDetails] = useState('Aute adipisicing reprehenderit irure sit veniam eiusmod veniam cupidatat. Nisi dolore irure irure do laboris ad qui tempor eu .');
    const [editAbleIndex,setEdittableIndex] = useState(-1);
    const [certiEditAbleIndex,setCertiEdittableIndex] = useState(-1);
    const [value1, setValue1] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    useEffect(()=>{
        var user = auth().currentUser;
        setEmail(user.email)
        
    },[])

    var [expArr,setExpArr] = useState([0])
    const handleAddExperience = async()=>{
            let res =await DocumentPicker.pickSingle()
            console.log(res)
            if(res){
                    setExpArr([...expArr,0])
            }
    }

    const [cerArr,setCerArr] = useState([0,1])
    const handleAddCertificate = async()=>{
            let res =await DocumentPicker.pickSingle()
            console.log(res)
            if(res){
                    setCerArr([...cerArr,0])
            }
    }

    const handleExpEdit=(i)=>{
            setEdittableIndex(i)
    }

    const handleCerEdit=(i)=>{
            setCertiEdittableIndex(i)
    }

const handleProfileUpdate=async()=>{
        var user = auth().currentUser;
        // updation of email
        user.updateEmail(email).then(res=>{
                Alert.alert('Email updated Successfully!')
                // update password
        if(password!=''){
        // if there is a password
        if(password.length>7){
        user.updatePassword(password).then(res2=>{
                Alert.alert('Password updated Successfully!')

        }).catch(e2=>{
                Alert.alert('e2=',e2)
        })
}
        else{
                Alert.alert('Your password should be at least 8 characters long')
        }

        }else{
        // if user doesn't change password
        }

        }).catch(e=>{
                Alert.alert(e)
        })
        
        var {data} = await axios.put(`${dev}user/updateUser`,{
                firebaseUID:user.uid,
                fName:name,
                city:'Karachi'
        })
        if(data.message=='Success'){
                Alert.alert('You updated your data successfully')
                console.log('success')
                setTimeout(()=>{
                        navigation.navigate('MainProfile')
                },3000)
        }else{
                Alert.alert('there is an error with backend')
        }

}

  return (
      <ScrollView style={{backgroundColor:'white'}}>
        <RequestHeader title={'EDIT PROFILE'} profile={true} />
    <View style={{width:wp(90),marginHorizontal:wp(5),marginTop:hp(2)}}>
        <View style={{backgroundColor:'gray',height:hp(0.05),marginTop:hp(4),zIndex:-1,width:'50%',marginHorizontal:'25%'}}></View>

<Text style={{color:'gray',fontSize:wp(3),marginTop:hp(7)}}>Full Name</Text>
<View style={{shadowColor: '#AFAFAF',zIndex:-1,shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused1 ? '#F47400' : '#AFAFAF',marginTop:hp(1),borderWidth:focused1 ? 0.4 : 0.1,width:'100%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='John'
        value={name}
        onChangeText={txt=>setName(txt)}
        placeholderTextColor={'#333333'}
        onFocus={()=>setFocused1(true)}
        onBlur={()=>setFocused1(false)}
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(85),
    height:10,
    style:{
        marginHorizontal:wp(3.5)
        ,zIndex:-2,
        
    },
    
    color:focused1 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

<Text style={{color:'gray',fontSize:wp(3),marginTop:hp(1)}}>Email</Text>
<View style={{shadowColor: '#AFAFAF',zIndex:-1,shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(1),borderWidth:focused2 ? 0.4 : 0.1,width:'100%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        value={email}
        onChangeText={txt=>setEmail(txt)}
        placeholder='John123@gmail.com'
        placeholderTextColor={'#333333'}
        onFocus={()=>setFocused2(true)}
        onBlur={()=>setFocused2(false)}
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(85),
    height:10,
    style:{
        marginHorizontal:wp(3.5)
        ,zIndex:-2,
        
    },
    
    color:focused2 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

    <Text style={{color:'gray',fontSize:wp(3),marginTop:hp(1)}}>Phone number</Text>
        <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',zIndex:-1,shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused3 ? '#F47400' : '#AFAFAF',marginTop:hp(1),borderWidth:focused3 ? 0.4 : 0.1,width:'100%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>

        <PhoneInput
            ref={phoneInput}
            defaultValue={value1}
            defaultCode="DM"
            layout="first"
            renderDropdownImage={<DropdownIcon/>}
        //     onChangeText={(text) => {
        //       setValue1(text);
        //     }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
              console.log(text)
            }}
            flagButtonStyle={{
                alignSelf:'center',
                backgroundColor:'transparent',
                shadowOpacity:0,
                elevation:0

            }}
            textInputStyle={{
            fontSize:wp(4.5),
            textAlign:'left',
            height:'100%',
            alignSelf:'center'
        }}
            textContainerStyle={{
                height:'100%',
                justifyContent:'center',
                backgroundColor:'transparent',
                shadowOpacity:0,
                elevation:0

            }}
            containerStyle={{
                width:'100%',
                backgroundColor:'transparent',
                shadowOpacity:0,
                height:hp(11),
                elevation:0

            }}
            // withDarkTheme
            // withShadow
            // autoFocus
          />


    </View>
    <BoxShadow setting={{
    width:wp(85),
    height:10,
    style:{
        marginHorizontal:wp(3.5)
        ,zIndex:-3,
        
    },
    
    color:focused3 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


    <Text style={{color:'gray',fontSize:wp(3),marginTop:hp(1),zIndex:-2}}>Change Password</Text>

    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',zIndex:-2,shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused4 ? '#F47400' : '#AFAFAF',marginTop:hp(1),borderWidth:focused4 ? 0.4 : 0.1,width:'100%',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        value={password}
        onChangeText={txt=>{setPassword(txt)}}
        placeholder='Password'
        placeholderTextColor={'#333333'}
        onFocus={()=>setFocused4(true)}
        onBlur={()=>setFocused4(false)}
        />
    </View>
    <View style={{width:'20%',alignItems:'flex-end',justifyContent:'center'}}>
    <NextIcon/>
    </View>

    </View>
    <BoxShadow setting={{
    width:wp(85),
    height:10,
    style:{
        marginHorizontal:wp(3.5)
        ,zIndex:-3,
        
    },
    
    color:focused4 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

<View style={{backgroundColor:'gray',height:hp(0.05),marginTop:hp(4),zIndex:-1,width:'50%',marginHorizontal:'25%'}}></View>

{/* <View style={{flexDirection:'row',justifyContent:'space-between',zIndex:-2,marginTop:hp(4),width:'100%',alignItems:'flex-end'}}> */}
        <Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginTop:hp(4),letterSpacing:wp(0.05)}}>EXPERTISE</Text>
        <View style={{width:'100%',paddingHorizontal:'7%',paddingVertical:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2),borderWidth:editExp ? 1 : 0,borderColor:'#f47400'}}>

<View style={{flexDirection:'row',justifyContent:'space-between',zIndex:-1,width:'100%',alignItems:'flex-end'}}>


{
        editExp ?
        (<TextInput style={{width:'80%',paddingVertical:0}}
        onChangeText={(txt)=>setExpTxt(txt)} 
        value={expTxt}
        placeholderTextColor={'#333333'}
        />)
        :
        (<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>{expTxt}</Text>)
}


        <Pressable onPress={()=>setEditExp(!editExp)} style={{marginBottom : editExp ? hp(1) : hp(0)}}>
        {/* <Pressable onPress={()=>handlePicker()}> */}
        <Text style={{color:'#f47400',alignSelf:'flex-end',textDecorationColor:'#f47400',textDecorationLine:'underline',fontSize:wp(3.5),fontWeight:'700',letterSpacing:wp(0.05)}}>{editExp ? 'Save' : 'Edit'}</Text>
        </Pressable>
        {/* <Text style={{color:'#f47400',alignSelf:'flex-end',textDecorationColor:'#f47400',textDecorationLine:'underline',fontSize:wp(3.5),fontWeight:'700',letterSpacing:wp(0.05)}}>Edit</Text> */}
</View>

{
        editExp ?
        (<TextInput style={{width:'80%',paddingVertical:0}}
        onChangeText={(txt)=>setExpTitle(txt)} 
        value={expTitle}
        placeholderTextColor={'#333333'}
        />)
        :

(<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(0.5),letterSpacing:wp(0.05)}}>{expTitle}</Text>)
}

{
        editExp ?
        (
<TextArea
borderWidth={0}
value={expDetails}
onChangeText={(txt)=>setExpDetails(txt)}
textAlign={'left'}
marginLeft={wp(-2)}
/>
)
:
(
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(1)}}>{expDetails}</Text>
        )
}

</View>



<View style={{flexDirection:'row',marginTop:hp(2),alignItems:'flex-end',zIndex:-2,justifyContent:'space-between',width:'100%'}}>
        <Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginTop:hp(4),letterSpacing:wp(0.05)}}>CERTIFICATIONS</Text>
        <Pressable onPress={()=>handleAddCertificate()}>
        <PlusSign />
        </Pressable>
</View>

{
    cerArr.map((v,i)=>(
        <Pressable key={i} onPress={()=>handleCerEdit(i)}>
<View key={i} style={{width:'100%',flexDirection:'column',paddingHorizontal:'7%',paddingVertical:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2),borderColor:'#B0B8DA',borderWidth:2}}>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{color:'#F47400',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>ELECTRIC</Text>
{
        certiEditAbleIndex==i &&
        <Pressable onPress={()=>{
                console.log('before',cerArr)
                setCerArr(cerArr.slice(0,cerArr.length-1))
                console.log('afeter',cerArr)
}}>
        <CloseIcon />
{/* <Text style={{color:'red',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>x</Text>  */}
        </Pressable>
}
</View>

<View style={{flexDirection:'row'}}>
<View style={{width:'80%'}}>

<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(0.5),letterSpacing:wp(0.05)}}>2020</Text>
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(0.5)}}>Aute adipisicing reprehenderit irure sit veniam eiusmod veniam cupidatat. Nisi dolore irure irure do laboris ad qui tempor eu .</Text>
</View>
<View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
<BadgeIcon />
</View>

</View>

</View>
</Pressable>

    ))
}

<View style={{flexDirection:'row',zIndex:-2,alignItems:'flex-end',justifyContent:'space-between',width:'100%'}}>
        <Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginTop:hp(4),letterSpacing:wp(0.05)}}>EXPERTISE</Text>
        <Pressable onPress={()=>handleAddExperience()}>
        <PlusSign />
        </Pressable>
</View>

{
        expArr.map((v,i)=>(
                <Pressable key={i} onPress={()=>handleExpEdit(i)}>
<View style={{width:'100%',paddingHorizontal:'7%',paddingVertical:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2),borderColor:'#f47400',borderWidth:(editAbleIndex==i) ? 1 : 0}}>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>John</Text>
{
        editAbleIndex==i &&
        <Pressable onPress={()=>{
                console.log('before',expArr)
                setExpArr(expArr.slice(0,expArr.length-1))
                console.log('afeter',expArr)
}}>
        <CloseIcon />
{/* <Text style={{color:'red',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>x</Text>  */}
        </Pressable>
}

</View>
<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(0.5),letterSpacing:wp(0.05)}}>2018-2020</Text>
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(0.5)}}>Aute adipisicing reprehenderit irure sit .</Text>

</View>
</Pressable>
        ))
}

{/* <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignItems:'flex-end',marginTop:hp(4),zIndex:-2}}> */}
        <Text style={{zIndex:-1,color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginTop:hp(4),letterSpacing:wp(0.05)}}>DESCRIPTION</Text>
        <View style={{width:'100%',paddingHorizontal:'7%',paddingVertical:hp(2),marginBottom:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2),borderWidth:editDesc ? 1 : 0,borderColor:'#f47400'}}>

<View style={{flexDirection:'row',justifyContent:'space-between',zIndex:-1,width:'100%',alignItems:'flex-end'}}>
{
        editDesc ?
        (<TextInput style={{width:'70%',paddingVertical:0}}
        onChangeText={(txt)=>setDescTxt(txt)} 
        value={descTxt}
        placeholderTextColor={'#333333'}
        />)
        :
        (<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:editDesc ? hp(2) : hp(0),letterSpacing:wp(0.05)}}>{descTxt}</Text>)
}


        <Pressable onPress={()=>setEditDesc(!editDesc)} style={{marginBottom : editDesc ? hp(1) : hp(0)}}>
        <Text style={{color:'#f47400',alignSelf:'flex-end',textDecorationColor:'#f47400',textDecorationLine:'underline',fontSize:wp(3.5),fontWeight:'700',letterSpacing:wp(0.05)}}>{editDesc ? 'Save' : 'Edit'}</Text>
        </Pressable>
</View>

<View style={{width:'80%'}}>

{
        editDesc ?
        (
<TextArea
borderWidth={0}
value={descDetails}
onChangeText={(txt)=>setDescDetails(txt)}
marginLeft={wp(-2)}
/>
)
:
(
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(1)}}>{descDetails}</Text>
        )
}
        </View>
</View>


<View style={{backgroundColor:'#F47400',width:wp(50),alignSelf:'center',marginTop:hp(4),marginBottom:hp(4),borderRadius:50}}>
            <Pressable onPress={()=>{
                handleProfileUpdate()
            }}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(4),paddingVertical:hp(1.6)}}>UPDATE PROFILE</Text>
        </Pressable>
        </View>


    </View>
    </ScrollView>
    )
}

export default EditProfile