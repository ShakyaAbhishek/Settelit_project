import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import Colors from '../../common/Colors';
import Common from '../../common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={Common.Images.Background_Image} style={{flex:1}} imageStyle={{height:'100%', width:'100%', resizeMode:'stretch'}}>
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText1}>Settle.ac</Text>
          <Text style={styles.headerText2}>
            Social Messanger for maintaining accounts amoung friends and
            business
          </Text>
        </View>
        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View>
          <Text style={{color:'#ffffff'}}>Username</Text>
          <View>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{color:'#ffffff'}}>Password</Text>
          <View>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={styles.container2}>
          <CheckBox
            style={{flex: 0.7, padding: 10}}
            onClick={() => {
              //   this.setState({
              //     isChecked: !this.state.isChecked,
              //   });
            }}
            isChecked={true}
            rightText={'Remember Me'}
            rightTextStyle={{color: Colors.White_Color}}
            checkBoxColor={Colors.White_Color}
          />
          <TouchableOpacity>
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{color: 'white'}}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: Colors.White_Color}}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor:'#42206C'
  },
  headerContainer: {},
  headerText1: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#ffffff'
  },
  headerText2: {
    width: 150,
    fontSize: 18,
    color:'#ffffff',
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    color: Colors.White_Color,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    borderBottomWidth: 3,
    paddingVertical: 10,
    borderBottomColor: '#e2e2e2',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginVertical: 20,
  },
  forgotText: {
    color: Colors.White_Color,
  },
});

export default Login;
