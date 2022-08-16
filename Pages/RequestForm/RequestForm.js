import React,{useState} from 'react'
import {Animated,View,Pressable,Text,ImageBackground,TextInput} from 'react-native';
import { widthPercentageToDP as wp , heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RequestHeader from './../../Components/RequestHeader/RequestHeader.js';
import InputBgImg from './../../assets/Rectangle4189.png';
import Component9 from './../../assets/Component9.png';
import {BoxShadow} from 'react-native-shadow'
import DocumentPicker from 'react-native-document-picker';
import { io } from "socket.io-client";
import {dev} from './../../Route/Route'
import { socket } from '../../App.js';
const RequestForm = ({navigation}) => {

    var [takumbo,setTakumbo]= useState(false);
    const [focused1, setFocused1] = useState(false);
    const [focused2, setFocused2] = useState(false);
    const [focused3, setFocused3] = useState(false);
    const [focused4, setFocused4] = useState(false);
    const [focused5, setFocused5] = useState(false);
    const [imageName, setImageName] = useState('');

      
  var newX = new Animated.Value(0)
  var takumboX = new Animated.Value(0)
//   var newColor = new Animated.Value(0)
    var newColor= new Animated.Value(0) 
    var takColor= new Animated.Value(0) 
    var newTxtColor= new Animated.Value(0) 
    var takTxtColor= new Animated.Value(0) 


console.log('minhaj sohal')



    var animeNewColor =newColor.interpolate({
        inputRange:[0,1],
        outputRange:['#F47400','#fff']
    })
    
    var animeTakColor =takColor.interpolate({
        inputRange:[0,1],
        outputRange:['#fff','#F47400']
    })

    
    var animeNewTxtColor =newTxtColor.interpolate({
        inputRange:[0,1],
        outputRange:['#fff','#333333']
    })
    
    var animeTakTxtColor =takTxtColor.interpolate({
        inputRange:[0,1],
        outputRange:['#333333','#fff']
    })


    const handleUploading= async()=>{
        var res = await DocumentPicker.pick({
            type:DocumentPicker.types.images
        })

        setImageName(res[0].name);
        console.log(res[0].name)
    }

    var animeNew = Animated.sequence([

        Animated.parallel([
            Animated.timing(newX,{
                toValue:wp(27),
                duration:100,
                useNativeDriver:true
            }),
            Animated.timing(takumboX,{
                toValue:wp(-27),
                duration:100,
                useNativeDriver:true
            })
    
        ]),
        Animated.parallel([
            Animated.timing(newX,{
                toValue:wp(0),
                duration:300,
                useNativeDriver:true
            }),
            Animated.timing(takumboX,{
                toValue:wp(0),
                duration:300,
                useNativeDriver:true
            }),
            Animated.timing(newColor,{
                toValue:0,
                duration:300,
                useNativeDriver:false
            }),
            Animated.timing(takColor,{
                toValue:0,
                duration:300,
                useNativeDriver:false
            }),
            Animated.timing(newTxtColor,{
                toValue:0,
                duration:300,
                useNativeDriver:false
            }),
            Animated.timing(takTxtColor,{
                toValue:0,
                duration:300,
                useNativeDriver:false
            }),
    
        ])
    ]) 


    var animeTak = Animated.sequence([

        Animated.parallel([
            Animated.timing(newX,{
                toValue:wp(-2),
                duration:100,
                useNativeDriver:true
            }),
            Animated.timing(takumboX,{
                toValue:wp(2),
                duration:100,
                useNativeDriver:true
            }),
    
        ]),
        Animated.parallel([
            Animated.timing(newX,{
                toValue:wp(25),
                duration:300,
                useNativeDriver:true
            }),
            Animated.timing(takumboX,{
                toValue:wp(-25),
                duration:300,
                useNativeDriver:true
            }),
            Animated.timing(newColor,{
                toValue:1,
                duration:300,
                useNativeDriver:false
            }),
            Animated.timing(takColor,{
                toValue:1,
                duration:300,
                useNativeDriver:false
            }),
            Animated.timing(newTxtColor,{
                toValue:1,
                duration:300,
                useNativeDriver:false
            }),
            Animated.timing(takTxtColor,{
                toValue:1,
                duration:300,
                useNativeDriver:false
            }),
    
        ])

    

    ]) 


  return (
    <View style={{backgroundColor:'white',height:hp(100)}}>
<RequestHeader title={'REQUEST FORM'}  />

    <Text style={{fontFamily:'Montserrat',textAlign:'center',color:'#333333',fontSize:wp(4),fontWeight:'700',marginTop:hp(2)}}>Spare Parts</Text>

    <View style={{flexDirection:'row',alignSelf:'flex-end',width:wp(50),backgroundColor:'lightgray',borderRadius:50,paddingVertical:1,marginTop:hp(5),marginRight:10}}>
        <Animated.View style={{transform:[{translateX:newX}]}}>
      <Pressable onPress={()=>{
          if(takumbo==true){
              animeNew.start();
              setTimeout(()=>{
                animeTak.reset();
                animeNew.reset();
            },400)
            takumbo=false
        }
        }}>
      <Animated.View style={{width:wp(25),backgroundColor:animeNewColor,borderColor:'gray',borderWidth:0.2 ,borderRadius:50,paddingVertical:hp(1)}}>
 
        <Animated.Text style={{textAlign:'center',color:animeNewTxtColor }}>New</Animated.Text>
 
      </Animated.View>
      </Pressable>
      </Animated.View>
      
      <Animated.View style={{transform:[{translateX:takumboX}]}}>
      <Pressable onPress={()=>{
          if(takumbo==false){
              animeTak.start();
            takumbo=true;
        }
      }}>
      <Animated.View style={{width:wp(25),backgroundColor:animeTakColor,borderColor:'gray',borderWidth:0.2 ,borderRadius:50,paddingVertical:hp(1)}}>
 
      <Animated.Text style={{textAlign:'center',color:animeTakTxtColor}}>Tokumbo</Animated.Text>
 
      </Animated.View>
      </Pressable>
      </Animated.View>

    </View>


    <View style={{width:'100%'}}>


    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused1 ? '#F47400' : '#AFAFAF',marginTop:hp(3),borderWidth:focused1 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View style={{width:'75%'}}>
    <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Fault'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused1(true)}
        onBlur={()=>setFocused1(false)}
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:focused1 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused2 ? '#F47400' : '#AFAFAF',marginTop:hp(0),borderWidth:focused2 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'75%'}}>
        <TextInput 
        onFocus={()=>setFocused2(true)}
        onBlur={()=>setFocused2(false)}
        style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholderTextColor={'#afafaf'}
        placeholder='Model'
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:focused2 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>



    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused3 ? '#F47400' : '#AFAFAF',marginTop:hp(0),borderWidth:focused3 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Parts neeeded'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused3(true)}
        onBlur={()=>setFocused3(false)}
        />
    </View>
    
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:focused3 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>



    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused4 ? '#F47400' : '#AFAFAF',marginTop:hp(0),borderWidth:focused4 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='New'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused4(true)}
        onBlur={()=>setFocused4(false)}
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:focused4 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:focused5 ? '#F47400' : '#AFAFAF',marginTop:hp(0),borderWidth:focused5 ? 0.4 : 0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <View  style={{width:'75%'}}>
        <TextInput style={{fontFamily:'Montserrat',width:'80%',marginHorizontal:'5%'}} 
        placeholder='Tokumbo'
        placeholderTextColor={'#afafaf'}
        onFocus={()=>setFocused5(true)}
        onBlur={()=>setFocused5(false)}
        />
    </View>
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:focused5 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>

    <View style={{shadowColor: '#AFAFAF',shadowOpacity:0.2,shadowOffset:{width:0,height:2},borderColor:'#AFAFAF',marginTop:hp(0),borderWidth:0.1,width:'94%',borderRadius:wp(0.5),alignSelf:'center',backgroundColor:'white',height:45}}>
    <Pressable style={{width:'100%',height:'100%',justifyContent:'center'}} onPress={()=>handleUploading()}>
        <Text style={{color:'#afafaf',marginLeft:wp(5)}}>{imageName ? imageName : 'Upload Image'}</Text>
    </Pressable>
    </View>
    <BoxShadow setting={{
    width:wp(91),
    height:10,
    style:{
        marginHorizontal:wp(4.5)
        ,zIndex:-1,
        
    },
    
    color:focused5 ? '#f47400' :  "#AFAFAF",
    border:0,
    radius:5,
    opacity:0.10,
    x:0,
    y:-8,
    
}}>
    </BoxShadow>


</View>

<Pressable onPress={()=>navigation.navigate('ListPage')}>
<View style={{backgroundColor:'#F47400',width:wp(50),alignSelf:'center',marginTop:hp(5),borderRadius:50}}>
            <Text style={{fontFamily:'Montserrat',color:'#fff',textAlign:'center',fontSize:wp(5),paddingVertical:hp(1.6)}}>SUBMIT</Text>
</View>
</Pressable>
    </View>
    )
}

export default RequestForm