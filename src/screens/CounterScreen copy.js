
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // use hook function to manage counter
    const [counter, setCounter] = useState(0);
    return (
        
        <View> 
            <Text style={styles.textStyle}>Counter Screen</Text>
            <Text style={{marginTop:10}}></Text>
            <Button 
                title="Increase"
                onPress={() => {
                    setCounter(counter + 1);
                }}
            />
            <Text style={{marginTop:10}}></Text>
            <Button 
                title="Decrease"
                onPress={() => {
                    setCounter(counter - 1);
                }}
            />
            <Text style={{marginTop:10}}>Current Count: {counter}</Text>
        </View>
        
      ); // end return
}; // end const CounterScreen
    
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
}); // end styles
    
export default CounterScreen;