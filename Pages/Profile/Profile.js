import { ScrollView,Pressable } from 'native-base'
import StarRating from 'react-native-star-rating';
import React, { useState } from 'react'
import {View,Text,ImageBackground} from 'react-native'
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen'
import BackIcon from './../../assets/backbutton.svg'
import Location from './../../assets/location.svg'
import ProfileBg from './../../assets/ProfileBg.png';
import AvatarIcon from './../../assets/AvatarIcon.svg';

const Profile = ({navigation,route}) => {

    var arr = [1,2,3]
    var [cond,setCond] = useState('Desc')
    var {userInfo} = route.params 
    var [info,setInfo] = useState(userInfo)

  return (
    <View style={{backgroundColor:'white'}}>
        <ScrollView
showsVerticalScrollIndicator={false}
showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
        <View style={{height:hp(52),width:wp(100),overflow:'hidden',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>        
        <ImageBackground source={ProfileBg} style={{width:'100%',height:'100%'}}>
    <BackIcon style={{marginLeft:15,marginTop:30}} onPress={()=>navigation.navigate('ListPage')} />
        </ImageBackground>
        </View>

    <AvatarIcon height={wp(20)} width={wp(20)}
     style={{borderRadius:50,alignSelf:'center',marginTop:wp(-10)}} />

        <View style={{width:'92%',marginHorizontal:'4%'}}>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'Montserrat',fontSize:wp(5)}}>{info?.personalInfo?.firstName  + ' ' + info?.personalInfo?.lastName}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>

                <StarRating
                starSize={19}
                fullStarColor={'#F47400'}
        disabled={false}
        maxStars={5}
        rating={5}
      />
                <Text style={{fontFamily:'Montserrat',marginLeft:5,color:'#333333',fontWeight:'700'}}>5.0</Text>
                <Text style={{fontFamily:'Montserrat',marginLeft:5}}>(547)</Text>
            </View>
        </View>

        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>

        <View style={{flexDirection:'row'}}>
            <Location  />
            <Text style={{fontFamily:'Montserrat',marginLeft:5,fontSize:wp(4.5)}}>London</Text>
        </View>
        <Text style={{fontFamily:'Montserrat',fontSize:wp(4.5)}}>3km/4min</Text>

        </View>

        </View>

        <View style={{width:'92%',marginHorizontal:'4%',flexDirection:'row',marginTop:hp(3)}}>
<Pressable onPress={()=>setCond('Desc')}>
            <View style={{width:wp(46),backgroundColor:cond=='Desc' ? '#F47400' : '#fff' ,borderColor:'#F47400'
        ,borderWidth:2,borderRadius:10,justifyContent:'center',alignItems:'center'
        }}>
                <Text style={{fontFamily:'Montserrat',color:cond=='Reviews' ? '#333333' : '#fff',paddingVertical:7}}>Description</Text>
            </View>
            </Pressable>

            <Pressable onPress={()=>setCond('Reviews')}>
            <View style={{width:wp(46),backgroundColor:cond=='Desc' ? '#fff' : '#F47400' ,borderColor:'#F47400'
        ,borderWidth:2,borderRadius:10,justifyContent:'center',marginLeft:-0.7,alignItems:'center'
    }}>
                <Text style={{fontFamily:'Montserrat',color:cond=='Desc' ?  '#333333' : '#fff' ,paddingVertical:7}}>Reviews</Text>
            </View>
            </Pressable>
        </View>

    {cond == 'Reviews' &&
        arr.map((v,i)=>{
            return(
                <View key={i} style={{marginTop:20}}>

                    <View style={{backgroundColor:'#FAFAFA',width:'92%',marginHorizontal:'4%',padding:10,borderRadius:10}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                        <View style={{flexDirection:'row'}}>

                            <AvatarIcon height={wp(13)} width={wp(13)} style={{borderRadius:50}} />

                            <View style={{marginLeft:10}}>
                                <Text style={{fontFamily:'Montserrat',color:'#333333',fontSize:wp(4)}}>Name</Text>
                                <Text style={{fontFamily:'Montserrat'}}>2 Days ago</Text>
                            </View>
                        </View>

                        <StarRating
                starSize={19}
                fullStarColor={'#F47400'}
        disabled={false}
        maxStars={5}
        rating={5}
      />

                    </View>
                    <Text style={{fontFamily:'Montserrat',fontSize:wp(3.3),marginTop:10}}>
                        Consectetur minim incididunt ullamco aliqua sunt quis culpa excepteur eiusmod. Occaecat aute ex sint nulla irure .
                    </Text>
                    </View>

                </View>
            )
        })
    }
<View style={{width:'92%',marginHorizontal:'4%',marginTop:10,padding:10,borderRadius:5,backgroundColor:'#F4F4F4'}}>
    {
        cond == 'Desc' &&
        arr.map((v,i)=>{
            return(
                <View key={i} style={{marginTop:i==0 ? 0 : 10}}>
                    <Text style={{fontFamily:'Montserrat'}}>Qui do voluptate ad consectetur cillum consequat consequat pariatur. Eu tempor non consectetur officia. Culpa laboris qui dolor qui do magna esse nisi aute adipisicing culpa.</Text>
                </View>
            )
        })
    }
</View>
        </ScrollView>
    </View>
    )
}

export default Profile