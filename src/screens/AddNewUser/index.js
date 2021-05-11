import * as React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Common from '../../common';

type props = {
    navigation:Object,
}

const dummy_data = [
    {
        id:1,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:2,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: false,
    },
    {
        id:3,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: false,
    },
    {
        id:4,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: false,
    },
    {
        id:5,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:6,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:7,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: false,
    },
    {
        id:8,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:9,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:10,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:11,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:12,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: false,
    },
    {
        id:13,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:14,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:15,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:16,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
    {
        id:17,
        name:'xyz',
        userImage: Common.Images.User_dummy_Image,
        mobile_number:'9999999999',
        invite_user: true,
    },
]

const AddNewUser = ({navigation}:props) => {

    const showListData = ({item,index}) => {
        return(
            <View style={{paddingVertical:10, paddingHorizontal:15, flexDirection:'row', width:'100%', borderBottomColor:'#7a7a7a', borderBottomWidth:1}}>
                <View style={{height:50, width:50, borderRadius:20}}>
                    <Image source={item.userImage} style={{height:'100%', width:'100%', resizeMode:'contain'}} />
                </View>
                <View style={{flex:1, paddingLeft:10}}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'#111111'}}>{item.name}</Text>
                    <Text style={{fontSize:18, fontWeight:'500', color:'#7a7a7a'}}>{item.mobile_number}</Text>
                </View>
                { item.invite_user &&
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity>
                    <Text style={{fontSize:14, fontWeight:'bold', textDecorationLine:'underline', color:Common.Colors.Theme_Color}}>Invite User</Text>
                    </TouchableOpacity>
                </View>
                }
            </View>
        )
    }

    return(
        <View style={{flex:1, backgroundColor:Common.Colors.White_Color}}>
            <View style={{height:55, width:'100%', paddingHorizontal:5, alignItems: 'center', flexDirection:'row', backgroundColor:Common.Colors.White_Color, borderBottomWidth:2, borderBottomColor:'#7a7a7a'}}>
            <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{height: 45, width: 40}}>
          <Image
            style={{
              height: '100%',
              widht: '100%',
              resizeMode: 'contain',
              tintColor: '#111111',
            }}
            source={Common.Images.Back_Gray_Image}
          />
        </TouchableOpacity>
        <View style={{height: 40, flex: 1,paddingTop:3, paddingHorizontal: 10}}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 22, fontWeight: 'bold', color: '#111111'}}>
            {'Add New User'}
          </Text>
        </View>
            </View>
            <View style={{flex:1, backgroundColor:Common.Colors.White_Color}}>
                <FlatList 
                data={dummy_data}
                renderItem={showListData}
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default AddNewUser;