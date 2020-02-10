
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>
                Image Screen
            </Text>
            <ImageDetail 
                title='Forest' 
                imageSource={require('../../assets/forest.jpg')} 
                score={9}
            />
            <ImageDetail 
                title='Beach'
                imageSource={require('../../assets/beach.jpg')}
                score={7}
             />
            <ImageDetail 
                title='Mountain' 
                imageSource={require('../../assets/mountain.jpg')}
                score={10}
            />
        </View>
        
      ); // end return
}; // end const ImageScreen
    
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 20,
        fontSize: 30
    }
}); // end styles
    
export default ImageScreen;