import React,{useState,useEffect} from 'react'
import BackIcon from './../../assets/backbutton.svg'
import {View,Text,TextInput} from 'react-native'
import moment from 'moment'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Pressable } from 'native-base'

const CustomCalender = ({setMinutes1,setHours1,setMonth,setDate,setYear,setTime}) => {

    var [period,setPeriod] = useState('PM')
    
    var [hours,setHours] = useState(12)
    var [minutes,setMinutes] = useState(10)
    var [currentMonth,setCurrentMonth] = useState(moment().month());
    var [currentYear,setCurrentYear] = useState(moment().year());

    var days=['SUN','MON','TUE','WED','THU','FRI','SAT']
    var months=['JANUARY','FEBUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER']
    // var currentMonth = ;
    var daysInMonth = moment().daysInMonth();
    var currentDate = moment().date();
    var currentDay = moment().day();
    // var currentMonth4 = moment().year();
    var firstDayOfCurrentMonth = moment((currentMonth+1) +'/'+1+'/' + currentYear).day();
    var displayCopyOfFirstDay=0;


    const handleMonth = (addMonth)=>{
        if(addMonth){
            if(currentMonth==11){
                currentMonth=0
                currentYear=currentYear+1
                setCurrentMonth(currentMonth);
                setCurrentYear(currentYear)
            }else{
                currentMonth=currentMonth+1
                setCurrentMonth(currentMonth)
            }
            setYear(currentYear)
            setMonth(currentMonth+1)
        }
        else{
            if(currentMonth==0){
                currentMonth=11
                currentYear=currentYear-1
                 setCurrentMonth(currentMonth);
                setCurrentYear(currentYear)
            }else{
                currentMonth=currentMonth-1
                setCurrentMonth(currentMonth)
            }

        }
        setYear(currentYear)
        setMonth(currentMonth+1)

    }

    return (
    <View style={{width:wp(94),borderRadius:3,marginTop:-5,marginHorizontal:wp(3),backgroundColor:'white'}}>

    <View style={{flexDirection:'row'}}>

        <View style={{width:'70%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'Montserrat',color:'#333333',marginLeft:'40%',fontSize:17,fontWeight:'700'}}>{months[currentMonth]} {currentYear}</Text>
        </View>

        <View style={{flexDirection:'row',width:'30%',justifyContent:'center'}}>
        <Pressable onPress={()=>handleMonth(false)}>
        <BackIcon height={wp(9)} width={wp(9)} style={{borderWidth:0.5,borderColor:'lightgray',borderRadius:50}} />
        </Pressable>
        <Pressable onPress={()=>handleMonth(true)}>
        <BackIcon height={wp(9)} width={wp(9)} style={{borderWidth:0.5,borderColor:'lightgray',borderRadius:50,marginLeft:10,transform:[{scaleX:-1}]}} />
        </Pressable>
        </View>

    </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
        {
            days.map((day,i)=>(
                <View key={i} style={{alignItems:'center',width:wp(92/7),height:hp(5),padding:3}}>
                    <Text style={{fontFamily:'Montserrat',color:currentDay==i ? '#F47400' : '#AFAFAF',fontSize:12}}>{day}</Text>
                </View>
            ))
        }

        </View>

        <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        {
            days.map((day,i)=>{
                if(firstDayOfCurrentMonth <= i){
                    displayCopyOfFirstDay=displayCopyOfFirstDay+1;
                }
                    return(
                        
                        <Pressable onPress={()=>setDate(displayCopyOfFirstDay)}>
                        <View key={i} style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==displayCopyOfFirstDay ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                    <Text key={i} style={{fontFamily:'Montserrat',color:currentDate==displayCopyOfFirstDay ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==displayCopyOfFirstDay  ? '700' : '600'}}>

                        {firstDayOfCurrentMonth <= i ? displayCopyOfFirstDay : ''}
                        </Text>
                        </View>
                        </Pressable>
                )
        }
            )
        }

        </View>

        {
            [...Array( Math.ceil( (daysInMonth-displayCopyOfFirstDay) /7) )].map((v,i)=>{
                v = i+1;
                return(
                        <View key={i} style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
                        <Pressable onPress={()=>setDate((7*v)+1)}>
                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+1 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+1 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+1 ?'700' : '600'  }}>
                            {(7*v)+1<=daysInMonth ? (7*v)+1  : '' }
                        </Text>
                        </View>
                        </Pressable>


                        <Pressable onPress={()=>setDate((7*v)+2)}>
                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+2 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+2 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+2 ?'700' : '600'  }}>
                            {(7*v)+2<=daysInMonth ? (7*v)+2  : '' }
                        </Text>
                        </View>
                        </Pressable>
                        
                        <Pressable onPress={()=>setDate((7*v)+3)}>
                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+3 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+3 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+3 ? '700' : '600'  }}>
                            {(7*v)+3<=daysInMonth ? (7*v)+3  : '' }
                        </Text>
                        </View>
                        </Pressable>
                        
                        <Pressable onPress={()=>setDate((7*v)+4)}>

                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+4 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+4 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+4 ?'700' : '600'  }}>
                            {(7*v)+4<=daysInMonth ? (7*v)+4  : '' }
                        </Text>
                        </View>
                        </Pressable>
                        
                        <Pressable onPress={()=>setDate((7*v)+5)}>

                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+5 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+5 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+5 ?'700' : '600'  }}>
                            {(7*v)+5<=daysInMonth ? (7*v)+5  : '' }
                        </Text>
                        </View>

                        </Pressable>
                        
                        <Pressable onPress={()=>setDate((7*v)+6)}>
                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+6 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+6 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+6 ?'700' : '600'  }}>
                            {(7*v)+6<=daysInMonth ? (7*v)+6  : '' }
                        </Text>
                        </View>
                        </Pressable>
                        
                        <Pressable onPress={()=>setDate((7*v)+7)}>

                        <View style={{alignItems:'center',width:wp(92/7),height:wp(92/7),padding:3,backgroundColor:currentDate==(7*v)+7 ? '#FEEEE0' : 'white',borderRadius:50,justifyContent:'center'}}>
                        <Text style={{fontFamily:'Montserrat',color:currentDate==(7*v)+7 ? '#F47400' : 'black',fontSize:13,fontWeight:currentDate==(7*v)+7 ?'700' : '600'  }}>
                            {(7*v)+7 <=daysInMonth ? (7*v)+7  : '' }
                        </Text>
                        </View>
                        </Pressable>
                        

        </View>
                )
        }
            )
        }


        <View style={{paddingBottom:10,paddingHorizontal:wp(2),paddingLeft:wp(4),flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

        <Text style={{fontFamily:'Montserrat',color:'#333333',alignSelf:'center',fontWeight:'700',fontSize:wp(5)}}>
            Time
        </Text>

        <View style={{flexDirection:'row',alignItems:'center'}}>

        <View style={{borderWidth:0.5,paddingHorizontal:10,borderColor:'lightgray',borderRadius:5,flexDirection:'row',height:35,alignItems:'center'}}>
        <TextInput style={{fontFamily:'Montserrat',height:hp(5),paddingTop:0,fontWeight:'600',fontSize:wp(4.5),paddingBottom:0,marginRight:0,paddingRight:0}}
        keyboardType={'number-pad'}
        maxLength={2}
        value={hours}
        onChangeText={val=>{
            if(Number(val)>12){
                setHours1(12)
                setHours(12)
            }else{
                setHours(val)
                setHours1(val)
            }
        }}
        />
        <Text style={{fontFamily:'Montserrat',marginLeft:0,marginRight:0,alignSelf:'center',fontWeight:'600',fontSize:wp(5)}}>:</Text>
        <TextInput style={{fontFamily:'Montserrat',height:hp(5),paddingTop:0,fontWeight:'600',fontSize:wp(4.5),paddingBottom:0,paddingLeft:0}} 
        keyboardType={'number-pad'}
        maxLength={2}
        value={minutes}
        onChangeText={val=>{
            if(Number(val)>59){
                setMinutes(59)
                setMinutes1(59)
            }
            else{
                setMinutes(val)
                setMinutes1(val)
            }
        }}
        />
        </View>

        <View style={{flexDirection:'row',marginLeft:wp(8)}}>
            <Pressable onPress={()=>{
                setPeriod('AM')
                setTime('AM')
            }}>
        <Text style={{fontFamily:'Montserrat',padding:10,backgroundColor:period=='AM' ? '#F47400' : '#fff',borderRadius:50,color:period=='AM' ? '#fff' : '#333333',borderColor:'lightgray',borderWidth:0.5}}>AM</Text>
            </Pressable>
            <Pressable onPress={()=>{
                setPeriod('PM')
                setTime('PM')
                }} style={{marginLeft:3,marginRight:wp(2)}}>
        <Text style={{fontFamily:'Montserrat',padding:10,backgroundColor:period=='PM' ? '#F47400' : '#fff',borderRadius:50,color:period=='PM' ? '#fff' : '#333333',borderColor:'lightgray',borderWidth:0.5}}>PM</Text>
            </Pressable>
        </View>


        </View>
        </View>

    </View>
    )
}

export default CustomCalender