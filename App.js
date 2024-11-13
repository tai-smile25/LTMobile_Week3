import React from 'react';
import {Text, View, Button, Image,StyleSheet} from 'react-native';


const YourApp = () => {
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(0, 204, 249, 1)',
      }}>
      <View
      style={{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
      source = {{uri:'https://picsum.photos/seed/picsum/200/300'}}
      style = {{height:100, width:100}}
      />
      
      
    </View>

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontWeight: "bold" }}>GROW</Text>
      <Text style={{ fontWeight: "bold" }}>YOUR BUSINESS</Text>

    </View>

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontWeight: "bold" }}>We will help you to grow your business using</Text>
      <Text style={{ fontWeight: "bold" }}>online server</Text>
    </View>

    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <Button title="LOGIN"></Button>
        <Button title="SIGN UP"></Button>

    </View>

    </View>

  );
};

export default YourApp;