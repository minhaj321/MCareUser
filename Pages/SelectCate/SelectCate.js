import React,{useState} from 'react'
import {View,Text,ImageBackground,TextInput,Pressable,Animated, PermissionsAndroid} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import InputBgImg from './../../assets/Rectangle4189.png';
import DropDownPicker from 'react-native-dropdown-picker';
import BackIcon from './../../assets/backbutton.svg'
import SpareParts from './../../assets/toppng2.svg'
import RequestArti from './../../assets/toppng3.svg'
import TowOperator from './../../assets/library-of-car-broken-down-vector-stock-towing-service-tow-truck-vehicle-transportation-transparent-png-29898111.svg'
import SearchIcon from './../../assets/location.svg'
import { ScrollView ,TextArea,ZStack} from 'native-base';
import CustomCalender from './../../Components/CustomCalender/CustomCalender.js';
import DropdownIcon from './../../assets/dropdownIcon.svg'
import SmallBg from './../../assets/SmallSquareBg.png'
import TowOperatorBlack from './../../assets/TowOperatorBlack.svg'
import SparePartsBlack from './../../assets/SparePartsBlack.svg'
import ReqArtiBlack from './../../assets/ReqArtiBlack.svg'
import LottieView from 'lottie-react-native';
import {BoxShadow} from 'react-native-shadow'
// import Geocoder from 'react-native-geocoding';

var rescOpac = new Animated.Value(1)
var animeOpac = new Animated.Value(0)


const SelectCate = ({navigation}) => {


    var [takumbo,setTakumbo]= useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [spare, setSpare] = useState(false);
    const [request, setRequest] = useState(false);
    const [towOp, setTowOp] = useState(false);
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);

    const [items, setItems] = useState([
        {label: 'Sedan', value: 'Sedan'},
        {label: 'SUV', value: 'SUV'},
      {label: 'Motorbike', value: 'Motorbike'}
    ]);
    var [zIndex,setzIndex] = useState(true)
    const [minutes, setMinutes] = useState(0);
    const [date, setDate] = useState(0);
    const [hours, setHours] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [time, setTime] = useState('PM');
    
    const [openParts, setOpenParts] = useState(false);
    const [valueParts, setValueParts] = useState('');
    const [itemsParts, setItemsParts] = useState([
        {label: 'Bumper', value: 'Bumper'},
      {label: 'Headlight', value: 'Headlight'}
    ]);

    const [openCal, setOpenopenCal] = useState(false);
    const [valueCal, setValueCal] = useState('');


  
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
  

  
    var animeReset = Animated.sequence([
      Animated.timing(rescOpac,{
        toValue:1,
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(animeOpac,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      }),
      
    ]) 

    var handleAnime = () =>{
      anime.start();
      setzIndex(false)
      setTimeout(()=>{
  
        setTimeout(()=>{
  
          setzIndex(true)
          navigation.navigate('MCareMain')
          animeReset.start();
          
      },9000)
      },1000)
  
    }
  
return (
<View style={{height:hp(100),backgroundColor:'white'}}>
<ZStack>
<Animated.View style={{opacity:animeOpac,zIndex:zIndex ? -1 : 1}}>
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
</Animated.View>



    <ScrollView
    height={'2xl'}
    minHeight={hp(100)}
    backgroundColor='white'
    zIndex={zIndex ? 1 : -1}
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}>
<RequestHeader title={'SCHEDULE SERVICE'} />

<Animated.View 
    style={{opacity: rescOpac}}
    >


<Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(2)}}>Select Category</Text>

<View style={{width:wp(100),flexDirection:'row',marginHorizontal:wp(0),marginTop:hp(5)}}>

<Pressable onPress={()=>{
  setSpare(true)
  setRequest(false)
  setTowOp(false)
}}>
    <ImageBackground source={SmallBg} style={{width:wp(35),height:wp(32),borderRadius:10,justifyContent:'center',alignItems:'center'}}>
    <View style={{width:'85%',height:'100%',borderWidth: spare ? 3 : 0,height:'99%',borderColor:'#F47400',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
{
  !spare &&
    <SparePartsBlack height={wp(15)} width={wp(19)} />
}
{
  spare &&
    <SpareParts height={wp(15)} width={wp(19)} />
}
    <Text style={{fontFamily:'Montserrat',color:'#333333'}}>Spare Parts</Text>
  </View>
    </ImageBackground>
</Pressable>

    <Pressable onPress={()=>{
  setSpare(false)
  setRequest(true)
  setTowOp(false)
}}>
    <ImageBackground source={SmallBg} style={{borderColor:'red',borderRadius:10,width:wp(35),marginLeft:wp(-2.5),height:wp(32),borderRadius:10,justifyContent:'flex-start',alignItems:'center'}}>

  <View style={{width:'85%',height:'100%',borderWidth:request ? 3 : 0,height:'99%',borderColor:'#F47400',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
    {
      !request &&
    <ReqArtiBlack style={{marginTop:8}} height={wp(15)}  width={wp(13)} />
    }
    {
      request &&
    <RequestArti style={{marginTop:8}} height={wp(15)}  width={wp(13)} />
    }
    
    <Text style={{fontFamily:'Montserrat',marginTop:-8,paddingHorizontal:'5%',color:'#333333'}}>Request Artisans</Text>
    </View>
    </ImageBackground>
</Pressable>

<Pressable onPress={()=>{
  setSpare(false)
  setRequest(false)
  setTowOp(true)
}}>
    <ImageBackground source={SmallBg} style={{width:wp(35),marginLeft:wp(-2.5),height:wp(32),borderRadius:10,justifyContent:'center',alignItems:'center'}}>
  <View style={{width:'85%',height:'100%',borderWidth: towOp ? 3 : 0,height:'99%',borderColor:'#F47400',borderRadius:20,alignItems:'center',justifyContent:'center'}}>
    {
      !towOp &&
    <TowOperatorBlack style={{marginTop:8}} height={wp(15)} width={wp(15)} />
    }
    {
      towOp &&
    <TowOperator style={{marginTop:8}} height={wp(15)} width={wp(15)} />
    }
    <Text style={{fontFamily:'Montserrat',paddingHorizontal:'10%',marginTop:-8,color:'#333333',textAlign:"center"}}>Tow Operator</Text>
    </View>
    </ImageBackground>
    </Pressable>

</View>


<Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4)}}>Vehicle type</Text>
<View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor: '#AFAFAF',marginTop:hp(3),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'100%'}}>
    <DropDownPicker
      open={open}
      placeholder='Sedan'
      placeholderStyle={{color:'#afafaf'}}
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
      defaultValue={items[0].value}
    ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    //   CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
          // width:wp(94),
          // marginLeft:wp(-6)
          width:'100%'
      }}
      ArrowDownIconComponent={DropdownIcon}
      //   ArrowDownIconComponent={BackIcon}
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

    <View style={{shadowColor: '#AFAFAF',zIndex:-1,shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused1 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused1 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Make of vehicle'
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


<Text style={{fontFamily:'Montserrat',zIndex:-1,marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4)}}>Your Location</Text>
  <Pressable onPress={handleLocation}>
<View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused2 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'80%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'82%',marginHorizontal:'5%'}} 
        placeholder='Current Location'        
        editable={false}
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused2(true)}
        onBlur={()=>setFocused2(false)}
        />
    </View>
    <View style={{width:'20%',alignItems:'center',marginLeft:'1%'}}>
    <SearchIcon  />
    </View>
    </View>
  </Pressable>
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

    <Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4)}}>Date/Time</Text>

<Pressable onPress={()=>setOpenopenCal(!openCal)}>
<View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:'#AFAFAF',marginTop:hp(3),borderWidth: 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
<View  style={{width:'82%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'8%'}} 
        placeholder='date/time'
        placeholderTextColor={'#afafaf'}
        value={` ${date}-${month}-${year}/${hours}:${minutes} (${time})`}
        editable={false}
        // onFocus={()=>setOpenopenCal(true)}
        // onBlur={()=>setOpenopenCal(false)}
        />
    </View>
<View style={{width:'18%',alignItems:'center'}}>
  <DropdownIcon/>
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
</Pressable>
{
    openCal &&
<CustomCalender setDate={setDate} setHours1={setHours} setMinutes1={setMinutes}
setYear={setYear} setMonth={setMonth} setTime={setTime}
/>
}

    <Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4)}}>List of Parts</Text>
    <View style={{flexDirection:'row',alignItems:'center',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor: '#AFAFAF',marginTop:hp(3),borderWidth: 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'100%'}}>
    <DropDownPicker
      open={openParts}
      placeholder='List of parts'
      placeholderStyle={{color:'#afafaf'}}
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
      defaultValue={itemsParts[0].value}
      ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
      dropDownContainerStyle={{
          borderWidth:0,
          // width:wp(94),
          // marginLeft:wp(-6)
          width:'100%'

      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={valueParts}
      items={itemsParts}
      setOpen={setOpenParts}
      setValue={setValueParts}
      setItems={setItemsParts}
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



<Text style={{fontFamily:'Montserrat',zIndex:-1,marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4)}}>Problem description</Text>
<TextArea
width={'92%'}
marginLeft={'4%'}
marginTop={5}
zIndex={-1}
placeholder='Add description'
borderWidth={0.3}
backgroundColor='#fff'
// height={100}
minH={'1/6'}
placeholderTextColor='#afafaf'
borderColor={'lightgray'}
fontFamily={'Montserrat'}
/>

{/* <Pressable onPress={()=>navigation.navigate('CalLottie')}> */}
<Pressable onPress={()=>handleAnime()}>
<View style={{backgroundColor:'#F47400',marginBottom:hp(25),width:wp(50),alignSelf:'center',marginTop:hp(3),borderRadius:50}}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SUBMIT</Text>
</View>
</Pressable>

</Animated.View>
</ScrollView>

</ZStack>


</View>
    )
}

export default SelectCate