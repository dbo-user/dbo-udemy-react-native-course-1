import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// could use props but instead of loading the entire props object just use it's navigation property
const HomeScreen = (navigation) => {
  return (
    <View>
        <Text style={styles.text}>The Home Screen</Text>
        <Button 
            onPress={() => navigation.navigate('Components')}
            title="Go to Components Demo"
        />
        <Button 
            onPress={() => navigation.navigate('List')}
            title="Go to List Demo"
        /> 
       {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
              <Text>Go to List Component</Text>
        </TouchableOpacity>
        */}
    </View>
    ); // end return
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
