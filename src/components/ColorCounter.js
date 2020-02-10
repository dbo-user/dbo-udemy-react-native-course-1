
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
     
    return (
        
        <View> 
            
            <Text style={{marginTop:10}}>{color}</Text>
            <Button 
                title={`Increase ${color}`}
                onPress={() => {
                    onIncrease()
                }}
            />
            <Text/>
            <Button 
                title={`Decrease ${color}`}
                onPress={() => {
                    onDecrease()
                }}
            />
             
        </View>
        
      ); // end return
}; // end const ColorCounter
    
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
}); // end styles
    
export default ColorCounter;