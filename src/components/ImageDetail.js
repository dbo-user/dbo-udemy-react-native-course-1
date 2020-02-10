
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return (
        
        <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
        
      ); // end return
}; // end const ImageDetail
    
const styles = StyleSheet.create({
    textStyle: {
    marginVertical: 50
    }
}); // end styles
    
export default ImageDetail;