import React,{useState} from 'react'
import {View,Text,ImageBackground,TextInput} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import InputBgImg from './../../assets/Rectangle4189.png';
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownIcon from './../../assets/dropdownIcon.svg'
import BackIcon from './../../assets/backbutton.svg'
import { Pressable } from 'native-base';
import {BoxShadow} from 'react-native-shadow'


const TowOperator = ({navigation}) => {

    var [takumbo,setTakumbo]= useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
      {label: 'Sedan', value: 'Sedan'},
      {label: 'SUV', value: 'SUV'},
      {label: 'Truck', value: 'Truck'}
    ]);
    const [focused, setFocused] = useState(false);
  

  return (
    <View style={{backgroundColor:'white',height:hp(100)}}>
<RequestHeader title={'REQUEST FORM'} />

<Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(4)}}>Tow Operator</Text>

<View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused ? '#F47400' : '#AFAFAF',marginTop:hp(5),borderWidth:focused ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Make of vehicle'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused(true)}
        onBlur={()=>setFocused(false)}
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
    
    color:focused ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor: '#AFAFAF',marginTop:hp(3),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'100%'}}>
    <DropDownPicker
      open={open}
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
      defaultValue={items[0].value}
    ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
    // CloseIconComponent={()=><BackIcon height={20} width={20} />}
      dropDownContainerStyle={{
          borderWidth:0,
        //   width:wp(94),
        //   marginLeft:wp(-6)
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
        ,zIndex:-1,
        
    },
    
    color: "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


<Pressable onPress={()=>navigation.navigate('ListPage')}>
<View style={{backgroundColor:'#F47400',width:wp(50),alignSelf:'center',marginTop:hp(30) ,borderRadius:50}}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SUBMIT</Text>
</View>
</Pressable>

    </View>
    )
}

export default TowOperator