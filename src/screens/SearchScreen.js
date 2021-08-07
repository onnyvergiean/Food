import React,{ useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

const SearchScreen = (searchTerm) => {
    const [term , setTerm] = useState('')
    const [searchApi,result,errorMessage] = useResult()

    const filterResultByPrice = (price) => {
        return result.filter( results => {
            return results.price == price
        } )
    }
    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {result.length} result</Text>
        <ResultList result ={filterResultByPrice('$')} title='Cost Effective'/>
        <ResultList result ={filterResultByPrice('$$')} title='Bit Pricier'/>
        <ResultList result ={filterResultByPrice('$$$')} title='Big Spender'/>
    </View>
    )
}


const styles =StyleSheet.create({})


export default SearchScreen