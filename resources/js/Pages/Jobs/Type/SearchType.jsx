import { useEffect, useState } from "react";
import axios from "axios";

const SearchType = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [response, setResponse] = useState("");

    async function search() {
        console.log(searchQuery);
        const url = `http://localhost:8000/api/searchType/${searchQuery}`;
        const responseData = await axios.get(url);
        setResponse(responseData.data);
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    useEffect(() => {
        if (searchQuery !== "") {
            search();
        }
    }, [searchQuery]);
    useEffect(() => {
        console.log(response);


    }, [response])

    return (
        <>
            <div>
                <input
                    type="text"
                    name="search"
                    value={searchQuery}
                    placeholder="search"
                    onChange={handleChange}
                />
            </div>
            <div>
                {response ?
                    response.map((user) => (
                        <p>{user.type}</p>
                    )) : ''}
            </div>
            <div>{/* Display search results here */}</div>
        </>
    );
};

export default SearchType;

