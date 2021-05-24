import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Colors from '../../common/Colors';
import Common from '../../common';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CheckBox from 'react-native-check-box';
import {useDispatch, useSelector} from 'react-redux';
import * as signupAction from '../../redux/action/signupAction';

const Signup = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
    cellno: '',
  });
  const dispatch = useDispatch();

  const signupResponse = useSelector(
    (state) => state.LoginReducer.signupResponse,
  );

  useEffect(() => {
    if (Object.keys(signupResponse).length) {
      alert('Signup successfully');
      navigation.goBack();
      dispatch(signupAction.emptySignupData());
    }
  }, [signupResponse]);

  const signup = () => {
    let {email, cellno, password, name} = state;
    let data = {
      email: email,
      cellno: cellno,
      pwd: password,
      fname: name,
    };
    dispatch(signupAction.doSignup(data));
  };

  return (
    <ImageBackground
      source={Common.Images.Background_Image}
      style={{flex: 1}}
      imageStyle={{height: '100%', width: '100%', resizeMode: 'stretch'}}>
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
            <Text style={styles.loginText}>Signup</Text>
          </View>
          <View>
            <Text style={{color: '#ffffff'}}>email</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, email: e})}
                value={state.email}
              />
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Password</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, password: e})}
                value={state.password}
              />
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Mobile number</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, cellno: e})}
                value={state.cellno}
              />
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            <Text style={{color: '#ffffff'}}>Name</Text>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={(e) => setState({...state, name: e})}
                value={state.name}
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.loginBtn} onPress={signup}>
              <Text style={{color: 'white'}}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{color: Colors.White_Color}}>
                Already had Account ? click here to login
              </Text>
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
    color: '#ffffff',
  },
  headerText2: {
    width: 150,
    fontSize: 18,
    color: '#ffffff',
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
    color:'white'
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

export default Signup;
