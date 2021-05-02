import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Common from '../../common';

type props = {
  navigation: Object,
}

const dummyData =[
  {
    id:1,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image ,
    message_read: false,
  },
  {
    id:2,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id:3,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id:4,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id:5,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id:6,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id:7,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id:8,
    name:'xyz',
    time:'2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
];

type addButtonProps = {
  onButtonPress: Object,
}

const AddButton = ({onButtonPress}:addButtonProps) => {
  return(
    <TouchableOpacity onPress={onButtonPress} style={{height:60, width:60, borderRadius:30, justifyContent:'center', alignItems:'center', backgroundColor:Common.Colors.Theme_Color, position:'absolute', bottom:'5%', right:'5%'}}> 
      <Text allowFontScaling={false} style={{fontSize:38, fontWeight:'bold', color:'#ffffff'}} >+</Text>
    </TouchableOpacity>
  )
}

const Home = ({navigation}:props) => {

  const showList = ({item, index}) => {
    return(
      <View style={{paddingVertical:10, paddingHorizontal:5, flexDirection:'row', width:'100%', backgroundcolor:'#ffffff', borderBottomWidth:1, borderBottomColor:'#e7e7e7e7'}}>
        <View style={{height:80, width:80, borderRadius:40}}>
          <Image style={{height:'100%', width:'100%', resizeMode:'contain'}} source={item.sender_image}  />
        </View>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('ChatScreen')} style={{flex:1, justifyContent:'space-between', paddingLeft:10}}>
          <Text allowFontScaling={false} numberOfLines={1} style={{fontSize:22, fontWeight:'800', color:'#111111'}}>{item.name}</Text>
          <Text allowFontScaling={false} numberOfLines={1} style={{fontSize:18, fontWeight:'400', color:'#7a7a7a7a'}}>{item.last_Transaction}</Text>
          <Text allowFontScaling={false} numberOfLines={1} style={{fontSize:12, fontWeight:'100', color:'#7a7a7a7a', textAlign:'right'}}>{item.time}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{flex:1}}>
      <View style={{height:55, width:'100%', backgroundColor:Common.Colors.Theme_Color, justifyContent:'center', alignItems:'center'}}>
          <Text allowFontScaling={false} style={{fontSize:22, fontWeight:'bold', color:'#ffffff'}}>SETTLEIT</Text>
      </View>
      <View style={{flex:1}}>
        <FlatList 
        data={dummyData}
        showsVerticalScrollIndicator={false}
        renderItem={showList}
        keyExtractor={item=>item.id}
        />
      </View>
      <AddButton onButtonPress={()=>navigation.navigate('AddNewUser')} />
    </View>
  );
};

export default Home;