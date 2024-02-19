/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import { REACT_APP_TELEGRAM_API_KEY } from '@env'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Linking,
  Image,
  Pressable,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [message, setMessage] = useState('');
  const [splash, setSplash] = useState(true)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const sendWA = (number: string, message: string) => {
    Linking.openURL(`https://web.whatsapp.com/send?phone=${number}&text=${encodeURI(message)}`)
  } 

  return (
    <SafeAreaView>
      <ScrollView style={styles.sectionContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}> Bulk Message Form </Text>
        <View style={styles.formContainer}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            placeholder="List of phone number"
            onChangeText={text => setPhoneNumbers(text)}
            value={phoneNumbers}
            style={styles.input}
          />
          <TextInput
            placeholder="Message"
            style={styles.input}
            onChangeText={setMessage}
            value={message}
          />
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText} onPress={() => sendWA(phoneNumbers, message)}>Submit</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const Settings = ({route, navigation}) => {

  const {name, location} = route.params

  return(
    <SafeAreaView>
      <View>
        <View style={setting.header}>
          <View style={setting.headerContent}>
            <View style={{ flex: 1 }}>
              <Text style={setting.name}>Welcome</Text>
              <Text style={setting.userInfo}>{name}</Text>
            </View>
            <View>
              <MaterialCommunityIcons name='account' color={'black'} size={50}/>
            </View>
          </View>
        </View>

        <View style={setting.body}>
          <Pressable style={setting.RectangleShapeView}>
            <Text style={setting.headtText}>Office location</Text>
            <Text style={setting.SubjectText}>{location}</Text>
          </Pressable>
          <Pressable style={setting.RectangleShapeView}>
            <Text style={setting.headtText}>Date</Text>
            <Text style={setting.SubjectText}>19 Feb, 2024 </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const Signin = ({navigation}) =>{
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")

  return(
    <SafeAreaView>
      <ScrollView style={styles.sectionContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}> Login </Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Nama"
            onChangeText={(item) => setName(item)}
            value={name}
            style={styles.input}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            onChangeText={(item) => setLocation(item)}
            value={location}
          />
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate("Tabs", {
            screen: "Profile", 
            params: {
              name: name,
              location: location
            }
        })}>Login</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const Tabs = ({navigation}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ }) => (
            <MaterialCommunityIcons name='home' color={'black'} size={20} />
          ),
        }} />
        <Tab.Screen name="Profile" component={Settings} options={{
          tabBarIcon: ({ }) => (
            <MaterialCommunityIcons name='account' color={'black'} size={20} />
          ),
          headerRight: ({}) =>(
            <Button title='Logout' onPress={() =>navigation.goBack()}/>
          )
        }} />
      </Tab.Navigator>
  )
}

export default function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Signin" // Add this to set initial screen
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  formContainer: {
    gap: 15,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: '#378fe9',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


const setting = StyleSheet.create({
  header: {
    backgroundColor: `#378fe9`,
    width: "100%",
    height: 150
  },

  headerContent: {
    padding: 30,
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
  },
  location: {
    borderColor: "white",
    width: 10,
    height: 10,
  },
  hamburger: {
    borderColor: "white",
    width: 10,
    height: 10,
  },
  name: {
    fontSize: 22,
    color: "black",
    fontWeight: "600",
    fontFamily: "Helvetica"
  },
  headtText: {
    fontFamily: "Helvetica",
    color: "grey",
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 10
  },
  SubjectText: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Helvetica",
    marginLeft: 20,
    marginTop: 10
  },
  userInfo: {
    fontSize: 20,
    color: "white",
    fontWeight: "600"
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#3B525F",
    borderRadius: 10,
    width: 200,
    height: 50,
    alignItems: "center",
    padding: 6,
    elevation: 3
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center"
  },
  text: {
    color: "white",
    margin: 10
  },
  RectangleShapeView: {
    marginTop: 20,
    width: "80%",
    height: 80,
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    elevation: 3
  }
});