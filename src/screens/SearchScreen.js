import React,{ useState, useEffect } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = (searchTerm) => {
    const [term , setTerm] = useState('')
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
    try{
        const response = await yelp.get('/search',{
            params:{
                limit: 50,
                term : searchTerm,
                location: 'san jose'
            }
        })
            setResult(response.data.businesses)
        }catch(err){
            setErrorMessage('Something Went Wrong, Please Try Again')
        }  
    }

    useEffect(()=> {
        searchApi('pasta')
    }, [])

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