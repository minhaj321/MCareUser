import React, { useState } from 'react'
import {View,Pressable,ImageBackground,Text} from 'react-native';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'native-base';
import AvatarIcon from './../../assets/AvatarIcon.svg';
import NIcon from './../../assets/NIcon.svg';
import MsgIcon from './../../assets/RoundedMessageicon1.svg'
import PhoneIcon from './../../assets/Rondedcallicon1.svg'

const Schedule = () => {

var [type,setType] = useState(true)
    
    return (
    <View style={{paddingBottom:hp(2),backgroundColor:'#fff'}}>
    <ScrollView>
        <View style={{marginTop:hp(2)}}>
              <RequestHeader title='SCHEDULES' />
        </View>

              <View style={{flexDirection:'row',marginTop:hp(6)}}>
                  <Pressable onPress={()=>setType(true)} style={{width:wp(50),elevation:!type ? 1 : 0,justifyContent:'center',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center',backgroundColor:type ? '#F47400' : '#fff'}}>
                      <Text style={{color:type ? '#fff' : '#333333',paddingVertical:hp(1.5),fontWeight:'600'}}>
                          Scheduled
                      </Text>
                  </Pressable>
                  <Pressable onPress={()=>setType(false)} style={{width:wp(50),elevation:type ? 1 : 0,justifyContent:'center',borderTopLeftRadius:10,borderTopRightRadius:10,alignItems:'center',backgroundColor:type ? '#fff' : '#F47400'}}>
                  <Text style={{color:type ? '#333333' : '#fff',paddingVertical:hp(1.5),fontWeight:'600'}}>
                          Proposals
                      </Text>
                  </Pressable>
              </View>
    
    { type &&
        [1,2,3,4].map((v,i)=>(
            <View key={i} style={{width:wp(90),marginHorizontal:wp(5),elevation:3,backgroundColor:'white',borderRadius:5,marginTop:hp(6),paddingTop:hp(2),paddingBottom:hp(2)}}>
                <View style={{width:'90%',marginHorizontal:'5%'}}>
    
                <View>
                <Text style={{color:'#333333',fontWeight:'500',textAlign:'center',fontSize:wp(4.5)}}>Spare Parts</Text>
                <Text style={{marginTop:hp(1),color:'#333333',fontWeight:'500',fontSize:wp(4)}}>
                Aliquip pariatur amet incididunt qui duis esse. Est id excepteur laboris incididunt do cillum adipisicing in incididunt cupidatat commodo irure.  
                </Text>
            <Text style={{marginTop:hp(1),color:'#333333',fontWeight:'700',fontSize:wp(4)}}>Vehicle</Text>
            <Text style={{color:'#afafaf',fontWeight:'600',fontSize:wp(3.5)}}>Sedan</Text>
            <Text style={{marginTop:hp(0.5),color:'#333333',fontWeight:'700',fontSize:wp(4)}}>Model</Text>
            <Text style={{color:'#afafaf',fontWeight:'600',fontSize:wp(3.5)}}>2017</Text>
            <Text style={{color:'#afafaf',fontWeight:'600',fontSize:wp(3.5),marginTop:hp(1.5)}}>List of parts</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp(1.5)}}>

                <View>
            <Text style={{marginTop:hp(1),color:'#F47400',fontWeight:'500',fontSize:wp(3.5)}}>11:30 AM</Text>
            <Text style={{color:'#F47400',fontWeight:'500',fontSize:wp(3.5)}}>4 june 2022</Text>

                </View>

                <View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>

                <View style={{alignItems:'center',borderColor:'#F47400',backgroundColor:'#f47400',borderWidth:wp(0.5),marginLeft:wp(-1),borderRadius:5,width:'37%',paddingVertical:hp(0.5)}}>
                <Text style={{fontSize:wp(3),color:"#fff"}}>
                Reschedule
                </Text>
            </View>

            <View style={{alignItems:'center',borderColor:'#F47400',borderWidth:wp(0.5),borderRadius:5,marginLeft:wp(1),width:'37%',paddingVertical:hp(0.5)}}>
                <Text style={{color:'#333333',fontSize:wp(3)}}>
                Cancel
                </Text>
            </View>

                </View>
            </View>
    
    
            </View>
        
    
    
                </View>
            </View>
        
        ))
    }
    
    { !type &&
        [1,2,3,4].map((v,i)=>(
            <View key={i} style={{elevation:3,marginTop:hp(7),width:wp(90),marginHorizontal:wp(5),borderRadius:5,backgroundColor:'#fff',paddingTop:hp(2),paddingBottom:hp(2)}}>

            <View style={{alignItems:'center'}}>
                <AvatarIcon height={wp(15)} width={wp(15)} style={{position:'relative',top:hp(-6),elevation:3,borderRadius:50}} />
            <Text style={{fontWeight:'700',fontSize:wp(4.5),color:'#333333',marginTop:hp(-6)}}>John</Text>

            <View>
            <Text style={{fontWeight:'700',fontSize:wp(3.5),color:'gray'}}>Location</Text>
            </View>

            </View>
<Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginLeft:'5%'}}>Spare parts</Text>
<Text style={{marginLeft:'5%',fontSize:wp(4),marginTop:hp(1)}}>Name</Text>
<View style={{flexDirection:'row',marginLeft:'5%',marginTop:hp(1),fontSize:wp(4),alignItems:'center'}}>
<NIcon  />
<Text style={{fontWeight:'700',color:'#F47400',fontSize:wp(3.5)}}>50</Text>
            </View>

<View style={{flexDirection:'row',justifyContent:'space-between',width:'94%',marginHorizontal:'3%',marginBottom:hp(1),marginTop:hp(1)}}>

<View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start'}}>

<MsgIcon height={wp(10)} style={{shadowColor:'#000',shadowOpacity:0.7,elevation:6,borderRadius:50,marginRight:wp(1.5),shadowOffset:{width:0,height:4}}} width={wp(10)} />
<PhoneIcon height={wp(10)} style={{shadowColor:'#000',shadowOpacity:0.7,elevation:6,borderRadius:50,shadowOffset:{width:0,height:4}}} width={wp(10)} />

</View>


<View style={{flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-end'}}>

<View style={{alignItems:'center',borderColor:'#F47400',backgroundColor:'#f47400',borderWidth:wp(0.5),marginLeft:wp(-1),borderRadius:5,width:'35%',paddingVertical:hp(1)}}>
<Text style={{fontSize:wp(3),color:"#fff"}}>
Accept
</Text>
</View>

<View style={{alignItems:'center',borderColor:'#F47400',borderWidth:wp(0.5),borderRadius:5,marginLeft:wp(1),width:'35%',paddingVertical:hp(1)}}>
<Text style={{color:'#333333',fontSize:wp(3)}}>
Decline
</Text>
</View>

</View>


</View>

            </View>
        ))
    }


    </ScrollView>
</View>    
  )
}

export default Schedule