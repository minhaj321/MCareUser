import React from 'react'
import {Animated,View,Text,ImageBackground,Linking} from 'react-native'
import MapView from 'react-native-maps'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {Pressable, ZStack} from 'native-base';
import BackIcon from './../../assets/backbutton.svg'
import StarRating from 'react-native-star-rating';
import AvatarIcon from './../../assets/AvatarIcon.svg';
import MsgIcon from './../../assets/RoundedMessageicon1.svg'
import PhoneIcon from './../../assets/Rondedcallicon1.svg'
import RouteIcon from './../../assets/destination.svg'
import bgImg from './../../assets/Rectangle4242.png';
import Arrive from './../../assets/arrive.svg';
import Line from './../../assets/Line138.svg';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import { socket } from '../../App';


const Bidding = ({navigation,route}) => {

  const {data} = route.params;
  // console.log("bidding data==>",data)
  var sendingData = data;
  var mapOpac = new Animated.Value(1)
  var detailsOpac = new Animated.Value(1)
  var animeOpac = new Animated.Value(0)
  var seconDivOpac = new Animated.Value(0)

  var animeDivTransY = new Animated.Value(hp(100))
  var secondDivY = new Animated.Value(hp(200))
  var  completeY= new Animated.Value(hp(-10))
  var imgTranslateY = new Animated.Value(hp(0))
  var divTranslateY = new Animated.Value(hp(-15))
  var reachOpac = new Animated.Value(0)

  var lineOpac = new Animated.Value(0)
  var progressOpac = new Animated.Value(0)
  var completeOpac = new Animated.Value(0)
  var arrivalOpac = new Animated.Value(0)
  var iconX = new Animated.Value(1.3)
  var iconY = new Animated.Value(1.3)


  var animeCancel = Animated.sequence([
    Animated.timing(animeDivTransY,{
      toValue:hp(10),
      useNativeDriver:true,
      duration:0
    })
    ,
    Animated.parallel([
      Animated.timing(mapOpac,{
        toValue:0.7,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(detailsOpac,{
        toValue:0,
        duration:1000,
        useNativeDriver:true
      }),
    ]),
    Animated.parallel([
      Animated.timing(mapOpac,{
        toValue:0.4,
        duration:1000,
        useNativeDriver:true
      }),
      Animated.timing(animeOpac,{
        toValue:1,
        duration:1000,
        useNativeDriver:true
      }),
    ]),
  ])



  var animeOpenArival = Animated.parallel([
    Animated.timing(animeDivTransY,{
      toValue:hp(0),
      duration:500,
      useNativeDriver:true
    }),
    Animated.timing(divTranslateY,{
      toValue:hp(-20),
      duration:500,
      useNativeDriver:true
    }),

    Animated.timing(iconX,{
      toValue:1,
      useNativeDriver:true,
      duration:500
    }),
    Animated.timing(iconY,{
      toValue:1,
      useNativeDriver:true,
      duration:500
    }),
    Animated.timing(lineOpac,{
      toValue:1,
      useNativeDriver:true,
      duration:500
    }),
    Animated.timing(arrivalOpac,{
      toValue:1,
      useNativeDriver:true,
      duration:500
    }),
    Animated.timing(reachOpac,{
      toValue:1,
      useNativeDriver:true,
      duration:500
    }),


  ])

  var animeConfirmArrival = Animated.sequence([
    Animated.parallel([
      Animated.timing(reachOpac,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(arrivalOpac,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(lineOpac,{
        toValue:0,
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(animeDivTransY,{
        toValue:hp(5),
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(imgTranslateY,{
        toValue:hp(10),
        duration:500,
        useNativeDriver:true
      }),
      Animated.timing(progressOpac,{
        toValue:1,
        duration:500,
        useNativeDriver:true
      }),
      
    ]),
  ])

  var animeSecond = Animated.sequence([
    Animated.parallel([
    Animated.timing(progressOpac,{
      toValue:0,
      duration:500,
      delay:1000,
      useNativeDriver:true
    }),
    Animated.timing(completeOpac,{
      toValue:1,
      duration:500,
      delay:1000,
      useNativeDriver:true
    })

    ]),
    Animated.parallel([ 
      Animated.timing(iconX,{
        toValue:wp(0),
        duration:0,
        delay:900,
        useNativeDriver:true
  }), 
  Animated.timing(secondDivY,{
        toValue:hp(-60),
        duration:0,
        delay:600,
        useNativeDriver:true
  }), 
  Animated.timing(iconY,{
        toValue:hp(0),
        duration:0,
        delay:900,
        useNativeDriver:true
  })

    ]),
    Animated.parallel([
      Animated.timing(seconDivOpac,{
        toValue:1,
        duration:500,
        useNativeDriver:true
      })
    ]),

  ])

  socket.on('artisanArrived',(data)=>{
    console.log('sajan ji aaye')
    if(data.message=='Success'){
      animeCancel.start();
    
      setTimeout(()=>{
        animeOpenArival.start();
      },4000)
    }
      })

      socket.on('artisanWorkCompleted',(data)=>{
        if(data.message=='Success'){
          animeSecond.start();
        }
        })
  

const handleConfirmArrival = ()=>{
  socket.emit('confirmArtisanArrival',{
    id:data._id
  })

  socket.on('artisanArrivalConfirmed',(data)=>{
    if(data.message=='Success'){
      animeConfirmArrival.start();
    }
  })
}

const handleCompleted = ()=>{
  socket.emit('markArtisanCompleted',{
    id:data._id,
    taskerDescription:'Ho gya hai'
  })
  socket.on('orderCompletedArtisan',(data)=>{
    console.log('orderCompletedArtisan')
    if(data.message=='Success'){
      navigation.navigate('Reviews',{
        data:sendingData
      })
    }
  })
}

const handleInComplete = ()=>{
  socket.emit('markArtisanIncompleted',{
    id:data._id,
    taskerDescription:'Nhi ho rha'
  })
  socket.on('orderIncompletedArtisan',(data)=>{
    console.log('orderIncompletedArtisan')
    if(data.message=='Success'){
      navigation.navigate('/')
    }
  })
}

socket.on('artisanLocationUpdated',(response)=>{
  console.log("artisanLocationUpdated")
})

  return (
      <View style={{height:hp(100),width:wp(100)}}>
        <ZStack>

<Animated.View style={{opacity:mapOpac}}>
<MapView style={{width:wp(100),height:hp(100)}}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
  </Animated.View>
<Animated.View style={{opacity:detailsOpac,height:hp(35),marginHorizontal:wp(5),borderRadius:10,marginTop:hp(57),width:wp(90),backgroundColor:'white'}}>


<View style={{flexDirection:'row',marginTop:hp(1.5),alignItems:'center',justifyContent:'space-between',width:'90%',marginHorizontal:'5%'}}>

<View style={{flexDirection:'row'}}>

  <View style={{width:'30%'}}>
<AvatarIcon height={40} width={40} />
  </View>

<View>
  <Text style={{fontFamily:'Montserrat'}}>John</Text>

  <StarRating
                starSize={12}
                fullStarColor={'#F47400'}
        disabled={false}
        maxStars={5}
        rating={5}
      />


</View>

</View>

<View style={{flexDirection:'row'}}>
<MsgIcon height={wp(10)} style={{shadowColor:'#000',shadowOpacity:0.7,elevation:6,borderRadius:50,marginRight:wp(1.5),shadowOffset:{width:0,height:4}}} width={wp(10)} />
<PhoneIcon
onPress={()=>{
  Linking.openURL(`tel:`)
}} 
height={wp(10)}
 style={{shadowColor:'#000',shadowOpacity:0.7,elevation:6,borderRadius:50,shadowOffset:{width:0,height:4}}}
  width={wp(10)} />
</View>

</View>

<View style={{flexDirection:'row',width:'90%',marginHorizontal:'5%'}}>

<View style={{width:'15%'}}>
<RouteIcon  />
  </View>

<View>
  <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),color:'#333333'}}>Estimated delivery date / Time</Text>
  <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),color:'gray'}}>15 April 2022</Text>

  <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),marginTop:hp(1.5),color:'#333333'}}>Distance</Text>
  <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),color:'gray'}}>3.2 Km</Text>

  <Text style={{fontFamily:'Montserrat',fontSize:wp(3.5),marginTop:hp(1.5),color:'gray'}}>Location</Text>

</View>

</View>

<Pressable onPress={()=>{
  navigation.navigate('MCareMain')
}}>
<View style={{backgroundColor:'#F47400',width:'25%',paddingVertical:4,borderRadius:50,alignSelf:'flex-end',marginRight:20}}>
  <Text style={{fontFamily:'Montserrat',color:'white',textAlign:'center',fontSize:wp(3.5)}}>Cancel</Text>
</View>
</Pressable>
</Animated.View>

<Animated.View style={{opacity:animeOpac,transform:[{translateY:animeDivTransY}]}}>

<ImageBackground source={bgImg} style={{height:hp(70),alignItems:'center',width:wp(100),marginTop:hp(30)}}>


<Animated.Text style={{color:'#F47400',opacity:progressOpac,textAlign:'center',letterSpacing:wp(0.2),fontSize:wp(7),fontWeight:'700',marginTop:hp(4)}}>
  IN PROGRESS
</Animated.Text>

<Animated.Text style={{transform:[{translateY:completeY}],color:'#F47400',opacity:completeOpac,textAlign:'center',letterSpacing:wp(0.2),fontSize:wp(7),fontWeight:'700',marginTop:hp(4)}}>
  COMPLETED
</Animated.Text>

<Animated.View style={{transform:[{translateY:divTranslateY}]}}>
<Animated.View style={{transform:[{scaleX:iconX},{scaleY:iconY},{translateY:imgTranslateY}],height:hp(31),width:wp(76),marginTop:hp(8)}}>


<Arrive height={'100%'} width={'100%'} />
</Animated.View>


<Animated.Text style={{color:'#F47400',opacity:reachOpac,textAlign:'center',letterSpacing:wp(0.2),fontSize:wp(7),fontWeight:'700',marginTop:hp(4)}}>
  Reached
</Animated.Text>

<Animated.View style={{opacity:lineOpac,alignItems:'center'}}>
<Line width={wp(25)} />
</Animated.View>

<Animated.View style={{opacity:arrivalOpac}}>
<Pressable onPress={handleConfirmArrival}>
            <View style={{backgroundColor:'#F47400',width:wp(50),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',fontWeight:'700',textAlign:'center',fontSize:wp(4),paddingVertical:hp(1)}}>Confirm arrival</Text>
        </View>
</Pressable>
</Animated.View>
</Animated.View>


<Animated.View style={{transform:[{translateY:secondDivY}],opacity:seconDivOpac}}>

<LottieView source={require('./../../JsonFiles/order rec completed animation.json')} 
autoPlay={true}
// duration={2000}
loop={true}
style={{width:wp(60),backgroundColor:'white',marginTop:hp(-2.5),alignSelf:'center'}}
/>

<View style={{width:wp(60),marginTop:hp(3),alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>


<Pressable onPress={handleInComplete}>
<View style={{flexDirection:'row',paddingHorizontal:wp(2),paddingVertical:hp(0.3),alignItems:'center',borderRadius:5,borderColor:'#F47400',borderWidth:2}}>
  <Text style={{color:'#F47400',fontSize:wp(3.2)}}>Incomplete</Text>
<Icon name='circle' size={wp(3.5)} color="#F47400" style={{marginLeft:4}}  />
</View>
</Pressable>


<Pressable onPress={handleCompleted}>
<View style={{flexDirection:'row',paddingHorizontal:wp(2.2),paddingVertical:hp(0.3),alignItems:'center',backgroundColor:'#F47400',borderRadius:5,borderColor:'#F47400',borderWidth:2}}>
  <Text style={{color:'#fff',fontSize:wp(3.2)}}>Completed</Text>
<Icon2 name='checkcircleo' size={wp(3.5)} color="#F47400"  style={{marginLeft:4,backgroundColor:'#fff',borderRadius:50}}  />
</View>
</Pressable>

</View>

</Animated.View>

</ImageBackground>

</Animated.View>

</ZStack>

      </View>
  )
}

export default Bidding