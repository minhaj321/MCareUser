import React, { useState } from 'react'
import {View,Text,Animated,Image,PermissionsAndroid} from 'react-native'
import MapView from 'react-native-maps'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {Pressable, ZStack,ScrollView} from 'native-base';
import CloseIcon from './../../assets/Close.svg'
import McareIcon from './../../assets/MCARERecruiterBadge1.svg'
import AvatarIcon from './../../assets/AvatarIcon.svg';
import NDollar from './../../assets/NIcon.svg';
import StarRating from 'react-native-star-rating';
import BackIcon from './../../assets/backbutton.svg'
import LocationIcon from './../../assets/LocationIcon.svg'
import BgImg from './../../assets/Rectangle4242.png';
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { socket } from '../../App.js';

var translationYSheet = new Animated.Value(hp(70))
var translationYPopup = new Animated.Value(hp(0))
var divOpac = new Animated.Value(0)
var bgDivOpac = new Animated.Value(0)

var divOpacAnime = Animated.timing(divOpac,{
  toValue:1,
  duration:500,
  useNativeDriver:true,
  delay:2000
}).start();

var bgDivOpacAnime = Animated.timing(bgDivOpac,{
  toValue:0.85,
  useNativeDriver:true,
  duration:500,
  delay:2000
}).start();

var divOpacInverseAnime = Animated.timing(divOpac,{
  toValue:0,
  duration:700,
  useNativeDriver:true,
})

var bgdivOpacInverseAnime = Animated.timing(bgDivOpac,{
  toValue:0,
  useNativeDriver:true,
  duration:700,
})


var openSheet=Animated.timing(translationYSheet,{
  toValue:hp(50),
  duration:500,
  useNativeDriver:true
})

var closeSheet=Animated.timing(translationYSheet,{
  toValue:hp(70),
  duration:500,
  useNativeDriver:true
})

var openPopup=Animated.timing(translationYPopup,{
  toValue:-hp(15),
  duration:500,
  useNativeDriver:true
})

var closePopup =Animated.timing(translationYPopup,{
  toValue:hp(0),
  duration:500,
  useNativeDriver:true
})


const BidderListPage = ({navigation,route}) => {

  const { data } = route.params;
    var [open,setOpen] = useState(false)
    var [bidData,setBidData] = useState(data.bids)

    async function requestPermissions() {
        if (Platform.OS === 'ios') {
          Geolocation.requestAuthorization();
          Geolocation.setRNConfiguration({
            skipPermissionRequests: false,
           authorizationLevel: 'whenInUse',
         });
        }
      
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          ).then(res=>{
            // console.log(res)
          });
        }
      }
      requestPermissions()
    Geolocation.getCurrentPosition(
        (position) => {
          // console.log('position-->',position);
        },
        (error) => {
          // See error code charts below.
          // console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );



    const handleAccept=(item)=>{
      socket.emit('acceptArtisanOrder',{
        id:data._id, 
        artisan:item.artisan._id, 
        taskerLongitude:item.artisan.geometry.coordinates[0], 
        taskerLatitude:item.artisan.geometry.coordinates[1]
      })
      socket.on('artisanOrderAcceptance',(response)=>{
        console.log('ACCEPTANCE=>')
        navigation.navigate('Bidding',{
          data:item
        })
      })
    }

    const handleReject=(item)=>{
      socket.emit('rejectArtisanBid',{
        id:data._id, 
        bidId:item._id, 
        artisan:item.artisan._id
      })

      socket.on('artisanBidRejected',(response)=>{
        setBidData(response.data.bids)
        console.log('REJECTION=>')
        // navigation.navigate('/')
      })

    }

    socket.on('artisanBidReceived',(response)=>{
        setBidData(response.data.bids)
        console.log('artisanBidReceived==>')
    })


    return (
    <View style={{backgroundColor:'#E6E6E6',height:hp(100)}}>
       {/* <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      
      onPress={(data, details = null) => {
        console.log(data, details);
        console.log('asd')
      }}
      query={{
        key: 'AIzaSyBm-xt-zBBtvE_AreqKHODWIsNvkrsU1Qw',
        language: 'en',
      }}
    />  */}
        <ZStack>
<MapView style={{width:wp(100),height:open ? hp(55) : hp(80) }}
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />


  <Animated.View style={{marginTop:hp(30),height:hp(30),opacity:bgDivOpac,width:'74%',marginHorizontal:'13%',backgroundColor:'white',borderRadius:10,transform:[{translateY:translationYPopup}]}}>
</Animated.View>

<Animated.View style={{opacity:divOpac,transform:[{translateY:translationYPopup}]}}>
<View style={{marginTop:hp(30),height:hp(30),width:'74%',marginHorizontal:'13%',borderRadius:10 }}>

<View style={{flexDirection:'row',marginTop:15}}>

<View style={{width:'20%',alignItems:'center'}}>
<McareIcon height={50} width={50} style={{marginLeft:wp(3),borderRadius:10}} />
</View>

<View style={{width:'60%',alignItems:'center'}}>
<AvatarIcon  height={hp(10)} width={wp(20)} />
<Text style={{fontFamily:'Montserrat',marginTop:5,fontSize:wp(5),fontWeight:'700',color:'#333333'}}>John</Text>
<StarRating
starStyle={{marginTop:hp(1)}}
                starSize={14}
                fullStarColor={'#F47400'}
        disabled={false}
        maxStars={5}
        rating={5}
      />

<View style={{backgroundColor:'#F47400',width:'100%',alignSelf:'center',marginTop:hp(2),borderRadius:50}}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(3),paddingVertical:hp(1)}}>HIRE RECRUITER NOW</Text>
</View>


</View>

<View style={{width:'20%',alignItems:'flex-end',marginLeft:-10}}>
<CloseIcon onPress={()=>{
    divOpacInverseAnime.start()
    bgdivOpacInverseAnime.start()
}} />
</View>

</View>

</View>
</Animated.View>

<Animated.View style={{height:hp(50),width:'90%',marginHorizontal:'5%',transform:[{translateY:translationYSheet}]}}>
<LocationIcon style={{alignSelf:'flex-end',marginRight:wp(-1)}} />
<View style={{width:'100%',borderRadius:30,backgroundColor:'white'}}>


<Pressable 

onTouchStart={()=>{
    
    if(!open){
        openSheet.start();
        open=true
        openPopup.start()
}else{
    closeSheet.start();
    closePopup.start();
    open = false
}
    }}>
<View style={{backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20}}>
<Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#F47400',fontSize:wp(4.2),padding:hp(1),fontWeight:'700'}}>Offers</Text>
</View>
</Pressable>

<ScrollView 
showsVerticalScrollIndicator={false}
// h={hp(40)}
// minH={hp(20)}
showsHorizontalScrollIndicator={false} style={{marginBottom:hp(15)}}>
{
    bidData?.map((v,i)=>{
      // console.log('item number==>',i,' is ',v.artisan.geometry.coordinates)
      return(

<View key={i} style={{marginTop:i==0 ? hp(0) : hp(2),flexDirection:'row',justifyContent:'space-between',backgroundColor:'#FAFAFA',paddingVertical:hp(2),borderRadius:5,paddingHorizontal:wp(2)}}>

<View>

<View style={{flexDirection:'row'}}>
    <AvatarIcon height={hp(6)} width={wp(13)} />
    <View style={{marginLeft:5}}>
        <Text style={{fontFamily:'Montserrat',color:'#333333',fontSize:wp(3.8),fontWeight:'600'}}>{v?.artisan?.personalInfo?.firstName  + ' ' + v?.artisan?.personalInfo?.lastName}</Text>
        <Text style={{fontFamily:'Montserrat',color:'#F47400',fontSize:wp(3.8)}}><NDollar />{v?.bidAmount}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <StarRating
                starSize={13}
                fullStarColor={'#F47400'}
        disabled={false}
        maxStars={5}
        rating={5}
      />
<Text style={{fontFamily:'Montserrat',color:'#333333',fontSize:wp(3.8),marginLeft:5}}>5.0</Text>
<Text style={{fontFamily:'Montserrat',fontSize:wp(3.8),marginLeft:5}}>(547)</Text>
        </View>
    </View>
</View>
<View style={{flexDirection:'row',marginTop:10}}>
    <Pressable onPress={()=>handleReject(v)}>
    <View style={{paddingHorizontal:10,paddingVertical:3,borderRadius:50,borderColor:'#F47400',borderWidth:1}}>
        <Text style={{fontFamily:'Montserrat',color:'#F47400',fontSize:wp(3.8)}}>Decline</Text>
    </View>
    </Pressable>
    <Pressable onPress={()=>handleAccept(v)}>
    <View style={{paddingHorizontal:10,paddingVertical:3,borderRadius:50,borderColor:'#F47400',marginLeft:4,backgroundColor:'#F47400'}}>
        <Text style={{fontFamily:'Montserrat',color:'white',fontSize:wp(3.8)}}>Accept</Text>
    </View>
    </Pressable>
</View>

</View>

<View style={{justifyContent:'space-between'}}>
    <Pressable onPress={()=>{
      console.log('artical profile==>',v.artisan._id)
      console.log('order id==>',v._id)
      navigation.navigate('Profile',{
      userInfo:v.artisan
    })
    }}>
    <Text style={{fontFamily:'Montserrat',color:'#F47400',fontSize:wp(3.5),fontWeight:'700'}}>View Profile</Text>
    </Pressable>
    <View>
    <Text style={{fontFamily:'Montserrat',color:'#F47400',fontSize:wp(3.5)}}>Return Policy</Text>
    <Text style={{fontFamily:'Montserrat',color:'gray',fontSize:wp(3.5)}}>24 Hours</Text>
</View>

</View>

</View>
    )
    }
      )
}
</ScrollView>


</View>
</Animated.View>

<Pressable
  onPress={()=>navigation.navigate('MCareMain')}
  >
  <BackIcon 
  style={{marginTop:hp(2),marginLeft:wp(2)}} />
</Pressable>



</ZStack>
    </View>
    )
}

export default BidderListPage