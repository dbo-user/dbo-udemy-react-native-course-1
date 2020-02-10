import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {

    const myName = "David";
    
    return (
        <View>
            <Text style={styles.textStyle}>The Text Screen</Text>
            <TextInput 
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false} 
              />
            
        </View>
    )
  };
  
  const styles = StyleSheet.create({
    textStyle: {
      fontSize: 30
    },
    textInput: {
      fontSize: 20,
      margin: 15,
      borderColor: 'black',
      borderWidth: 1
    }
  });
  
  export default TextScreen;