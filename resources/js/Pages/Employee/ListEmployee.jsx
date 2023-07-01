

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

const ListEmployee = () => {
    const entries = [
        "id",
        "username",
        "email",
        "role",
        "payrate",
        "joineddate",
        "status",
        "actions",
    ]
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

    const ActionButton = () => {
        return (
            <>
                <button type="">edit</button>
                <button type="">view</button>
                <button type="">delete</button>
            </>
        )
    }



    return (
        <>
            <div>
                <table class="table-fixed w-full">
                    <thead>
                        <tr>
                            {
                                entries.map((entry, index) => (
                                    <th key={index}>{entry}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            response ? response.data.map((user, index) => (
                                <tr key={index}>
                                    <td > {user.id}</td>
                                    <td > {user.username}</td>
                                    <td> {user.email}</td>
                                    <td> {user.role_id}</td>
                                    <td> {user.payrate}</td>
                                    <td> {user.created_at}</td>
                                    <td> active</td>
                                    <td>
                                        <ActionButton />
                                    </td>
                                </tr>
                            )) : ''
                        }


                    </tbody>
                </table>
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

