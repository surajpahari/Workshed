
import { useEffect, useState } from "react";
import axios from "axios";

const SearchEmployee = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [response, setResponse] = useState("");

    async function search() {
        console.log(searchQuery);
        const url = `http://localhost:8000/api/employeeSearch/${searchQuery}`;
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
                        <p>{user.name}</p>
                    )) : ''}
            </div>
            <div>{/* Display search results here */}</div>
        </>
    );
};

export default SearchEmployee;

