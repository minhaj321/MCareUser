import React from 'react'
import {View,Text} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ScrollView} from 'native-base';
import StarRating from 'react-native-star-rating';

const ProfileReviews = () => {

    var arr=[
        {
            type:'Nice service',
            stars:5
        },{
            type:'Good',
            stars:3
        },{
            type:'Good',
            stars:4
        },{
            type:'Best quality',
            stars:5
        },
    ]

    return (
    <View style={{paddingBottom:hp(2)}}>
        <ScrollView>
        {
            arr.map((v,i)=>(
                <View key={i} style={{width:wp(94),marginHorizontal:wp(3),borderColor:'#B0B8DA',elevation:3,borderWidth:2,backgroundColor:'white',borderRadius:10,marginTop:hp(2)}}>
            <View style={{width:'90%',marginHorizontal:'5%'}}>

        <View style={{marginTop:hp(2),marginBottom:hp(2)}}>

            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{color:'#333333',fontWeight:'700',fontSize:wp(4)}}>John</Text>

            <StarRating
                starSize={15}
                fullStarColor={'#F47400'}
        disabled={false}
        maxStars={v.stars}
        rating={5}
      />

            </View>

        <Text style={{marginTop:hp(0.2),color:'#333333',fontWeight:'600',fontSize:wp(4)}}>{v.type}</Text>
        <Text style={{marginTop:hp(1),color:'lightgray',fontWeight:'500',fontSize:wp(3.5)}}>Minim aute proident nisi ea anim in et duis sint officia. Mollit dolor proident cupidatat consectetur nostrud sit et .</Text>

        </View>


            </View>
        </View>

            ))
        }
        </ScrollView>
    </View>
    )
}

export default ProfileReviews