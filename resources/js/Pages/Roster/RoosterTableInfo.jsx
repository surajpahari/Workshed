import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
//helper functions
const statusIndicator = (status) => {
    if (status == 2) {
        return (
            <span className="bg-green-400 p-1 rounded text-white">
                completed
            </span>
        )
    }
    else if (status == 0) {
        return (
            <span className="bg-blue-400 p-1 rounded text-white">
                to do
            </span>
        )
    }

}

//main Setting
export const RoosterTableInfo = {
    //header of the table in order
    header: [
        '#id',
        'Status',
        'Job',
        'Location', 'Start', 'End',
        'Employee',
        'Actions'
    ],
    //properties per header in order
    properties: [
        { name: 'id' },
        {
            name: 'status',
            dataProcessor: statusIndicator
        },
        { name: ['type', 'type'] },
        { name: ['location', 'name'] },
        { name: ['start'] },
        { name: ['end'] },
        { name: ['user', 'name'] }
    ],

    setAction: true,
    Actions: [
        {
            name: "delete",
            modal: () => (<></>),
            notation: <FontAwesomeIcon className="text-red-500" icon={faTrash} />,
            type: "confrimation",
            modalData: {
                title: "Delete User?",
                key: "id",
                subTitle: "This will delete user",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => "https://www.youtube.com/results?search_query=" + id,
                method: "delete",
            }
        },
        {
            name: "view",
            modal: () => (<></>),
            notation: <FontAwesomeIcon className="text-teal-500" icon={faEye} />,
            type: "center",
            modalData: {
                title: "View Employee",
                subTitle: "This will delete user",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => id,
                method: "delete",
            }
        },

    ],

    //set the actions or not
    setAction: true,
    //list of the actions to be set
    //link to fetch data from
    fetchLink: "http://localhost:8000/api/taskList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
