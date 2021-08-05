import React,{ useState } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [term , setTerm] = useState('')
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async () => {
    try{
        const response = await yelp.get('/search',{
            params:{
                limit: 50,
                term,
                location: 'san jose'
            }
        })
            setResult(response.data.businesses)
        }catch(err){
            setErrorMessage('Something Went Wrong, Please Try Again')
        }  
    }

    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={searchApi}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {result.length} result</Text>
    </View>
    )
}


const styles =StyleSheet.create({})


export default SearchScreen