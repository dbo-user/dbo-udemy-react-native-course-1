
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
     const [red, setRed] = useState(0);
     const [green, setGreen] = useState(0);
     const [blue, setBlue] = useState(0);

     const setColor = (color, change) => {
         // color is either red, gree, blue
         // change is either +15 or -15
         switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
         } // end switch

     }// end setColor

    return (
        
        <View> 
            <Text style={styles.textStyle}>Square Color Screen</Text>
            <Text style={{marginTop:10}}></Text>
             <ColorCounter 
                    onIncrease = {() => setColor('red',  COLOR_INCREMENT)}
                    onDecrease = {() => setColor('red', -1 * COLOR_INCREMENT)}
                    color="Red" />  
             <ColorCounter 
                    onIncrease = {() => setColor('blue',  COLOR_INCREMENT)}
                    onDecrease = {() => setColor('blue', -1 * COLOR_INCREMENT)}
                    color="Blue" />
             <ColorCounter 
                    onIncrease = {() => setColor('green',  COLOR_INCREMENT)}
                    onDecrease = {() => setColor('green', -1 * COLOR_INCREMENT)}
                    color="Green" />
            <View style=
                {{height:150, width:150, marginTop:10, 
                    backgroundColor:`rgb(${red},${green},${blue})`}}>
            </View>
        </View>
        
      ); // end return
}; // end const SquareScreen


    
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
}); // end styles
    
export default SquareScreen;