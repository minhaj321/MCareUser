import React from 'react'
import {View,Text,ScrollView} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BadgeIcon from './../../assets/BadgeIcon.svg';

const ViewProfile = () => {

var arr =[
    {
        type:'Full name',
        val:'John Adam'
    },{
        type:'Email',
        val:'Johnadam123@gmail.com'
    },{
        type:'Phone number',
        val:'12346'
    },
]

    return (
        <ScrollView style={{width:'100%',backgroundColor:'white'}}>
    <View style={{width:wp(90),backgroundColor:'white',marginHorizontal:wp(5),marginBottom:20}}>
{
    arr.map((v,i)=>(
        <View key={i} style={{marginTop:hp(4)}}>
            <Text style={{fontSize:wp(4)}}>{v.type}</Text>
            <Text style={{color:'#333333',fontSize:wp(4.5)}}>{v.val}</Text>
        </View>
    ))
}

<View style={{height:hp(0.1),marginTop:hp(4),marginBottom:hp(4),width:'60%',backgroundColor:'lightgray',marginHorizontal:'20%'}}></View>

<Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',letterSpacing:wp(0.05)}}>EXPERTISE</Text>

<View style={{width:'100%',paddingHorizontal:'7%',paddingVertical:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2)}}>

<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>John</Text>
<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(0.5),letterSpacing:wp(0.05)}}>Expert in Suv AC</Text>
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(0.5)}}>Aute adipisicing reprehenderit irure sit veniam eiusmod veniam cupidatat. Nisi dolore irure irure do laboris ad qui tempor eu .</Text>

</View>


<Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginTop:hp(4),letterSpacing:wp(0.05)}}>CERTIFICATIONS</Text>

{
    [1,2].map((v,i)=>(
<View key={i} style={{width:'100%',flexDirection:'row',paddingHorizontal:'7%',paddingVertical:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2),borderColor:'#B0B8DA',borderWidth:2}}>

<View style={{width:'80%'}}>
<Text style={{color:'#F47400',fontSize:wp(4),fontWeight:'700',letterSpacing:wp(0.05)}}>ELECTRIC</Text>
<Text style={{color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(0.5),letterSpacing:wp(0.05)}}>2020</Text>
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(0.5)}}>Aute adipisicing reprehenderit irure sit veniam eiusmod veniam cupidatat. Nisi dolore irure irure do laboris ad qui tempor eu .</Text>
</View>
<View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
<BadgeIcon/>
</View>

</View>

    ))
}


<Text style={{color:'#333333',fontSize:wp(4.5),fontWeight:'700',marginTop:hp(4),letterSpacing:wp(0.05)}}>DESCRIPTION</Text>

<View style={{width:'100%',paddingHorizontal:'7%',paddingVertical:hp(2),elevation:1,backgroundColor:'white',borderRadius:5,marginTop:hp(2)}}>

<Text style={{color:'#333333',fontSize:wp(5),fontWeight:'700',letterSpacing:wp(0.05)}}>John</Text>
<View style={{width:'80%'}}>
<Text style={{color:'gray',fontSize:wp(3.5),marginTop:hp(1)}}>Aute adipisicing reprehenderit irure sit veniam eiusmod veniam cupidatat. Nisi dolore irure irure do laboris ad qui tempor eu .</Text>
</View>

</View>


    </View>
    </ScrollView>
    )
}

export default ViewProfile