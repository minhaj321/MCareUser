import React,{useState} from 'react'
import {View,Text ,Image,ImageBackground,TextInput,Alert} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Menu from './../../assets/Menu.svg';
import McareImg from './../../assets/Group33890.svg';
import InputBgImg from './../../assets/Rectangle4189.png';
import SearchIcon from './../../assets/location.svg'
import SpareParts from './../../assets/toppng2.svg'
import RequestArti from './../../assets/toppng3.svg'
import TowOperator from './../../assets/library-of-car-broken-down-vector-stock-towing-service-tow-truck-vehicle-transportation-transparent-png-29898111.svg'
import ScheduleService from './../../assets/toppng4.svg'
import RescueMe from './../../assets/PublicServant.svg'
import HireRecruiter from './../../assets/MCARERecruiterBadge1.svg'
import { ScrollView ,ZStack,Pressable} from 'native-base';
import Sidebar from './../../Components/Sidebar/Sidebar.js';
import SquereBg from './../../assets/SquareBg.png'
import RectangleBg from './../../assets/RectangleBg.png';
import {BoxShadow} from 'react-native-shadow'


const MCareMain = ({navigation}) => {

    const [handle,setHandle] = useState(true) 
    const [open,setOpen] = useState(false) 
    const [focused, setFocused] = useState(false);


const handleMe=(anime)=>{
    setTimeout(()=>{
        anime.reset();
    },1000)
anime.start();
}

return (
<View>
    <ZStack>
<ScrollView 
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false}
style={{height:hp(100),backgroundColor:'white'}}>
        <Pressable
        onPress={()=>{
            console.log('hmm')
            if(open){
                setOpen(false)

        }}
    }
        >

    <View style={{flexDirection:'row'}}>
    <View style={{width:wp(15),alignItems:'flex-end'}}>
    <Pressable onPress={()=>setOpen(true)  }>
    <Menu  style={{marginTop:hp(5)}} />
    </Pressable>

    </View>
    <View style={{width:wp(85),alignItems:'center'}}>
    <McareImg width={wp(50)} style={{marginLeft:-wp(15)}} />
    </View>
    </View>

    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused ? '#F47400' : '#AFAFAF',marginTop:hp(5),borderWidth:focused ? 0.4 : 0.1,width:'80%',flexDirection:'row',alignItems:'center',borderRadius:4,alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'12%',alignItems:'flex-end'}}>
    <SearchIcon  />
    </View>
    <View style={{width:'88%',alignItems:'center'}}>
    <TextInput style={{fontFamily:'Montserrat',marginRight:'12%',alignSelf:'center'}} 
        placeholder='Current Location'
        
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(78),
    height:10,
    style:{
        marginHorizontal:wp(11)
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


    <View style={{width:wp(92),flexDirection:'row',marginHorizontal:wp(4),marginTop:hp(3),justifyContent:'space-between'}}>
    <Pressable onPress={()=>navigation.navigate('SpareParts')}>
    <ImageBackground source={SquereBg}
     style={{width:wp(45),height:wp(45),justifyContent:'center',alignItems:'center'}}>
        <SpareParts height={'55%'} width={'70%'} />
        <Text style={{fontFamily:'Montserrat'}}>Spare Parts</Text>
        </ImageBackground>
        </Pressable>

    <Pressable onPress={()=>navigation.navigate('RequestArti')}>
    <ImageBackground source={SquereBg}
     style={{width:wp(45),height:wp(45),justifyContent:'center',alignItems:'center'}}>
        <RequestArti height={'55%'} width={'50%'}/>
        <Text style={{fontFamily:'Montserrat'}}>Request Artisans</Text>
    </ImageBackground>
    </Pressable>

    </View>


    <View style={{width:wp(92),flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(4),marginTop:hp(2)}}>

    <Pressable onPress={()=>navigation.navigate('TowOperator')}>
    <ImageBackground source={SquereBg}
     style={{width:wp(45),height:wp(45),justifyContent:'center',alignItems:'center'}}>
        <TowOperator height={'55%'} width={'50%'} />
        <Text style={{fontFamily:'Montserrat'}}>Tow Operator</Text>
    </ImageBackground>
    </Pressable>

    <ImageBackground source={SquereBg}
     style={{width:wp(45),height:wp(45),justifyContent:'center',alignItems:'center'}}>
        <HireRecruiter height={'55%'} width={'50%'}/>
        <Text style={{fontFamily:'Montserrat'}}>Hire Recruiter</Text>
    </ImageBackground>

    </View>

    <Pressable onPress={()=>navigation.navigate('RescueMe')}>
    <ImageBackground source={RectangleBg}
     style={{justifyContent:'center',height:wp(45),width:wp(90),marginHorizontal:wp(5),alignItems:'center',marginTop:hp(3)}}>
    <RescueMe height={'55%'} width={'50%'} />
    <Text style={{fontFamily:'Montserrat'}}>Rescue me</Text>
    </ImageBackground>
    </Pressable>

    <Pressable onPress={()=>navigation.navigate('SelectCate')}>
    <ImageBackground source={RectangleBg}
     style={{justifyContent:'center',marginBottom:40,height:wp(45),width:wp(90),marginHorizontal:wp(5),alignItems:'center',marginTop:hp(3)}}>
    <ScheduleService height={'55%'} width={'50%'} />
    <Text style={{fontFamily:'Montserrat'}}>Schedule Service</Text>
    </ImageBackground>
    </Pressable>

    </Pressable>
    </ScrollView>
{
    // handle &&
<Sidebar open={open} setOpen={setOpen} handleMe={handleMe} />
}

    </ZStack>
</View>
    )
}

export default MCareMain