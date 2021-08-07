import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultList = ({title, result}) =>{
    return(
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>Result: {result.length}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
    },
})


export default ResultList