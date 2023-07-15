import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReactModal from "react-modal";
import Pagination from "../../../UI/Pagination";
import axios from "axios";

const ListType = () => {
    const [response, setResponse] = useState(null);
    const [confirmModal, setConfirmModal] = useState(false);
    const [max, setMax] = useState(null);
    const [actionId, setActionId] = useState(null);


    async function getLocationList(pageNo = 1) {
        try {
            const url = `http://localhost:8000/api/taskList/?page=${pageNo}`;
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
        '#id',
        'Status',
        'Job',
        'Location',
        'Start',
        'End',
        'Employee',
        'Actions'
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
                className="cursor-pointer"
            >del</button>

        )

    }

    const [currentPageNo, setCurrentPageNo] = useState(1);
    const updateResponse = (data) => {
        setResponse(data)
    }




    return (
        <>
            <div className="px-2">
                <div className="flex justify-end">
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
                            response ? response.data.map((task, index) => (

                                <tr key={index} className={`${index % 2 == 0 ? "bg-gray-100" : "bg-white"}`}>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.id}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.status}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.type.type}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.location.name}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.start_date + " - " + task.start_time}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.end_date + " - " + task.end_time}</td>
                                    <td className="p-2 border border-blue-200 border-solid"> {task.users[0] ? task.users[0].name : ''}</td>
                                    <td className="p-1 border border-blue-200 border-solid">
                                        <ActionButton userId={task.id} />
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

export default ListType;

