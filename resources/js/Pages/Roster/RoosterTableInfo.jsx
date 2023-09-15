import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
//helper functions

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
        { name: 'status' },
        { name: ['type', 'type'] },
        { name: ['location', 'name'] },
        { name: ['start_date'] },
        { name: ['end_date'] },
        { dummy: "hari" },
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
