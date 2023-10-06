import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import ViewCompletedTask from "./ViewCompletedTask"
import DeletePerformer from "./DeletePerformer"
//helper functions

const statusIndicator = (status) => {
    if (status == 2) {
        return (
            <span className="bg-green-400 p-1 rounded text-white">
                completed
            </span>
        )
    }
    else {
        return status
    }

}
//main Setting
export const CompletedTaskTableInfo = {
    //header of the table in order
    header: ['#id',
        'Status',
        'Job',
        'Location',
        'Start',
        'End',
        'Employee',
        'Actions'
    ],
    //properties per header in order
    properties: [
        {
            name: "id",
        },
        { name: "status", dataProcessor: statusIndicator },
        { name: ["type", "type"] },
        { name: ["location", "name"] },
        { name: ["start"] },
        { name: ["end"] },
        { name: ['user', 'name'] },
    ],
    // properties: [
    //     { name: 'id' },
    //     { name: 'name' },
    //     { name: 'email' },
    //     { name: 'role_id' },
    //     { name: 'payrate', dataProcessor: (payrate) => ("Rs    " + payrate) },
    //     { name: 'created_at', dataProcessor: dateProcessor }
    // ],
    // //set the actions or not
    //

    setAction: true,
    Actions: [

        {
            name: "delete",
            modal: () => (<></>),
            notation: <FontAwesomeIcon className="text-red-500" icon={faTrash} />,
            type: "confrimation",
            modalData: {
                title: "Delete this Task?",
                key: "id",
                subTitle: "This action cannot be recoverd.",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => "https://www.youtube.com/results?search_query=" + id,
                method: "delete",
                performer: DeletePerformer,
            }
        },
        {
            name: "view",
            modal: (rowdata) => (<div>Hello</div>),
            notation: <FontAwesomeIcon className="text-teal-500" icon={faEye} />,
            type: "center",
            modalData: {
                title: "Task No",
                subTitle: "This will delete user",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => id,
                method: "delete",
            }
        },

    ],

    //link to fetch data from
    fetchLink: "http://localhost:8000/completedTasksList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}

