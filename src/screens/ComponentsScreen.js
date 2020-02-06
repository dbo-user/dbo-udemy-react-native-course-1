import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

    const myName = "David";
    
    return (
        <View>
            <Text style={styles.textStyle}>The Components Screen</Text>
            <Text style={styles.textStyleName}>My name is {myName}</Text>
        </View>
    )
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30
    },
    textStyleName: {
      fontSize: 20
    }
  });
  
  export default ComponentsScreen;