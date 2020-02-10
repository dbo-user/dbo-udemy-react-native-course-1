import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// could use props but instead of loading the entire props object just use it's navigation property
const HomeScreen = ({navigation}) => {
  return (
    <View style={{margin:20}}>
        <Text style={styles.textStyle}>The Home Screen</Text>
        <Text style={styles.buttonStyle}></Text>
        <Button 
            onPress ={() => navigation.navigate('Components')}
            title="Go to Components Demo"
        />
        <Text style={styles.buttonStyle}></Text>
        <Button
            onPress={() => navigation.navigate('List')}
            title="Go to List Demo"
        /> 
        <Text style={styles.buttonStyle}></Text>
        <Button
            onPress={() => navigation.navigate('Image')}
            title="Go to Image Demo"
        /> 
        <Text style={styles.buttonStyle}></Text>
        <Button
            onPress={() => navigation.navigate('Counter')}
            title="Go to Counter Demo"
        /> 
        <Text style={styles.buttonStyle}></Text>
        <Button
            onPress={() => navigation.navigate('Color')}
            title="Go to Color Demo"
        /> 
        <Text style={styles.buttonStyle}></Text>
        <Button
            onPress={() => navigation.navigate('Square')}
            title="Go to Square Color Demo"
        /> 
        <Text style={styles.buttonStyle}></Text>
        <Button
            onPress={() => navigation.navigate('Text')}
            title="Go to Text Demo"
        /> 
       {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
              <Text>Go to List Component</Text>
        </TouchableOpacity>
        */}
    </View>
    ); // end return
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }, 
  buttonStyle: {
    marginTop: 10
  }
});

export default HomeScreen;
