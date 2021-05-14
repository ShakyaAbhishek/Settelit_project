import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import  Icon  from 'react-native-vector-icons/Feather';
import Common from '../../common';

type props = {
  navigation: Object,
};

const dummyData = [
  {
    id: 1,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 2,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 3,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 4,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 5,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 6,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 7,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
  {
    id: 8,
    name: 'xyz',
    time: '2 hours ago',
    last_Transaction: 'You recived $50000.',
    sender_name: 'abcd',
    sender_image: Common.Images.User_dummy_Image,
    message_read: false,
  },
];

const dummy_data1 = [
  {
    id: 1,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Anoop Dudeja',
  },
  {
    id: 2,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Sujeet Singh',
  },
  {
    id: 3,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Anoop Dudeja',
  },
  {
    id: 4,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Anoop Dudeja',
  },
  {
    id: 5,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Sujeet Singh',
  },
  {
    id: 6,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Anoop Dudeja',
  },
  {
    id: 7,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Sujeet Singh',
  },
  {
    id: 8,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Sujeet Singh',
  },
  {
    id: 9,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
    name: 'Anoop Dudeja',
  },
];

type addButtonProps = {
  onButtonPress: Object,
};

const AddButton = ({onButtonPress}: addButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onButtonPress}
      style={{
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#50AF58',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
      }}>
      <Text
        allowFontScaling={false}
        style={{fontSize: 38, fontWeight: 'bold', color: '#ffffff'}}>
        +
      </Text>
    </TouchableOpacity>
  );
};

const Home = ({navigation}: props) => {
  const showList = ({item, index}) => {
    return (
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 5,
          flexDirection: 'row',
          width: '100%',
          backgroundcolor: '#ffffff',
          borderBottomWidth: 1,
          borderBottomColor: '#e7e7e7e7',
        }}>
        <View style={{height: 80, width: 80, borderRadius: 40}}>
          <Image
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
            source={item.sender_image}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ChatScreen')}
          style={{flex: 1, justifyContent: 'space-between', paddingLeft: 10}}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 22, fontWeight: '800', color: '#111111'}}>
            {item.name}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 18, fontWeight: '400', color: '#7a7a7a7a'}}>
            {item.last_Transaction}
          </Text>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{
              fontSize: 12,
              fontWeight: '100',
              color: '#7a7a7a7a',
              textAlign: 'right',
            }}>
            {item.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const showListItem = ({item, index}) => {
    return (
      <View style={{marginTop: 15, marginBottom: 10}}>
        {item.transaction_type === 'Received' ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ChatScreen')}
            style={{
              backgroundColor: '#50AF58',
              width: '80%',
              borderRadius: 10,
              alignSelf: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                alignSelf: 'flex-start',
                borderBottomWidth: 1,
                borderBottomColor: '#e7e7e7',
              }}>
              <View style={{flex: 2}}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 14, fontWeight: 'bold', color: '#ffffff'}}
                  numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#111111',
                    }}>
                    {item.amount}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
                  {item.total_amount}
                </Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 14, fontWeight: '500', color: '#ffffff'}}>
                {item.date}:{item.message}
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          // <View
          //   style={{
          //   //   height: 100,
          //     width: '80%',
          //     alignSelf: 'flex-start',
          //     backgroundColor: Common.Colors.Theme_Color,
          //     borderColor: Common.Colors.White_Color,
          //     borderBottomWidth: 1,
          //     padding:10,
          //     borderRadius:20
          //   }}>
          //   <Text style={{fontSize:20, fontWeight:'bold', color:Common.Colors.White_Color}}>Recieved Amount:{item.amount}</Text>
          //   <Text style={{fontSize:20, fontWeight:'bold', color:Common.Colors.White_Color}}>Total Amount:{item.total_amount}</Text>
          //   <View>
          //       <Text style={{fontSize:14, fontWeight:'500', color:Common.Colors.White_Color}}>Description: {item.message}</Text>
          //   </View>
          //   <View>
          //       <Text style={{fontSize:10, fontWeight:'500', textAlign:'right', color:Common.Colors.White_Color}}>{item.time} {item.date}</Text>
          //   </View>
          // </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ChatScreen')}
            style={{
              backgroundColor: 'white',
              width: '80%',
              borderRadius: 10,
              alignSelf: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                borderBottomWidth: 1,
                borderBottomColor: '#e7e7e7',
              }}>
              <View style={{flex: 2}}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 14, fontWeight: 'bold', color: '#111111'}}
                  numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#e7e7e7',
                    paddingVertical: 5,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 14, fontWeight: 'bold', color: '#111111'}}
                    numberOfLines={1}>
                    {item.amount}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 14, fontWeight: 'bold', color: '#111111'}}
                  numberOfLines={1}>
                  {item.total_amount}
                </Text>
              </View>
            </View>
            <View style={{padding: 10}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 14, fontWeight: '500', color: '#111111'}}>
                {item.date}:{item.message}
              </Text>
            </View>
          </TouchableOpacity>
          // <View
          //   style={{
          //     height: 100,
          //     width: '80%',
          //     alignSelf: 'flex-end',
          //     backgroundColor: '#e7e7e7',
          //     borderColor: Common.Colors.White_Color,
          //     borderBottomWidth: 1,
          //     padding:10,
          //     borderRadius:20
          //   }}>
          //   <Text style={{fontSize:20, fontWeight:'bold', color:"#111111"}}>Paid Amount:{item.amount}</Text>
          //   <Text style={{fontSize:20, fontWeight:'bold', color:'#111111'}}>Total Amount:{item.total_amount}</Text>
          //   <View>
          //       <Text style={{fontSize:14, fontWeight:'500', color:'#111111'}}>Description: {item.message}</Text>
          //   </View>
          //   <View>
          //       <Text style={{fontSize:10, fontWeight:'500', textAlign:'right', color:'#111111'}}>{item.time} {item.date}</Text>
          //   </View>
          // </View>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
         flexDirection:'row',
         justifyContent:'space-between',
         paddingHorizontal:20,
         paddingVertical:10
        }}>
       <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
         <Icon name = 'menu' size={30} />
       </TouchableOpacity>
       <View>
         <Image source={require('../../assetes/images/logo.png')} style={{width:40, height:40}} />
       </View>
       <TouchableOpacity>
         <Icon name = 'search' size={30} />
       </TouchableOpacity>
      </View>
      <View style={{flex: 1, paddingHorizontal: 5}}>
        <FlatList
          data={dummy_data1}
          showsVerticalScrollIndicator={false}
          renderItem={showListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <AddButton onButtonPress={() => navigation.navigate('AddNewUser')} />
    </View>
  );
};

export default Home;
