/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
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
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [phoneNumbers, setPhoneNumbers] = useState('');
  const [message, setMessage] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default App;
