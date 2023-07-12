import { useEffect, useState } from "react";
import axios from "axios";
const SearchType = ({ response, updateResponse }) => {
    const [backupResponse, setBackupResponse] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);
    const [result, setResult] = useState(null);
    async function search() {
        console.log(searchQuery);
        const url = `http://localhost:8000/api/searchType/${searchQuery}`;
        const responseData = await axios.get(url);
        setResult(responseData)
    }

    const handleUpdate = (e) => {
        setSearchQuery(e.target.value)
    }
    useEffect(() => {
        if (searchQuery != "") {
            search()
        }
        if (searchQuery == "") {
            updateResponse(backupResponse)
        }
    }, [searchQuery])
    useEffect(() => {
        if (result != null) {
            if (backupResponse == null) {
                setBackupResponse(response)
            }
            updateResponse(result)
        }
    }, [result])
    useEffect(() => {
        console.log("backupResponse", backupResponse)
    }, [backupResponse])
    return (
        <div>
            <div className="m-2">
                <div>
                    <input
                        type="text"
                        onChange={handleUpdate}
                        name="search"
                        placeholder="search"
                        className=" p-2 text-lg rounded border-solid border border-green-100"
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchType

