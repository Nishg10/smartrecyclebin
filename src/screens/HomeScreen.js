import React,{ useState }  from 'react';
import {signOut} from 'firebase/auth';
import authentication  from '../firebase'
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


  const {width} = Dimensions.get('screen');
  const HomeScreen = (props) => {

  const [isSignedIn,setIsSignedIn]=useState(false);
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const logoutHandler = () =>{
      
        signOut(authentication)
        .then(() => {
          console.log('User signed out!')
          setIsSignedIn(false);
          props.navigation.navigate("Login");
        });
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
    console.log("showHistory2");
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
          <Text style={style.headerTitle}>Home</Text>
          
        </View>
        <ListCategories />
        
        <View>
        <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsVerticalScrollIndicator={true}
            vertical
            numColumns={3}
            data={[{id:1,limitReached:'y'},{id:2,limitReached:'n'},{id:3,limitReached:'y'},{id:4,limitReached:'n'},
                  {id:5,limitReached:'y'},{id:6,limitReached:'y'},{id:7,limitReached:'n'},{id:8,limitReached:'y'},{id:9,limitReached:'n'},
                  {id:10,limitReached:'y'}
                  ]}
            renderItem={({item}) => <div>{item.id}<Icon name="delete"  style={style.categoryContainer} size={25} color= {item.limitReached=='y' ? 'red' : 'green'}/></div>}
          ></FlatList>
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
export default HomeScreen;
