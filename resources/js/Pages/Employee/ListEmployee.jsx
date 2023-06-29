

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const ListEmployee = () => {
    const [response, setResponse] = useState(null);

    async function getEmployeeList(pageNo = 1) {
        try {
            const url = `http://localhost:8000/api/employeeList/?page=${pageNo}`;
            const response = await axios.get(url);
            setResponse(response.data);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }

    useEffect(() => {
        getEmployeeList()
            .catch(error => {
                // Handle the error here
                console.error("Error fetching employee list:", error);
            });
    }, []);

    useEffect(() => {
        console.log(response);
    }, [response]);



    return (
        <>
            <div>
                {response ? response.data.map((u, index) =>
                    <p key={index}>{u.name}</p>
                ) : ''}
            </div>
            {
                response ?
                    <div className="paginate-container border-solid border-black border-2">
                        <ReactPaginate
                            nextLabel='next >'
                            previousLabel='<previous'
                            onPageChange={(pageNumber) => {
                                console.log(pageNumber.selected)
                                getEmployeeList(pageNumber.selected + 1)
                            }}
                            pageCount={response.to - 1}
                            activeClassName='activePage'
                            previousClassName='previousPage'
                            className="flex flex-grow"
                            pageRangeDisplayed={1}
                            marginPagesDisplayed={1}
                        />
                    </div>
                    : ''

            }

        </>
    );

};


export default ListEmployee;

