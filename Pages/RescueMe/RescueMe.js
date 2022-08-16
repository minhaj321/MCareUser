
import React,{useState} from 'react'
import {View,Animated,Text,ImageBackground,TextInput,Pressable} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import InputBgImg from './../../assets/Rectangle4189.png';
import DropDownPicker from 'react-native-dropdown-picker';
import BackIcon from './../../assets/backbutton.svg'
import DropdownIcon from './../../assets/dropdownIcon.svg'
import { ScrollView ,ZStack} from 'native-base';
import {BoxShadow} from 'react-native-shadow'
import LottieView from 'lottie-react-native';


const RescueMe = ({navigation}) => {

  var [takumbo,setTakumbo]= useState(false);
  const [open, setOpen] = useState(false);
  const [openVehicle, setOpenVehicle] = useState(false);
  const [value, setValue] = useState('');
  const [vehicleValue, setVehicleValue] = useState('');
  const [focused1, setFocused1] = useState(false);
  const [focused2, setFocused2] = useState(false);

  var rescOpac = new Animated.Value(1)
  var animeOpac = new Animated.Value(0)

  var anime = Animated.sequence([
    Animated.timing(rescOpac,{
      toValue:0.1,
      duration:500,
      useNativeDriver:true
    }),
    Animated.timing(animeOpac,{
      toValue:1,
      duration:500,
      useNativeDriver:true
    }),
    
  ]) 

  var handleAnime = () =>{
    anime.start();

    setTimeout(()=>{

      setTimeout(()=>{

        navigation.navigate('MCareMain')
        
    },9000)
    },1000)

  }

  const [items, setItems] = useState([
    {label: 'Overheating', value: 'Overheating'},
    {label: 'Breakdown', value: 'Breakdown'},
    {label: 'Flat tyre', value: 'Flat tyre'},
    {label: 'Accident', value: 'Accident'},
    {label: 'Run out of fuel', value: 'Run out of fuel'},
    {label: 'Others', value: 'Others'},
  ]);

  const [vehicleItems, setVehicleItems] = useState([
    {label: 'Sedan', value: 'Sedan'},
    {label: 'SUV', value: 'SUV'},
    {label: 'Truck', value: 'Truck'}
  ]);

  return (
      <View style={{height:hp(100),backgroundColor:'white'}}>
        <ZStack>

        <Animated.View style={{opacity:animeOpac,height:hp(100),width:wp(100),backgroundColor:'#fff'}}>
        <View style={{height: wp(100),marginLeft:wp(0),width:wp(100),marginTop:hp(10)}}>
<LottieView  
source={require('./../../JsonFiles/lf30_editor_todvi8et.json') }
autoPlay={true}
// duration={2000}
loop={true}
style={{height:'100%',width:'100%'}}
/>        
</View>
<View style={{width:wp(80),marginHorizontal:wp(10)}}>
<Text style={{textAlign:'center',color:'#333333',fontSize:wp(4.5),fontWeight:'700'}}>Your request has been sent.</Text>
<Text style={{textAlign:'center',color:'#333333',fontSize:wp(4.5),fontWeight:'700'}}>we will get back to you</Text>
</View>

          </Animated.View>
    <ScrollView
    height={'xl'}
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false} >
<RequestHeader title={'REQUEST FORM'} />

<Animated.View 
    style={{opacity:rescOpac}}
    >

    <Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(2)}}>Rescue me</Text>

    <View style={{width:'100%'}}>

    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused1 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused1 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Fault'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused1(true)}
        onBlur={()=>setFocused1(false)}
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
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


    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(1),borderWidth:focused2 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Make of vehicle'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused2(true)}
        onBlur={()=>setFocused2(false)}
        />
    </View>
    </View>

    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
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


    <Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4)}}>Vehicle type</Text>
    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(1),borderWidth:focused2 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'100%'}}>
    <DropDownPicker
      open={openVehicle}
      placeholderStyle={{color:'#afafaf'}}
      placeholder='Sedan'
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'90%',
          marginHorizontal:'5%'
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      defaultValue={vehicleItems[0].value}
      ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
      //   CloseIconComponent={()=><DropdownIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          // width:wp(94),
          // marginLeft:wp(-6),
          width:'100%',
          zIndex:1
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={vehicleValue}
      items={vehicleItems}
      setOpen={setOpenVehicle}
      setValue={setVehicleValue}
      setItems={setVehicleItems}
    />
    </View>
</View>
<BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:"#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>



<Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4) ,zIndex:-2}}>Common problems</Text>

<View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor: '#AFAFAF',marginTop:hp(1),borderWidth: 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45,zIndex:-2}}>
<View  style={{width:'100%'}}>
    <DropDownPicker
      open={open}
      placeholderStyle={{color:'#afafaf'}}
      placeholder='Overheating'
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'90%',
          marginHorizontal:'5%'
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      dropDownDirection='BOTTOM'
      defaultValue={items[0].value}
    //   CloseIconComponent={DropdownIcon}
    ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    dropDownContainerStyle={{
          borderWidth:0,
          zIndex:-2,
          // width:wp(94),
          // marginLeft:wp(-6),
          minHeight:hp(40),
          width:'100%',

        }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    </View>
</View>
<BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-3,
        
    },
    
    color:"#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


</View>

{/* <Pressable onPress={()=>navigation.navigate('RescuedLottie')}> */}
<View style={{backgroundColor:'#F47400',width:wp(50),alignSelf:'center',marginTop:open ? hp(50) : hp(10),zIndex:-2,borderRadius:50}}>
<Pressable onPress={()=>handleAnime()}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SUBMIT</Text>
</Pressable>
</View>
</Animated.View>

    </ScrollView>
    </ZStack>

    </View>
    )
}

export default RescueMe