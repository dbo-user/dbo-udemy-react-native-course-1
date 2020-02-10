
import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    // use hook function to manage colors
    const [colors, setColors] = useState([]);
    return (
        
        <View> 
            <Text style={styles.textStyle}>Color Screen</Text>
            <Text style={{marginTop:10}}></Text>
            <Button 
                title="Add a color"
                onPress={() => {
                    // make a copy of colors and add a new random color to it
                    setColors([...colors,randomRgb()]);
                }}
            />
            
            <FlatList // show the colors in a list
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    //element includes item which is an rgb color and index:0
                    return (
                        <View style=
                            {{height:100, width:100, marginTop:10, backgroundColor:item}}>
                        </View>
                    ); // end return
                }} // end renderItem

            />   
            <Text style={{marginTop:10}}></Text>   
        </View>
        
      ); // end return
}; // end const ColorScreen

// generate a random color between 0-255
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}; // end randomRgb
    
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
}); // end styles
    
export default ColorScreen;