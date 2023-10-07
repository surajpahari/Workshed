import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
import DeletePerformer from "./DeletePerformer"
import TaskForm from "../TaskForm"
import AddTask from "./AddTask"
import JobViewModal from "../JobViewModal"
//helper functions

const statusIndicator = (status) => {
    if (status == 0) {
        return (
            <span className="bg-blue-400 p-1 rounded text-white">
                to do
            </span>
        )
    }
    else {
        return status
    }

}
//main Setting
export const TaskTableInfo = {
    //header of the table in order
    header: ['id', 'Status', 'Job', 'location', 'Start', 'End', 'Employee', 'Actions'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'status', dataProcessor: statusIndicator },
        { name: 'tablename' },
        { name: ['location', 'name'] },
        { name: 'start' },
        { name: 'end' },
        { name: ['user', 'name'] },
    ],
    setAction: true,
    //list of the actions to be set
    Actions: [
        {
            name: "view",
            modal: (rowdata) => (<JobViewModal rowdata={rowdata} />),
            notation: < FontAwesomeIcon className="text-teal-500" icon={faEye} />,
            type: "center",
            modalData: {
                title: "Todo Task",
                subTitle: "This will delete user",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => id,
                method: "delete",
            }
        },
        {
            name: "edit",
            modal: (rowdata) => (<><TaskForm rowdata={rowdata} /></>),
            notation: <FontAwesomeIcon className="text-blue-500" icon={faEdit} />,
            type: "center",
            modalData: {
                title: "Edit Employee",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => id,
                method: "delete",
            }
        },
        {
            name: "delete",
            modal: () => (<></>),
            notation: <FontAwesomeIcon className="text-red-500" icon={faTrash} />,
            type: "confrimation",
            modalData: {
                title: "Delete Job?",
                key: "id",
                subTitle: "This will delete the selected job.",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => "https://www.youtube.com/results?search_query=" + id,
                performer: DeletePerformer,
                method: "delete",
            }
        },

    ],
    //set the actions or not
    //link to fetch data from
    fetchLink: "http://localhost:8000/taskList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    // searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
