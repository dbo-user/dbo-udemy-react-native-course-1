
import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state is equal to count: number
    // action is type: increment or decrement, payload: 1
    switch (action.type) {
        case 'increase':
             return { ...state, count: state.count + action.payload};
            
        case 'decrease':
            return {...state, count: state.count - action.payload};

        default:
            return state;
     } // end switch
} // end reducer

const CounterScreen = () => {
    
    const [state, dispatch] = useReducer(reducer,{count:0})
    
    return (
        
        <View> 
            <Text style={styles.textStyle}>Counter Screen</Text>
            <Text style={{marginTop:10}}></Text>
            <Button 
                title="Increase"
                onPress={() => {
                    dispatch({type:'increase', payload: 1})
                }}
            />
            <Text style={{marginTop:10}}></Text>
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({type:'decrease', payload: 1})
                }}
            />
            <Text style={{marginTop:10}}>Current Count: {state.count}</Text>
        </View>
        
      ); // end return
}; // end const CounterScreen
    
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
}); // end styles
    
export default CounterScreen;