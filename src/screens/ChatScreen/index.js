import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Common from '../../common';

type props = {
    navigation: Object,
}

const ChatScreen = ({navigation}:props) => {
    return(
        <View style={{flex:1}}>
            <View style={{height:55, width:'100%', alignItems:'center', flexDirection:'row', backgroundColor:'red'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{height:45, width:40,}}>
                <Image style={{height:'100%', widht:'100%', resizeMode:'contain', tintColor:'#ffffff'}} source={Common.Images.Back_Gray_Image}  />
                </TouchableOpacity>
                <View style={{height:40, width:40, borderRadius:20, borderWidth:1, justifyContent:'center', alignItems:'center', borderColor:'#ffffff'}}>
                <Image style={{height:'100%', widht:'100%', borderRadius:20, resizeMode:'contain'}} source={Common.Images.User_dummy_Image}  />
                </View>
                <View style={{height:40, flex:1, paddingHorizontal:10,}}>
                <Text allowFontScaling={false} numberOfLines={1} style={{fontSize:22, fontWeight:'bold', color:'#ffffff'}}>{'xyz'}</Text>
                </View>
                <TouchableOpacity style={{width:40, height:30,}}>
                <Image style={{height:'100%', width:'100%', resizeMode:'contain', tintColor:'#111111'}}  source={Common.Images.ThreeDot_Image} />
                </TouchableOpacity>
            </View>
            <View style={{flex:1, backgroundColor:'blue'}}>

            </View>
            <View style={{height:55, width:'100%', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>
                <TouchableOpacity style={{height:40, width:150, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'green'}}>
                    <Text style={{fontSize:16,fontWeight:'bold', color:'#ffffff'}}>Received</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height:40, width:150, borderRadius:20,justifyContent:'center', alignItems:'center', backgroundColor:'red'}}>
                <Text style={{fontSize:16,fontWeight:'bold', color:'#ffffff'}}>Paid</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ChatScreen;