import React,{useState} from 'react'
import {View,Text,ImageBackground,TextInput, Alert} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import InputBgImg from './../../assets/Rectangle4189.png';
import DropDownPicker from 'react-native-dropdown-picker';
import BackIcon from './../../assets/backbutton.svg'
import DropdownIcon from './../../assets/dropdownIcon.svg'
import { Pressable, ScrollView } from 'native-base';
import {BoxShadow} from 'react-native-shadow'
import Geolocation from 'react-native-geolocation-service';
import { socket } from '../../App.js';


const RequestArti = ({navigation}) => {

    var [takumbo,setTakumbo]= useState(false);
    const [focused, setFocused] = useState(false);
    const [open, setOpen] = useState(false);
    const [fault, setFault] = useState('asd');
    const [vehicleMake, setVehicleMake] = useState('asd');
    const [valueVehicle, setValueVehicle] = useState('Sedan');
    const [itemsVehicle, setItemsVehicle] = useState([
      {label: 'Sedan', value: 'Sedan'},
      {label: 'SUV', value: 'SUV'},
      {label: 'Truck', value: 'Truck'}
    ]);

    const [openType, setOpenType] = useState(false);
    const [type, setType] = useState('Individual');
    const [itemsType, setItemsType] = useState([
      {label: 'Individual', value: 'Individual'},
      {label: 'Workshop', value: 'Workshop'}
    ]);


    const [openVehicle, setOpenVehicle] = useState(false);
    const [value, setValue] = useState('Mechanic');
    const [items, setItems] = useState([
      {label: 'Mechanic', value: 'Mechanic'},
      {label: 'Panel beater', value: 'Panel beater'},
      {label: 'Painter', value: 'Painter'},
      {label: 'Vulcanizers', value: 'Vulcanizers'},
      {label: 'A/C Technicians', value: 'A/C Technicians'},
      {label: 'Service Technicians', value: 'Service Technicians'},
      {label: 'Diagnostic Technicians', value: 'Diagnostic Technicians'},
      {label: 'Brake and Transmission Technicians', value: 'Brake and Transmission Technicians'},
      {label: 'Body repair Technicians', value: 'Body repair Technicians'},
      {label: 'Vehicle refinishers', value: 'Vehicle refinishers'},
      {label: 'Auto glass mechanics', value: 'Auto glass mechanics'},
      {label: 'Auto key cutters', value: 'Auto key cutters'},
      {label: 'Gear technicians', value: 'Gear technicians'},
      {label: 'Steering technicians', value: 'Steering technicians'},
      {label: 'Alignment', value: 'Alignment'},
      {label: 'Cash wash', value: 'Cash wash'},
      {label: 'Others', value: 'Others'},
    ]);
  

const handleSubmit = ()=>{

    socket.on('createArtisanOrder',({data})=>{
        console.log(1)
        navigation.navigate('ListPage',{
            data:data
        })
    })
    

    if(value== '' || fault== '' || vehicleMake== '' || valueVehicle== '' || type== ''){
        Alert.alert("Please fill form completely.")
    }else{
        Geolocation.getCurrentPosition(
            (position) => {
    console.log(value,'==',fault,'==',position.coords.longitude,'==',position.coords.latitude,'==',
    vehicleMake,'==',valueVehicle,'==',type)      
                socket.emit('neworderartisan',{
                    customer:'62d697a9ad530f429c01b0df',
                    orderType:value, 
                    fault, 
                    longitude:position.coords.longitude,
                    latitude:position.coords.latitude,
                    vehicleMake, 
                    vehicleType:valueVehicle,
                    artisanType:type
                })
                // navigation.navigate('ListPage')
            },
            (error) => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    
    }

}

    return (
        <View>
            <ScrollView
            backgroundColor={'white'}
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}>
<RequestHeader title={'REQUEST FORM'} />
<Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(4)}}>Request Artisans</Text>


<Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),fontWeight:'600',color:'#F47400',fontSize:wp(4)}}>Fix my car</Text>

<View style={{flexDirection:'row',shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:'#AFAFAF',marginTop:hp(5),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Fault'
        placeholderTextColor={'#afafaf'}
        value={fault}
        onChangeText={txt=>setFault(txt)}
        />
    </View>

    <View style={{width:'25%',justifyContent:'center',height:'100%',marginTop:hp(0),borderRadius:wp(1),alignItems:'center',backgroundColor:'#F47400'}}>
<Pressable onPress={()=>navigation.navigate('RescueMe')}>
    <Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#fff'}}>NO IDEA</Text>
</Pressable>
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




<View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>

    <View  style={{width:'85%'}}>
        <TextInput 
        onFocus={()=>setFocused(true)}
        onBlur={()=>setFocused(false)}
        style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Make of vehicle'
        placeholderTextColor={'#afafaf'}
        value={vehicleMake}
        onChangeText={txt=>setVehicleMake(txt)}
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


    <Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4),zIndex:open ? -2 : 1}}>Vehicle type</Text>
    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:'#AFAFAF',marginTop:hp(2),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'100%'}}>
    <DropDownPicker
      open={openVehicle}
      placeholder='Sedan'
      placeholderStyle={{color:'#afafaf'}}
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'94%',
          marginHorizontal:'3%'
 }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      defaultValue={itemsVehicle[0].value}
      ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
      dropDownContainerStyle={{
          borderWidth:0,
        //   width:wp(94),
        //   marginLeft:wp(-6)
        width:'100%',
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={valueVehicle}
      items={itemsVehicle}
      setOpen={setOpenVehicle}
      setValue={setValueVehicle}
      setItems={setItemsVehicle}
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



<Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4),zIndex:-1}}>Artisans needed</Text>

<View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:'#AFAFAF',zIndex:-1,marginTop:hp(2),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
<View  style={{width:'100%'}}>
    <DropDownPicker
      open={open}
      placeholderStyle={{color:'#afafaf'}}
      placeholder='Mechanic'
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'94%',
          marginHorizontal:'3%'
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
      }}
      dropDownDirection='BOTTOM'
      defaultValue={items[0].value}
      ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
      dropDownContainerStyle={{
          borderWidth:0,
        //   width:wp(94),
        //   marginLeft:wp(-6),
          width:'100%',
          minHeight:hp(110)
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
        ,zIndex:-2,
        
    },
    
    color:"#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

{/* type */}
<Text style={{fontFamily:'Montserrat',marginLeft:wp(4),marginTop:hp(3),color:'#333333',fontSize:wp(4),zIndex:-4}}>Artisans type</Text>

<View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:'#AFAFAF',zIndex:-1,marginTop:hp(2),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45,zIndex:-3}}>
<View  style={{width:'100%'}}>
    <DropDownPicker
      open={openType}
      placeholderStyle={{color:'#afafaf'}}
      placeholder='Individual'
      containerStyle={{
          borderWidth:0,
          borderColor:'transparent',
          backgroundColor:'transparent',
          width:'94%',
          marginHorizontal:'3%',
          zIndex:-3
      }}
      style={{
          borderWidth:0,
          backgroundColor:'transparent',
          zIndex:-3
      }}
      dropDownDirection='BOTTOM'
      defaultValue={items[0].value}
      ArrowUpIconComponent={()=> <DropdownIcon style={{transform:[{scaleY:-1}]}} />}
      dropDownContainerStyle={{
          borderWidth:0,
          width:'100%',
        //   marginHorizontal:'3%',
          zIndex:-3
      }}
      ArrowDownIconComponent={DropdownIcon}
    //   showArrowIcon={false}
      value={type}
      items={itemsType}
      setOpen={setOpenType}
      setValue={setType}
      setItems={setItemsType}
    />
    </View>
</View>
<BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5),
        zIndex:-4,
        
    },
    
    color:"#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>



<View style={{backgroundColor:'#F47400',width:wp(50),marginBottom:hp(10),alignSelf:'center',marginTop:open ? hp(120) : hp(14),borderRadius:50,zIndex:-5}}>
<Pressable onPress={handleSubmit}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SUBMIT</Text>
</Pressable>
</View>

</ScrollView>
        </View>
    )
}

export default RequestArti