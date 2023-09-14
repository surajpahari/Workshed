import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Pagination from "./Pagination";
import axios from "axios";
import TableRow from "./TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalProvider from "./ModalProvider";

const Table = ({ tableInfo }) => {
    const { header, fetchLink, searchLink, properties, setAction, Actions, bulkActions, dataProcessor } = tableInfo;
    //check to set the actions or not

    //adding and removing selected data
    const [selected, setSelected] = useState([]);
    const handleCheckedRow = (id, isChecked) => {
        if (isChecked) {
            setSelected([...selected, id])
        }
        else {
            setSelected(selected.filter((rowId) => rowId != id))

        }
    }
    useEffect(() => {
        console.log(selected)
    }, [selected])
    //Selecting all the row
    //paritally selecting the row
    const [selectAll, setSelectAll] = useState(false);
    const [partialSelect, setPartialSelect] = useState(false);
    const handleSelectAll = () => {
        if (!selectAll) {
            setPartialSelect(false)
        }
        setSelectAll(!selectAll);
        setSelected(selectAll ? [] : response.data.map(data => data.id));
    }


    //fetching the data form the link
    const [response, setResponse] = useState(null);
    const [mainResponse, setMainResponse] = useState(null);
    const [maxPage, setMaxPage] = useState(null);
    async function getEmployeeList(pageNo, pageLimit) {
        try {
            const url = fetchLink + `/?page=${pageNo}`;
            const response = await axios.get(url);
            setMainResponse(response.data);
            setMaxPage(response.data.last_page);
        } catch (error) {
            console.error("Error fetching employee list:", error);
        }
    }
    useEffect(() => {
        if (response == null) {
            getEmployeeList(1)
        }
    }, [])



    //testing the data
    useEffect(() => {
        setResponse(mainResponse)

    }, [mainResponse])

    //select all toggler
    const [toggleSelectAll, setAllToggler] = useState(false)
    const handleToggler = () => {
        //remove select all
        setSelectAll(false)
        //remove partial selection
        //remove all the data fromt the partial Selection
        setSelected([])
        setAllToggler(!toggleSelectAll)
    }

    const updateResponse = (data) => {
        if (toggleSelectAll) {
            handleToggler()
        }
        setResponse(data)
    }


    //for the Pagination
    const handleChange = (pageNo) => {
        getEmployeeList(pageNo);

    }
    const [perPage, setPerPage] = useState(5);
    const handlePerPageChange = (event) => {
        setPerPage(event.target.value)
    }
    useEffect(() => {
        console.log(perPage)
    }, [perPage])


    return (
        <>
            {/*for the search box*/}
            <div className="flex justify-end">
                <SearchBox updateResponse={updateResponse} mainResponse={mainResponse} searchLink={searchLink} response={response} />
                {/*<SearchBox searchLink={searchLink} checked={selectAll} updateResponse={updateResponse} response={response} />*/}
            </div>

            {/*toggling the select all feature*/}
            <div className="px-2 overflow-x-auto mt-2 mb-1">
                <div className="cursor-pointer flex m-1">
                    {bulkActions ?
                        <div onClick={handleToggler} className="bg-teal-500 rounded-lg p-1 px-2 text-white mr-3">
                            Select
                        </div>
                        : ''
                    }
                    <div className="flex items-center justify-end flex-grow">
                        <div className="bg-teal-500 rounded-lg p-1 px-2 text-white">
                            <span className="m-2">
                                Per Page
                            </span>
                            <select id="dataCount"
                                className="bg-white text-teal-500 rounded"
                                value={perPage}
                                onChange={handlePerPageChange}
                            >
                                <option value='5'>5</option>
                                <option value='10'>10</option>
                                <option value='15'>15</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/*Data per Page*/}


                {/*main Data table*/}
                <table className="table-fixed min-w-full  border-collapse border-solid border border-blue-200 border-t-2 rounded-t">
                    <thead>
                        <tr>
                            {toggleSelectAll ?
                                <th className="bg-white p-2 border-solid border border-blue-200">
                                    Select
                                    <span>
                                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    </span>
                                </th> : ""}

                            {
                                header.map((entry, index) => (
                                    <th key={index} className="bg-white p-2 border-solid border border-blue-200">{entry}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {/*Add row to every response*/}
                        {response != null ? (
                            response.data.map((data, index) => (
                                <TableRow key={data.id} rowdata={data}
                                    properties={properties} actions={Actions ? Actions : false}
                                    dataProcessor={dataProcessor}
                                    selected={selected} handleCheckedRow={handleCheckedRow}
                                    selectAll={selectAll}
                                    setSelectAll={setSelectAll}
                                    toggleSelectAll={toggleSelectAll}
                                    partialSelect={partialSelect}
                                    setPartialSelect={setPartialSelect}
                                />
                            ))
                        ) : (
                            <tr></tr>
                        )}

                    </tbody>

                </table>
            </div>

            {/*pagination Check the pagination value*/}
            <div className="flex justify-end">

                {response ?
                    <Pagination onChangeFunction={
                        handleChange
                    }
                        maxPage={maxPage}
                    />
                    :
                    ''
                }
            </div>


            {/*Selected Action*/}
            {
                (bulkActions) ?
                    (selected.length >= 1) ?
                        <div className="flex justify-center items-center">
                            <div className=" rounded-md">
                                <div className="bg-teal-500 text-white px-8 py-2 rounded-md">
                                    Selected Items({selected.length})
                                </div>
                                <div className="flex justify-center items-center">
                                    {bulkActions.map((action, index) => (
                                        <div className="cursor-pointer" key={index}>
                                            <ModalProvider modal={action.modal}
                                                type={action.type} notation={action.notation}
                                                modalData={action.modalData}
                                                rowdata={{ username: "hello", id: 5 }}
                                                selected={selected}
                                                dataNumbers={selected.length} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        :
                        ''
                    : ''
            }
        </>

    )

}


export default Table;

