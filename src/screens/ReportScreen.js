import React from 'react';
import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import places from '../consts/places';

const {width} = Dimensions.get('screen');
const ReportScreen = (props) => {
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


  const RecommendedCard = ({place}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          <Text style={{color: COLORS.white, fontSize: 13}}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="home" size={28} color={COLORS.white} onPress={showHome}/>
        <Text  style={style.sectionTitle}>Smart Recycle Bin</Text>
        <Icon name="logout" size={28} color={COLORS.white} onPress={logoutHandler} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 70,
            paddingHorizontal: 20,
          }}>
          <Text style={style.headerTitle}>Reports</Text>
          {/* <View style={{flex: 1}}>
            
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{color: COLORS.grey}}
              />
            </View>
        </View> */}
        </View>
        <ListCategories />
        
        <View>
          <Text style={style.contentTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
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
  
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default ReportScreen;
