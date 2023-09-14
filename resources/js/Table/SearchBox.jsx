//backspace ma optiminzation?
import { useEffect, useState } from "react";
import axios from "axios";
//states of the search SearchBox
//Pure state the untouched one
//Garbage state touched but never connected
//Used state first connection
const SearchBox = ({ response, searchLink, updateResponse, mainResponse }) => {
    //state of the search Box
    const [searchState, changeSearchState] = useState('pure');

    //event listening
    const [searchQuery, setSearchQuery] = useState('')
    const [backupResponse, setBackUpResponse] = useState({ response: undefined, key: '' })
    const handleSearch = (value) => {
        setSearchQuery(value)
    }
    useEffect(() => {
        filterQuery(searchQuery)
    }, [searchQuery])

    //fetchResponse
    async function fetchData(query) {
        if (query === '') {
            return
        }
        if (query === backupResponse.key) {
            updateResponse(backupResponse.response)
            console.log("backup bata aayo")
            return
        }
        const url = searchLink + query;
        try {
            const responseData = await axios.get(url);
            updateResponse(responseData)
            setBackUpResponse({ response: responseData, key: query })
        } catch (error) {

        }
    }

    //filter function
    const filterQuery = (value) => {
        setFilteredQuery(value.trim())
    }
    const [filteredQuery, setFilteredQuery] = useState('')

    useEffect(() => {
        changeSearchState(
            (searchState === 'pure' && filteredQuery !== '') ? 'connect' :
                (searchState === 'connect' && filteredQuery === '') ? 'pure' :
                    (searchState === 'recycle' && filteredQuery === '') ? 'pure' : // Add this line
                        'recycle'
        );
    }, [filteredQuery]);
    // useEffect(() => {
    //   //managing the state according to fileter query
    //   if (searchState === 'pure') {
    //     if (filteredQuery !== '') {
    //       changeSearchState('connect')
    //     }
    //   }
    //   if (searchState === 'connect') {
    //     (filteredQuery !== '') ?
    //       changeSearchState('recycle') : changeSearchState('pure')
    //   }
    //   if (searchState === 'recycle') {
    //     if (filteredQuery === '') {
    //       changeSearchState('pure')
    //     }
    //   }
    // }, [filteredQuery])
    //
    useEffect(() => {
        console.log(searchState)
        if (searchState === 'pure') {
            console.log('pure')
            updateResponse(mainResponse)
        }
        if (searchState === 'connect') {
            fetchData(filteredQuery)
        }
    }, [searchState])

    useEffect(() => {
        if (searchState === "recycle") {
            recycleData(filteredQuery)
        }

    }, [filteredQuery, searchState])
    useEffect(() => {
        if (backupResponse) {

            console.log(backupResponse.response)

        }

    }, [backupResponse])
    //recycling the filteredQuery
    const recycleData = (query) => {
        console.log("recycling")
        updateResponse(recycle(backupResponse.response))
    }




    const recycle = (object) => {
        if (typeof object === 'undefined') {
            return
        }
        let filteredData = object.data.filter((item) => {
            // Return the result of the condition
            return item.username.startsWith(filteredQuery);
        });
        console.log(filteredData, filteredQuery);
        return { ...object, data: filteredData };
    };

    return (
        <div>
            <div className="m-2">
                <div>
                    <input
                        type="text"
                        name="search"
                        placeholder="search"
                        value={searchQuery}
                        onChange={(e) => { handleSearch(e.target.value) }}
                        className=" p-2 text-lg rounded border-solid border border-teal-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
