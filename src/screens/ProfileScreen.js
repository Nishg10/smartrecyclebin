import React from 'react';
import auth from '@react-native-firebase/auth';
import Btn from '../Btn';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import profiledata from '../consts/profiledata';
import {collection,getDocs} from 'firebase/firestore/lite'
import {db}  from '../firebase'

const {width} = Dimensions.get('screen');
const ProfileScreen = (props) => {
  const logoutHandler = () =>{
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }
  const showHome = () =>{
    console.log("Home");
    props.navigation.navigate("Home");
  }
  const showProfile = () =>{
    console.log("showprofile1");
    props.navigation.navigate("Profile");
  }
  const showBucketInfo = () =>{
    console.log("showBucketInfo");
    props.navigation.navigate("BucketInfo");
  }
  const showHistory = () =>{
    console.log("showHistory");
    props.navigation.navigate("History");
  }
  const showReport = () =>{
    console.log("showReport");
    props.navigation.navigate("Report");
  }
  const showEditProfileScreen = () =>{
    console.log("EditProfileScreen");
    props.navigation.navigate("EditProfileScreen");
  }

  const categoryIcons = [
    <Icon name="person" size={25} color={COLORS.primary} onPress={showProfile}/>,
    <Icon name="delete" size={25} color={COLORS.primary} onPress={showBucketInfo} />,
    <Icon name="history" size={25} color={COLORS.primary} onPress={showHistory} />,
    <Icon name="timeline" size={25} color={COLORS.primary} onPress={showReport} />,
  ];
  const ListCategories = () => {
    return (
      <View style={style.categoryContainer}>
        {categoryIcons.map((icon, index) => (
          <View key={index} style={style.iconContainer}>
            {icon}
          </View>
        ))}
      </View>
    );
  };

  
  const RecommendedCard = ({profiledata}) => {
    return (
          
      <div style={style.rmCardImage}>
        <div style={style.card}>
        <h1 style={style.h1}>John Doe</h1>
        <div style={style.imagecrop}>
          <img style={style.avatar} src="https://drive.google.com/uc?id=1EVA3KUBLxCXF2EGmTf4LUB8F4yAvBrjl"></img>
        </div>
        <div style={style.stats}>
          <div  style={style.col}>
            <p style={style.stat}><Icon name="person" size={28} color={COLORS.white}></Icon></p>
            <p style={style.stat}>1234</p>
          </div>
          <div style={style.col}>
            <p style={style.stat}><Icon name="email" size={28} color={COLORS.white}></Icon></p>
            <p style={style.stat}>john@gmail.com</p>
          </div>
          <div style={style.col}>
            <p style={style.stat}><Icon name="phone" size={28} color={COLORS.white}></Icon></p>
            <p style={style.stat}>+44 77766688</p>
          </div>
        </div>
        <div style={style.buttons}>
        <Btn style={style.button} bgColor="white" btnLabel="Edit" Press={showEditProfileScreen} />
          
        </div>
        </div>
        
      </div>
        
    );
  };

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="home" size={28} color={COLORS.white} onPress={showHome}/>
        <Text style={style.sectionTitle}>Smart Recycle Bin</Text>
        <Icon name="logout" size={28} color={COLORS.white} onPress={logoutHandler} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 70,
            paddingHorizontal: 20,
          }}>
          <Text style={style.headerTitle}>My Profile</Text>
          
        </View>
        <ListCategories />
        
        <View>
          
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            vertical
            showsVerticalScrollIndicator={true}
            data={profiledata}
            renderItem={({item}) => <RecommendedCard profiledata={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
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

msg:{
	backgroundColor: '#E6EBEE',
	color: '#393B45',
},
label: {
	margin: 0,
}
  
});
export default ProfileScreen;
