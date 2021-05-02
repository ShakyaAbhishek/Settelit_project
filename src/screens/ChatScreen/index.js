import * as React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import Common from '../../common';
import Modal from 'react-native-modal';
type props = {
  navigation: Object,
};

const dummy_data = [
  {
    id: 1,
    transaction_type: 'Paid',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 2,
    transaction_type: 'Received',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 3,
    transaction_type: 'Paid',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 4,
    transaction_type: 'Paid',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 5,
    transaction_type: 'Received',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 6,
    transaction_type: 'Paid',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 7,
    transaction_type: 'Received',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 8,
    transaction_type: 'Received',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 9,
    transaction_type: 'Paid',
    date: '01 jan 2021',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
];

type modalProps = {
 is_visible: Boolean,
 onPressClose: Object,
}

const FormModal = ({is_visible, onPressClose}:modalProps) => {
    return(
        <Modal isVisible={is_visible}
        onSwipeComplete={onPressClose}
        useNativeDriverForBackdrop
        swipeDirection={['down']}
        >
            <View style={{flex:1, backgroundColor:'red'}}>

            </View>
        </Modal>
    )
}

const ChatScreen = ({navigation}: props) => {

    const [show_modal, setshow_modal] = React.useState(false);

  const showListItem = ({item, index}) => {
    return (
      <View style={{marginTop:15, marginBottom:10}}>
        {item.transaction_type === 'Received' ? (
          <View
            style={{
            //   height: 100,
              width: '80%',
              alignSelf: 'flex-start',
              backgroundColor: Common.Colors.Theme_Color,
              borderColor: Common.Colors.White_Color,
              borderBottomWidth: 1,
              padding:10,
              borderRadius:20
            }}>
            <Text style={{fontSize:20, fontWeight:'bold', color:Common.Colors.White_Color}}>Recieved Amount:{item.amount}</Text>
            <Text style={{fontSize:20, fontWeight:'bold', color:Common.Colors.White_Color}}>Total Amount:{item.total_amount}</Text>
            <View>
                <Text style={{fontSize:14, fontWeight:'500', color:Common.Colors.White_Color}}>Description: {item.message}</Text>
            </View>
            <View>
                <Text style={{fontSize:10, fontWeight:'500', textAlign:'right', color:Common.Colors.White_Color}}>{item.time} {item.date}</Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              height: 100,
              width: '80%',
              alignSelf: 'flex-end',
              backgroundColor: '#e7e7e7',
              borderColor: Common.Colors.White_Color,
              borderBottomWidth: 1,
              padding:10,
              borderRadius:20
            }}>
            <Text style={{fontSize:20, fontWeight:'bold', color:"#111111"}}>Paid Amount:{item.amount}</Text>
            <Text style={{fontSize:20, fontWeight:'bold', color:'#111111'}}>Total Amount:{item.total_amount}</Text>
            <View>
                <Text style={{fontSize:14, fontWeight:'500', color:'#111111'}}>Description: {item.message}</Text>
            </View>
            <View>
                <Text style={{fontSize:10, fontWeight:'500', textAlign:'right', color:'#111111'}}>{item.time} {item.date}</Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 55,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: Common.Colors.Theme_Color,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{height: 45, width: 40}}>
          <Image
            style={{
              height: '100%',
              widht: '100%',
              resizeMode: 'contain',
              tintColor: '#ffffff',
            }}
            source={Common.Images.Back_Gray_Image}
          />
        </TouchableOpacity>
        <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ffffff',
          }}>
          <Image
            style={{
              height: '100%',
              widht: '100%',
              borderRadius: 20,
              resizeMode: 'contain',
            }}
            source={Common.Images.User_dummy_Image}
          />
        </View>
        <View style={{height: 40, flex: 1, paddingHorizontal: 10}}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 22, fontWeight: 'bold', color: '#ffffff'}}>
            {'xyz'}
          </Text>
        </View>
        <TouchableOpacity style={{width: 40, height: 30}}>
          <Image
            style={{
              height: '100%',
              width: '100%',
              resizeMode: 'contain',
              tintColor: '#111111',
            }}
            source={Common.Images.ThreeDot_Image}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Common.Colors.White_Color,
          paddingHorizontal: 10,
        }}>
        <FlatList
          data={dummy_data}
          renderItem={showListItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          height: 55,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor:'#ffffff'
        }}>
        <TouchableOpacity
        onPress={()=>setshow_modal(true)}
          style={{
            height: 40,
            width: 150,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
            Received
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>setshow_modal(true)}
          style={{
            height: 40,
            width: 150,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
            Paid
          </Text>
        </TouchableOpacity>
      </View>
      <FormModal is_visible={show_modal} onPressClose={()=>setshow_modal(false)} />
     </View>
  );
};

export default ChatScreen;
