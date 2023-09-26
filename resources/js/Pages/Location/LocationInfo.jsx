import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
//main Setting
export const LocationInfo = {
    //header of the table in order
    header: ['id', 'Name', 'address', 'status', 'action'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'name' },
        { name: 'address' },
        {
            dummy: (<span className="bg-yellow-300 p-1 rounded ">
                active
            </span>)
        }
    ],
    //set the actions or not
    setAction: true,
    //list of the actions to be set
    Actions: [

        {
            name: "delete",
            modal: () => (<></>),
            notation: <FontAwesomeIcon className="text-red-500" icon={faTrash} />,
            type: "confrimation",
            modalData: {
                title: "Delete Location?",
                key: "id",
                subTitle: "This will delete every job on this location.",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => "https://www.youtube.com/results?search_query=" + id,
                method: "delete",
            }
        },

    ],
    bulkActions: [
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

    fetchLink: "http://localhost:8000/api/locationList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/locationSearch/"
}

