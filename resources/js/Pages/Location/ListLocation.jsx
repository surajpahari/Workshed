

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Pagination from "../../UI/Pagination";
import axios from "axios";

const ListLocation = () => {
    const [response, setResponse] = useState(null);
    const [max, setMax] = useState(null);

    async function getLocationList(pageNo = 1) {
        try {
            const url = `http://localhost:8000/api/locationList/?page=${pageNo}`;
            const response = await axios.get(url);
            setResponse(response.data);
            setMax(response.data.last_page);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }

    useEffect(() => {
        getLocationList()
            .catch(error => {
                // Handle the error here
                console.error("Error fetching employee list:", error);
            });
    }, []);

    useEffect(() => {
        console.log(response);
    }, [response]);
    const entries = [
        'id',
        'name',
        'status',
        'actions'
    ]



    const [currentPageNo, setCurrentPageNo] = useState(1);
    const handleChange = (pageNo) => {
        setCurrentPageNo(pageNo);
        getLocationList(pageNo);

    }


    return (
        <>
            <div className="px-2">
                <table className="table-fixed w-full border-collapse border-solid border border-blue-200 border-t-2 rounded-t">
                    <thead>
                        <tr>
                            {
                                entries.map((entry, index) => (
                                    <th key={index} className="bg-white p-2 border-solid border border-blue-200">{entry}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            response ? response.data.map((user, index) => (

                                <tr key={index} className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
                                    <td className="p-2 border border-blue-200 border-solid"> {user.id}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {user.name}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> active</td>
                                </tr>
                            )) : <tr></tr>

                        }
                    </tbody>
                </table>
            </div >

            <div className="flex justify-end">
                <Pagination className={`${response ? 'block' : 'hidden'}`} onChangeFunction={
                    handleChange
                }
                    maxPage={max}
                />
            </div>

        </>
    );

};


export default ListLocation;

