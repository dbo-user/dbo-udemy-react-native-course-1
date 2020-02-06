
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const ImageDetail = props => {
    return (
        
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
        
      ); // end return
}; // end const ImageDetail
    
const styles = StyleSheet.create({
    textStyle: {
    marginVertical: 50
    }
}); // end styles
    
export default ImageDetail;