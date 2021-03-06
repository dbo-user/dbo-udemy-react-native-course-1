import React, {useState} from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {

    const [password, setPassword] = useState('');
    
    return (
        <View>
            
            <Text style={styles.textStyle}>The Text Screen</Text>
            <Text style={styles.textStyle}>Enter Password:</Text>
            <TextInput 
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false} 
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
              />
            {password.length > 5 ? null : <Text>Password must be longer than 5 characters.</Text>}
            <Text style={styles.textStyle}>My password is {password}</Text>
             
        </View>
    ) // end return
}; // end const TextScreeen
  
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
  }); // end styles
  
export default TextScreen;