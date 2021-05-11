import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../common/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';

const Login = ({navigation}) => {
  return (
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
          <Text>Username</Text>
          <View>
            <TextInput style={styles.input} />
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <Text>Password</Text>
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
            rightTextStyle={{color: Colors.Theme_Color}}
            checkBoxColor={Colors.Theme_Color}
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
            <Text style={{color: Colors.Theme_Color}}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerContainer: {},
  headerText1: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerText2: {
    width: 150,
    fontSize: 18,
  },
  loginText: {
    textAlign: 'center',
    color: Colors.Theme_Color,
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
    color: Colors.Theme_Color,
  },
});

export default Login;
