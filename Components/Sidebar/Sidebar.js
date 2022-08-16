import React, { useState } from 'react'
import {View,Text,Animated,Pressable, Alert} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Home from './../../assets/Home.svg';
import OrderHistory from './../../assets/SearchDocIcon.svg';
import ValueServices from './../../assets/Services.svg';
import RescueMe from './../../assets/Patient.svg';
import Schedule from './../../assets/Calender.svg';
import EditProfile from './../../assets/AddUser.svg';
import WhiteBack from './../../assets/WhiteBack.svg';
import CloseIcon from './../../assets/Close.svg'
import AvatarIcon from './../../assets/AvatarIcon.svg';
import { ZStack } from 'native-base';

import ValueservicesWhite from './../../assets/valueservicesWhite.svg'
import ScheduleWhite from './../../assets/schedules.svg'
import RescueWhite from './../../assets/rescue.svg'
import OrderhistoryWhite from './../../assets/orderhistoryWhite.svg'
import Group from './../../assets/Group33891.svg'
import HomeWhite from './../../assets/homeWhite.svg'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

var TranslationX = new Animated.Value(wp(-90));
var TranslationXHome = new Animated.Value(wp(-90));
var TranslationXOrder = new Animated.Value(wp(-90));
var TranslationXEdit = new Animated.Value(wp(-90));
var TranslationXValue = new Animated.Value(wp(-90));
var TranslationXRescue = new Animated.Value(wp(-90));
var TranslationXSchedule = new Animated.Value(wp(-90));


const Sidebar = ({open,setOpen,handleMe}) => {

    var navigation = useNavigation();

    var [type,setType] = useState('empty');
    var [allow,setAllow] = useState(true)
// animation for home
    var openHome = Animated.sequence([
        Animated.timing(TranslationXHome,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXHome,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })

    ]) 

    var closeHome = Animated.sequence([
        Animated.timing(TranslationXHome,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXHome,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })
    ])

    // animation for order
    var openOrder = Animated.sequence([
        Animated.timing(TranslationXOrder,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXOrder,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })

        
    ]) 

    var closeOrder = Animated.sequence([
        Animated.timing(TranslationXOrder,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXOrder,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })

        
    ]) 

    // animation for rescue
    var openRescue = Animated.sequence([
        Animated.timing(TranslationXRescue,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXRescue,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })
        
    ]) 

    var closeRescue =  Animated.sequence([
        Animated.timing(TranslationXRescue,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXRescue,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })
        
    ]) 

    // animation for edit
    var openEdit = Animated.sequence([
        Animated.timing(TranslationXEdit,{
            toValue:wp(2),
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXEdit,{
            toValue:wp(0),
            duration:200,
            useNativeDriver:true
        })
    
    ]) 

    var closeEdit = Animated.sequence([
        Animated.timing(TranslationXEdit,{
            toValue:wp(2),
            duration:200,
            useNativeDriver:true
        }),
        Animated.timing(TranslationXEdit,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
        })
    
    ]) 


    // animation for TranslationXSchedule
var openSchedule = Animated.sequence([
    Animated.timing(TranslationXSchedule,{
        toValue:wp(2),
        duration:400,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXSchedule,{
        toValue:wp(0),
        duration:200,
        useNativeDriver:true
    })
]) 

var closeSchedule = Animated.sequence([
    Animated.timing(TranslationXSchedule,{
        toValue:wp(2),
        duration:200,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXSchedule,{
        toValue:wp(-90),
        duration:400,
        useNativeDriver:true
    })
]) 

// animation for TranslationXValue
var openValue = Animated.sequence([
    Animated.timing(TranslationXValue,{
        toValue:wp(2),
        duration:400,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXValue,{
        toValue:wp(0),
        duration:200,
        useNativeDriver:true
    })
])

var closeValue = Animated.sequence([
    Animated.timing(TranslationXValue,{
        toValue:wp(2),
        duration:200,
        useNativeDriver:true
    }),
    Animated.timing(TranslationXValue,{
        toValue:wp(-90),
        duration:400,
        useNativeDriver:true
    })
])

    var OpenMenu =Animated.sequence([
        Animated.timing(TranslationX,{
            toValue:5,
            duration:400,
            useNativeDriver:true
        }),
        Animated.timing(TranslationX,{
            toValue:0,
            duration:200,
            useNativeDriver:true
        }),
    ]) 




    var CloseMenu =Animated.sequence([
        Animated.timing(TranslationX,{
            toValue:5,
            duration:200,
            useNativeDriver:true
    
        }),
        Animated.timing(TranslationX,{
            toValue:wp(-90),
            duration:400,
            useNativeDriver:true
    
        }),    
    ]) 

    if(open==true){
        console.log("yes")
        OpenMenu.start();
    }else  if(open==false){
        setTimeout(()=>{
            setOpen(false)
        },1000)
        console.log("no")
        CloseMenu.start();
    }

var lst = [
    {
        name:'Home',
        icon:<Home/>,
        fun:()=>handleAnime('home',openHome),
    },
    {
        name:'Order History',
        icon:<OrderHistory/>,
        fun:()=>handleAnime('ord',openOrder)
    },
    {
        name:'Edit Profile',
        icon:<EditProfile/>,
        fun:()=>handleAnime('edit',openEdit)
    },
    {
        name:'Value Services',
        icon:<ValueServices/>,
        fun:()=>handleAnime('val',openValue)
    },
    {
        name:'Rescue Me',
        icon:<RescueMe/>,
        fun:()=>handleAnime('res',openRescue)
    },
    {
        name:'Schedule',
        icon:<Schedule/>,
        fun:()=>handleAnime('sch',openSchedule)
    },

]

var lst2 = [
    {
        name:'Home',
        icon:<HomeWhite/>,
        fun:()=>{
            setOpen(false)
            navigation.navigate('MCareMain')
            // handleAnime('home',openHome)
        },
        styling : { transform:[{translateX:TranslationXHome}] }
    },
    {
        name:'Order History',
        icon:<OrderhistoryWhite/>,
        fun:()=>{
            navigation.navigate('OrderHistory')
            // handleAnime('ord',openOrder)
    },
        styling : { transform:[{translateX:TranslationXOrder}] }
    },
    {
        name:'Edit Profile',
        icon:<Group/>,
        fun:()=>{
            navigation.navigate('MainProfile')
            // handleAnime('edit',openEdit)
    },
        styling : { transform:[{translateX:TranslationXEdit}] }
    },
    {
        name:'Value Services',
        icon:<ValueservicesWhite/>,
        fun:()=>handleAnime('val',openValue),
        styling : { transform:[{translateX:TranslationXValue}] }
    },
    {
        name:'Rescue Me',
        icon:<RescueWhite/>,
        fun:()=>{
            navigation.navigate('RescueMe')
        // handleAnime('res',openRescue)
    },
        styling : { transform:[{translateX:TranslationXRescue}] }
    },
    {
        name:'Schedule',
        icon:<ScheduleWhite/>,
        fun:()=>{
            navigation.navigate('Schedule')
            // handleAnime('sch',openSchedule)
    },
        styling : { transform:[{translateX:TranslationXSchedule}] }
    },

]



const handleAnime = (currentType) =>{

    if(allow){
        allow=false;
        setTimeout(()=>{
            allow=true;
        },700)
        console.log(allow)
        console.log('prev==>',type,'--',currentType)
        try{
        if(type !='empty'){
        
            if(type=='home'){
                closeHome.start();
                type='empty';    
            }else if(type=='edit'){
                closeEdit.start();
                type='empty';    
            }else if(type=='val'){
                closeValue.start();
                type='empty';    
            }else if(type=='ord'){
                closeOrder.start();
                type='empty';    
            }else if(type=='res'){
                closeRescue.start();
                type='empty';    
            }else if(type=='sch'){
                closeSchedule.start();
                type='empty';    
            }
        
        setTimeout(()=>{
            openHome.reset();
            openEdit.reset();
            openOrder.reset();
            openValue.reset();
            openRescue.reset();
            openSchedule.reset();
            closeHome.reset();
            closeEdit.reset();
            closeOrder.reset();
            closeValue.reset();
            closeRescue.reset();
            closeSchedule.reset();
        },600)
        
        }
        else{
            
            if(currentType=='home'){
                openHome.start();
            }else if(currentType=='edit'){
                openEdit.start();
            }else if(currentType=='val'){
                openValue.start();
            }else if(currentType=='ord'){
                openOrder.start();
            }else if(currentType=='res'){
                openRescue.start();
            }else if(currentType=='sch'){
                openSchedule.start();
            }
        
            
            // currentAction.start();
        
            type=currentType;
        
        }
        }catch(err){
            console.log(err.message)
        }
        console.log('next==>',type,'--',currentType)
    }

}

// handleMe(CloseMenu)

const handleLogOut =async()=>{
    var {data} = await axios.put('http://192.168.100.35:5400/user/logout',{
        email:'minhajsohail7@gmail.com'
    })
    if(data.message=='Success'){
        navigation.navigate('Login')
    }else{
        Alert.alert('There is an error in logging you out.')
    }
    console.log(data)

}

    return (
        <Animated.View style={{ transform:[{translateX:TranslationX}],width:wp(80),height:hp(84),marginTop:hp(3) }}>
    <View style={{ height:hp(84),borderRadius:10,width:wp(80),borderWidth:0.3,borderColor:'lightgray',backgroundColor:'white'  }}>

    <View style={{width:'100%'}}>
        
        <View style={{flexDirection:'row',marginTop:hp(3),justifyContent:'space-around',marginBottom:hp(3.5)}}>

        <View style={{flexDirection:'row'}}>

            <AvatarIcon height={wp(15)} width={wp(15)} style={{borderRadius:50}}/>

            <View style={{marginLeft:10,justifyContent:'center'}}>
                <Text style={{fontFamily:'Montserrat',color:'#333333',fontWeight:'700'}}>John</Text>
                <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5)}}>John123@gmail.com</Text>
            </View>

        </View>
<Pressable onPress={()=>{
                setOpen(false)    
    CloseMenu.start();

}
}>
        <CloseIcon />
</Pressable>

        </View>
<ZStack>


<View style={{marginTop:hp(3)}}>
        {
            lst.map((v,i)=>{
                return(
                    <Pressable key={i} onPress={()=>v.fun()}>
                    <View  style={{flexDirection:'row',marginTop:hp(0),height:hp(7),alignItems:'center'}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                            {v.icon}
                        </View>
                        <View style={{width:'70%'}}>
                            <Text style={{fontFamily:'Montserrat',color:'#333333',fontSize:wp(3.5)}}>{v.name}</Text>
                        </View>
                    </View>
                    </Pressable>
                )
            })
        }
</View>

<View style={{marginTop:hp(3)}}>

{
            lst2.map((v,i)=>{
                return(
<Animated.View style={v.styling} key={i}>
                    <Pressable onPress={()=>v.fun()}>
                    <View  style={{width:'100%',flexDirection:'row',marginTop:hp(0),backgroundColor:'#F47400',alignItems:'center',borderRadius:10,height:hp(7)}}>
                        <View style={{width:'30%',alignItems:'center'}}>
                            {v.icon}
                        </View>
                        <View style={{width:'70%'}}>
                            <Text style={{fontFamily:'Montserrat',color:'#fff',fontSize:wp(3.5)}}>{v.name}</Text>
                        </View>
                    </View>
                    </Pressable>
</Animated.View>
                )
            })
        }





<View style={{alignItems:'center',marginTop:hp(7)}}>
    <Pressable style={{alignItems:'center'}} onPress={()=>{
        handleLogOut()
        }}>
        <WhiteBack/>
        <Text style={{fontFamily:'Montserrat',color:'#333333',fontWeight:'700'}}>Log out</Text>
</Pressable>
</View>

</View>


</ZStack>

    </View>

    </View>
    </Animated.View>
    )
}

export default Sidebar