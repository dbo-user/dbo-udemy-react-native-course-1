
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>
                Image Screen
            </Text>
            <ImageDetail title='Forest' imageSource={require('../../assets/forest.jpg')}/>
            <ImageDetail title='Beach' imageSource={require('../../assets/beach.jpg')}/>
            <ImageDetail title='Mountain' imageSource={require('../../assets/mountain.jpg')}/>
        </View>
        
      ); // end return
}; // end const ImageScreen
    
const styles = StyleSheet.create({
    textStyle: {
    marginVertical: 50
    }
}); // end styles
    
export default ImageScreen;