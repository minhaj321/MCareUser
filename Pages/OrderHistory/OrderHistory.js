import React from 'react'
import {View,ImageBackground,Text} from 'react-native';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'native-base';
import NIcon from './../../assets/NIcon.svg';

const OrderHistory = () => {

var arr=[
    {color:'#B0B8DA',type:'Pending',show:false},
    {color:'#F8BF8C',type:'Completed',show:false},
    {color:'#F8BF8C',type:'Pending',show:true},
    {color:'#B0B8DA',type:'Completed',show:true},
]

    return (
      <View style={{marginBottom:hp(2),backgroundColor:'white'}}>
<ScrollView>
          <RequestHeader title='ORDER HISTORY' />
          <View style={{backgroundColor:'gray',height:hp(0.05),marginTop:hp(4),zIndex:-1,width:'50%',marginHorizontal:'25%'}}></View>

{
    arr.map((v,i)=>(
        <View key={i} style={{width:wp(94),marginHorizontal:wp(3),borderColor:v.color,elevation:3,borderWidth:2,backgroundColor:'white',borderRadius:10,marginTop:hp(3)}}>
            <View style={{width:'90%',marginHorizontal:'5%'}}>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp(2),marginBottom:hp(2)}}>
            <View>
            <Text style={{color:'#333333',fontWeight:'700',fontSize:wp(4.5)}}>John123</Text>

        <Text style={{marginTop:hp(0.5),color:'#333333',fontWeight:'700',fontSize:wp(3.5)}}>Distance</Text>
        <Text style={{color:'#afafaf',fontWeight:'700',fontSize:wp(3.5)}}>3.6km</Text>
        <Text style={{marginTop:hp(0.5),color:'#333333',fontWeight:'700',fontSize:wp(3.5)}}>Car model and make</Text>
        <Text style={{color:'#afafaf',fontWeight:'700',fontSize:wp(3.5)}}>Sedan (2017)</Text>
{
    v.show &&
        <Text style={{marginTop:hp(1),color:'#F47400',fontWeight:'700',fontSize:wp(3.5)}}>11:30 AM</Text>
}

{
    v.show &&
        <Text style={{color:'#F47400',fontWeight:'700',fontSize:wp(3.5)}}>4 june 2022</Text>
}


        </View>

        <View style={{justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center',alignSelf:'flex-end'}}>
            <NIcon style={{marginRight:wp(1)}} />
            <Text style={{fontWeight:'700',color:'#F47400',fontSize:wp(3.5)}}>50</Text>
            </View>
            <Text style={{fontWeight:'700',color:'#333333',fontSize:wp(3.5)}}>{v.type}</Text>
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

export default OrderHistory