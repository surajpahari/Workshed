import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
//helper functions

//main Setting
export const TableInfo = {
    //header of the table in order
    header: ['id', 'Status', 'Job', 'location', 'Start', 'End', 'Employee', 'Actions'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'name' },
        { name: 'email', },
        { name: ['location', 'name'] },
        { name: 'payrate', dataProcessor: (payrate) => ("Rs    " + payrate) },
        { name: 'created_at', dataProcessor: dateProcessor }
    ],
    //set the actions or not
    setAction: true,
    //list of the actions to be set
    Actions: [
        {
            name: "view",
            link: (id) => ("http://localhost:8000/profile?=" + id),
            notation: <FontAwesomeIcon className="text-teal-500" icon={faEye} />,
            confirmation: "none",
            key: "id",
        },
        {
            name: "edit",
            link: (id) => ("http://localhost:8000/profile?=" + id),
            notation: <FontAwesomeIcon className="text-blue-500" icon={faEdit} />,
            confirmation: "none",
            key: "id"
        },
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
                performer: ActionPerformer
            }
        },

    ],
    bulkActions: [
        {
            name: "delete",
            modal: () => (<></>),
            notation: <FontAwesomeIcon icon={faTrash} className="text-red-500" />,
            type: "confrimation",
            modalData: {
                title: (n) => ("Delete " + n + " users?"),
                subTitle: (n) => "This will delete " + n + " users",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => "www.youtube.com/results?search",
                key: true,
                method: "delete",
            }
        }
    ],
    //link to fetch data from
    fetchLink: "http://localhost:8000/api/employeeList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
