import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReactModal from "react-modal";
import Pagination from "../../UI/Pagination";
import { toast } from "react-hot-toast";
import axios from "axios";
import SearchEmployee from "./SearchLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ListLocation = () => {
    const [response, setResponse] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [max, setMax] = useState(null);
    const [actionId, setActionId] = useState(null);


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

    const handleChange = (pageNo) => {
        setCurrentPageNo(pageNo);
        getLocationList(pageNo);

    }

    const ActionButton = ({ userId }) => {
        return (
            <button onClick={() => {
                setActionId(userId)
                setConfirmModal(!confirmModal);
            }}
                className="cursor-pointer text-red-500 bg-white p-1 border border-solid border-red-500 rounded
                hover:bg-red-500 hover:text-white
                "
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>

        )

    }
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const updateResponse = (data) => {
        setResponse(data)
    }
    async function deleteResource(searchQuery = 1) {
        const url = `http://localhost:8000/employee/destroy/${searchQuery}`;
        const responseData = await axios.delete(url);
        setNotification(responseData);
    }




    return (
        <>
            <div className="px-2">
                <div className="flex justify-end">
                    <SearchEmployee updateResponse={updateResponse} response={response} />
                </div>
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
                                    <td className="p-1 border border-blue-200 border-solid">
                                        <ActionButton userId={user.id} />
                                    </td>
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
            <ReactModal isOpen={confirmModal} ariaHideApp={false}>
                {/*Close Button*/}
                <div className="flex justify-end">
                    <button onClick={() => {
                        setConfirmModal(false);
                    }}>Close</button>
                </div>

                {/*Confirmation Query*/}
                <div className="flex justify-center items-center">
                    <div>
                        Are you Sure?
                    </div>
                </div>

                {/*Confirmation Buttons*/}
                <div className="flex justify-center">
                    <div className="flex-grow flex justify-center">
                        <div>
                            <button onClick={() => {
                                setConfirmModal(false)
                            }}>No</button>
                        </div>
                    </div>
                    <div className="flex-grow flex justify-center">
                        <div>
                            <button onClick={() => {
                                toast.promise(
                                    deleteResource(actionId),
                                    {
                                        loading: 'Deleting...',
                                        success: <b>SucessFully Deleted</b>,
                                        error: <b>Error While Deleting</b>,
                                    }
                                );
                                setConfirmModal(false);
                            }}>Yes</button>
                        </div>
                    </div>
                </div>
            </ReactModal >


        </>
    );

};


export default ListLocation;

