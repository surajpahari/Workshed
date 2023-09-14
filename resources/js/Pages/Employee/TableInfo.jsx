import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
import ActionPerformer from "./ActionPerformer.jsx"
//helper functions
const dateProcessor = (isoDateString) => {
    const isoDate = new Date(isoDateString);
    if (isNaN(isoDate.getTime())) {
        return null;
        // Invalid date
    }
    let date = isoDate.toLocaleDateString();
    let time = isoDate.toLocaleTimeString();
    return (date + "\u00A0\u00A0\u00A0" + time);
}
//main Setting
export const TableInfo = {
    //header of the table in order
    header: ['id', 'Name', 'Email', 'Role', 'PayRate(per hr)', 'Joined Date', 'Actions'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'name' },
        { name: 'email' },
        { name: 'role_id' },
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
            notation: <FontAwesomeIcon icon={faTrash} />,
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
    fetchLink: "http://localhost:8000/api/employeeList",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
