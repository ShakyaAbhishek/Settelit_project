import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import Common from '../../common';
import Modal from 'react-native-modal';
import RNPickerSelect from 'react-native-picker-select';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type props = {
  navigation: Object,
};

const dummy_data = [
  {
    id: 1,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 2,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 3,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 4,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 5,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 6,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 7,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 8,
    transaction_type: 'Received',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
  {
    id: 9,
    transaction_type: 'Paid',
    date: '01 Jan',
    time: '03:30PM',
    message: 'this is paid transaction.',
    amount: '500',
    total_amount: '1500',
  },
];

type modalProps = {
  is_visible: Boolean,
  onPressClose: Object,
};

const FormModal = ({is_visible, onPressClose}: modalProps) => {
  const [modeData] = useState([
    {label: 'Cash', value: 'Cash'},
    {label: 'Bank (Chq/Trf)', value: 'Bank (Chq/Trf)'},
    {label: 'Credit Card', value: 'Credit Card'},
    {label: 'Digital Wallet/UPI', value: 'Digital Wallet/UPI'},
    {label: 'Sale', value: 'Sale'},
    {label: 'Purchase', value: 'Purchase'},
    {label: 'Sale Return', value: 'Sale Return'},
    {label: 'Purchase Return', value: 'Purchase Return'},
    {label: 'Adjustment', value: 'Adjustment'},
  ]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <Modal
      isVisible={is_visible}
      onSwipeComplete={onPressClose}
      useNativeDriverForBackdrop
      onBackButtonPress={onPressClose}
      swipeDirection={['down']}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomColor: '#e2e2e2',
            borderBottomWidth: 1,
            padding: 20,
          }}>
          <Text>Name</Text>
          <Text>9987536383</Text>
        </View>
        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', paddingBottom: 15}}>
            Payment Recieved / Paid
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text>Amount</Text>
            <View
              style={{
                borderWidth: 1,
                width: '50%',
                borderColor: 'grey',
                borderRadius: 6,
              }}>
              <Text
                style={{paddingVertical: 8, paddingLeft: 5}}
                onPress={showDatePicker}>
                mm//dd//yyy
              </Text>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text>Amount</Text>
            <View
              style={{
                borderWidth: 1,
                width: '50%',
                borderColor: 'grey',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Amount"
                style={{paddingVertical: 8, paddingLeft: 5}}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Mode</Text>
            <View
              style={{
                borderWidth: 1,
                width: '50%',
                borderColor: 'grey',
                borderRadius: 6,
              }}>
              <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                useNativeAndroidPickerStyle={false}
                style={pickerStyleing}
                items={modeData}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
            }}>
            <Text>Reason</Text>
            <View
              style={{
                borderWidth: 1,
                width: '50%',
                borderColor: 'grey',
                borderRadius: 6,
              }}>
              <TextInput
                placeholder="Reason"
                style={{paddingVertical: 8, paddingLeft: 5}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 1,
              borderTopColor: '#e2e2e2',
              paddingTop: 20,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={{backgroundColor: 'green', padding: 8, borderRadius: 6}}>
              <Text style={{color: 'white'}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: 'red', padding: 8, borderRadius: 6}}>
              <Text style={{color: 'white'}}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const ChatScreen = ({navigation}: props) => {
  const [show_modal, setshow_modal] = React.useState(false);

  const showListItem = ({item, index}) => {
    return (
      <View style={{marginTop: 15, marginBottom: 10}}>
        {item.transaction_type === 'Received' ? (
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              borderRadius: 10,
              padding: 10,
              backgroundColor: '#50AF58',
              alignSelf: 'flex-start',
            }}>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 14, fontWeight: 'bold', color: '#ffffff'}}
                numberOfLines={1}>
                {item.date}:{item.message}
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                  style={{fontSize: 12, fontWeight: 'bold', color: '#111111'}}>
                  {item.amount}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
                {item.total_amount}
              </Text>
            </View>
          </View>
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
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              borderRadius: 10,
              padding: 10,
              backgroundColor: '#3091F2',
              alignSelf: 'flex-end',
            }}>
            <View
              style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 14, fontWeight: 'bold', color: '#ffffff'}}
                numberOfLines={1}>
                {item.date}:{item.message}
              </Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                  style={{fontSize: 14, fontWeight: 'bold', color: '#111111'}}
                  numberOfLines={1}>
                  {item.amount}
                </Text>
              </View>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                allowFontScaling={false}
                style={{fontSize: 14, fontWeight: 'bold', color: '#ffffff'}}
                numberOfLines={1}>
                {item.total_amount}
              </Text>
            </View>
          </View>
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
          height: 55,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          borderBottomColor: 'gray',
          borderBottomWidth: 2,
        }}>
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
        {/* <View
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#111111',
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
        </View> */}
        <View style={{height: 40, flex: 1, paddingHorizontal: 10}}>
          <Text
            allowFontScaling={false}
            numberOfLines={1}
            style={{fontSize: 22, fontWeight: 'bold', color: '#111111'}}>
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
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <View style={{flex: 1, alignItems: 'flex-start'}}>
            <Text
              allowFontScaling={false}
              style={{fontSize: 12, fontWeight: 'bold', color: '#7a7a7a'}}>
              Varun Gupta - 9999999999
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text
              allowFontScaling={false}
              style={{fontSize: 12, fontWeight: 'bold', color: '#111111'}}>
              Balance: To Receive Rs.1,500
            </Text>
          </View>
        </View>
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
          backgroundColor: '#ffffff',
          borderTopWidth: 2,
          borderTopColor: 'gray',
        }}>
        <TouchableOpacity
          onPress={() => setshow_modal(true)}
          style={{
            height: 40,
            width: 150,
            borderRadius: 20,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#50AF58',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'lightgreen',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              allowFontScaling={false}
              style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>
              +
            </Text>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
            Received
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setshow_modal(true)}
          style={{
            height: 40,
            width: 150,
            borderRadius: 20,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#3091F2',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 25,
              width: 25,
              backgroundColor: 'red',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              allowFontScaling={false}
              style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff'}}>
              -
            </Text>
          </View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffffff'}}>
            Paid
          </Text>
        </TouchableOpacity>
      </View>
      <FormModal
        is_visible={show_modal}
        onPressClose={() => setshow_modal(false)}
      />
    </View>
  );
};

export default ChatScreen;

const pickerStyleing = StyleSheet.create({
  placeholder: {
    // color: '#05564d',
    // fontSize: hp('2%'),
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 20,
  },
  inputIOS: {
    color: '#000',
    // fontSize: hp('2%'),
    paddingVertical: 8,
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 6,
    paddingLeft: '5%',
    // height: 50,
  },
  inputAndroid: {
    color: '#000',
    // fontSize: hp('2%'),
    paddingVertical: hp('0.9%'),
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderRadius: 6,
    paddingLeft: '5%',
    // height: 50,
  },
});
