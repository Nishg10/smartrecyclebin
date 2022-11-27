import React, { useState } from 'react';
import {View, Text, Touchable, TouchableOpacity, TextInput} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import { createUserWithEmailAndPassword } from "firebase/auth";
import authentication  from './firebase'
import {StyleSheet} from 'react-native';
import {db}  from './firebase'
import { doc, setDoc } from "firebase/firestore/lite"; 
const Signup = props => {
  
  const [isSignedIn,setIsSignedIn]=useState(false);
  const [firstname,setFirstname]=useState('');
  const [password,setPassword]=useState('');
  const [lastname,setLastname]=useState('');
  const [confirmpassword,setConfirmPassword]=useState('');
  const [contact,setContact]=useState('');
  const [email,setEmail]=useState('');
  
  const signupHandler = async () =>{
    
    //alert("Signup called");
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        //alert('Account created');
        setIsSignedIn(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      await setDoc(doc(db, "users", email), {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone:contact,
        
      });
    //alert('Account created');
    props.navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Firstname" onChangeText={text=>setFirstname(text)} value={firstname}  secureTextEntry={false}/>
          <Field placeholder="Lastname" onChangeText={text=>setLastname(text)} value={lastname}  secureTextEntry={false}/>
          <Field placeholder="Contact" onChangeText={text=>setContact(text)} value={contact}  secureTextEntry={false}/>
          <Field placeholder="Email" keyboardType={'email-address'}  onChangeText={text=>setEmail(text)} value={email}  secureTextEntry={false}/>
          <Field placeholder="Password" onChangeText={text=>setPassword(text)} value={password} secureTextEntry={true} />
          <Field placeholder="Confirm Password" onChangeText={text=>setConfirmPassword(text)}  value={confirmpassword} secureTextEntry={true} />
          <View
            style={{    
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent :"center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 16}}>
              and {" "}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={signupHandler }
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};



const style = StyleSheet.create({
  
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
  },
  contentTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  
  rmCardImage: {
    backgroundColor: '#393B45',
    height: 'auto',
    width: '80%',
    borderRadius: 25,
    padding: 15,
    margin:8,
    alignItems:'center',
    height: '100%',
  },

  card:{
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
    height: '100%',
  },

  h1: {
    width: '100%',
    color: 'white',
    fontWeight: 800,
    margin: 0,
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent:'center',
  },

imagecrop: {
	display: 'block',
	position: 'relative',
	backgroundColor: '#E6EBEE',
	width: 150,
	height: 150,
	margin: '0',
	marginTop: 30,
	overflow: 'hidden',
	borderRadius: '50%',
  
},

avatar: {
	display: 'inline',
	height: 230,
	width: 'auto',
	marginLeft: '34',
},

stats: {
	display: 'flex',
	flexDirection: 'column',
	height: 'auto',
	width: 280,
  color:'white',
	justifyContent: 'space-between',
	alignItems: 'center',
	margin: '0',
	fontWeight: 500,
},

col: {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	width: 'auto',
},

stat: {
	fontSize: 18,
	margin: 0,
  padding:10,
  textAlign:'left',
},


buttons :{
	display: 'flex',
	margin: '0',
	justifyContent: 'space-between',
	width: 280,
},

button: {
	display: 'block',
	position: 'relative',
	padding: '10',
	width: '50%',
	margin: '30',
	borderRadius: 25,
	border: 'none',
	fontSize: 20,
	fontWeight: 500,
	backgroundColor: '#4069E2',
	color: '#E6EBEE',
},

  
});

export default Signup;
