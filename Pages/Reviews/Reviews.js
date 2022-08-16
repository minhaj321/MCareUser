import React,{useState,useEffect} from 'react'
import {View,Text} from 'react-native';
import MapView , {Marker} from 'react-native-maps';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';
import { TextArea,Pressable} from 'native-base';
import { socket } from '../../App';

const Reviews = ({navigation,route}) => {

    var {data} = route.params;
    var [overall,setOverAll] = useState(false)
    var [pickup,setPickup] = useState(false)
    var [speed,setSpeed] = useState(false)
    var [customer,setCustomer] = useState(false)
    var [repair,setRepair] = useState(false)
    var [trans,setTrans] = useState(false)
    var [currentRating,setCurrentRating] = useState(5) 
    var [textVal,setTextVal] = useState('') 
  // console.log("review data==>",data)
  const handleSubmitReview = ()=>{

    if(overall){
        textVal = 'overall support, '+textVal;
    }
    if(pickup){
      textVal = 'Pickup and delivery services, '+textVal;

    }
    if(speed){
      textVal = 'speed and efficiency, '+textVal;

    }
    if(customer){
      textVal = 'Customer support, '+textVal;

    }
    if(repair){
      textVal = 'repair quality, '+textVal;

    }
    if(trans){
      textVal = 'transparancy, '+textVal;

    }
    console.log(textVal)
    socket.emit('reviewArtisanOrder',{
      id:data.artisan._id, 
      order:data._id, 
      text:textVal, 
      rating:currentRating,
       user:'62d697a9ad530f429c01b0df'
    })

    socket.on('artisanreview',(data)=>{
      if(data.message=='Success'){
        console.log('successfull review')
        navigation.navigate('MCareMain')
      }
    })
  }

    return (
<View>

{/* <View style={{height:hp(10),width:wp(100),backgroundColor:'black'}}>
</View> */}

<MapView
provider='google'
style={{height:hp(10),width:wp(100)}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />

<View style={{height:hp(90),width:wp(100),backgroundColor:'white',borderTopLeftRadius:10,borderTopRightRadius:10}}>

<View style={{width:wp(96),marginHorizontal:wp(2)}}>
<Text style={{fontFamily:'Montserrat',marginTop:wp(4.5),fontWeight:'600',fontSize:wp(4),color:'#333333'}}>ADD YOUR RATING AND REVIEW</Text>
<Text style={{fontFamily:'Montserrat',fontSize:wp(3),marginTop:hp(2),color:'gray'}}>Are you satisfied with the service?</Text>

<View style={{width:wp(10),marginTop:hp(2.5) }}>



<StarRating

                starSize={25}
                fullStarColor={'#F47400'}
                disabled={false}
                maxStars={5}
                selectedStar={stars=>setCurrentRating(stars)}
                rating={currentRating}
                />
                </View>
<Text style={{fontFamily:'Montserrat',marginTop:hp(2.5),color:'#333333',fontSize:wp(3),fontWeight:'700'}}>Tell us what can be improved</Text>

<View style={{flexDirection:'row',marginTop:hp(4),justifyContent:'space-between',alignItems:'center'}}>

<Pressable onPress={()=>setOverAll(!overall)}>
<Text style={{fontFamily:'Montserrat',fontSize:12,paddingVertical:hp(1.3),paddingHorizontal:wp(4),borderColor:'lightgray',borderWidth:0.8,borderRadius:50,
color:overall ? 'white' : 'gray',backgroundColor:overall ? '#F47400' : '#fff'
}}>overall support</Text>
</Pressable>


<Pressable onPress={()=>setCustomer(!customer)}>
<Text style={{fontFamily:'Montserrat',fontSize:12,paddingVertical:hp(1.3),paddingHorizontal:wp(4),borderColor:'lightgray',borderWidth:0.8,borderRadius:50,
color:customer ? 'white' : 'gray',backgroundColor:customer ? '#F47400' : '#fff'
}}>Customer  support</Text>
</Pressable>

</View>


<View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between'}}>

<Pressable onPress={()=>setSpeed(!speed)}>
<Text style={{fontFamily:'Montserrat',fontSize:12,paddingVertical:hp(1.3),paddingHorizontal:wp(4),borderColor:'lightgray',borderWidth:0.8,borderRadius:50,
color:speed ? 'white' : 'gray',backgroundColor:speed ? '#F47400' : '#fff'
}}>speed and efficiency</Text>
</Pressable>

<Pressable onPress={()=>setRepair(!repair)}>
<Text style={{fontFamily:'Montserrat',fontSize:12,paddingVertical:hp(1.3),paddingHorizontal:wp(4),borderColor:'lightgray',borderWidth:0.8,borderRadius:50,
color:repair ? 'white' : 'gray',backgroundColor:repair ? '#F47400' : '#fff'
}}>Repair quality</Text>
</Pressable>

</View>

<View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between'}}>


<Pressable onPress={()=>setPickup(!pickup)}>
<Text style={{fontFamily:'Montserrat',fontSize:12,paddingVertical:hp(1.3),paddingHorizontal:wp(4),borderColor:'lightgray',borderWidth:0.8,borderRadius:50,
color:pickup ? 'white' : 'gray',backgroundColor:pickup ? '#F47400' : '#fff'
}}>Pickup and delivery services</Text>
</Pressable>

<Pressable onPress={()=>setTrans(!trans)}>
<Text style={{fontFamily:'Montserrat',fontSize:12,paddingVertical:hp(1.3),paddingHorizontal:wp(4),borderColor:'lightgray',borderWidth:0.8,borderRadius:50,
color:trans ? 'white' : 'gray',backgroundColor:trans ? '#F47400' : '#fff'
}}>Transparancy</Text>
</Pressable>

</View>

<TextArea
value={textVal}
onChangeText={txt=>setTextVal(txt)}
width={'92%'}
marginLeft={'4%'}
marginTop={5}
placeholder='Add review...'
borderWidth={0.3}
h={'32'}
borderColor={'lightgray'}
fontFamily={'Montserrat'}
/>

<Pressable onPress={handleSubmitReview}>
<View style={{backgroundColor:'#F47400',width:wp(55),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(4),paddingVertical:hp(1.4),fontWeight:'700'}}>Submit review</Text>
</View>
</Pressable>

</View>
</View>
</View>
    )
}

export default Reviews