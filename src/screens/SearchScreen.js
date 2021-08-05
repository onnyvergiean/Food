import React,{ useState, useEffect } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';

const SearchScreen = (searchTerm) => {
    const [term , setTerm] = useState('')
    const [searchApi,result,errorMessage] = useResult()

    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {result.length} result</Text>
    </View>
    )
}


const styles =StyleSheet.create({})


export default SearchScreen