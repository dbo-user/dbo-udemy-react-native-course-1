import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Friend 1'},
        {name: 'Friend 2'},
        {name: 'Friend 3'},
        {name: 'Friend 4'},
        {name: 'Friend 5'},
        {name: 'Friend 6'},
        {name: 'Friend 7'},
        {name: 'Friend 8'},
        {name: 'Friend 9'}
    ]; 

    return (
        <FlatList 
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                //element includes item {name:'Friend 1'} and index:0
                return (
                    <Text style={styles.textStyle}>
                        {item.name}
                    </Text>
                );
            } // end renderItem

            }/> // end FlatList

        
        
      ); // end return
}; // end const ListScreen
    
const styles = StyleSheet.create({
    textStyle: {
    marginVertical: 50
    }
}); // end styles
    
export default ListScreen;