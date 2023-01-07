import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <Text style={styles.appname}>Unit Converter</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={styles.UIbutton}>Lets Start</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  UIbutton: {
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    padding: 5,
    backgroundColor: 'black',
  },
  appname: {
    margin: 20,
    fontSize: 35,
    fontWeight: 'bold',
  },
});
export default Home;

// ... other code from the previous section
