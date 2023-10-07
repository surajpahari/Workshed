import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faEdit, faEye } from "@fortawesome/free-solid-svg-icons"
//helper functions
//main Setting
export const TableInfo = {
    //header of the table in order
    header: ['#id', 'Job Type', 'status', 'Action'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: ['type'] },
        { dummy: 'active' },
    ],
    //set the actions or not
    setAction: true,
    Actions: [
        {
            name: "delete",
            modal: () => (<></>),
            notation: <FontAwesomeIcon className="text-red-500" icon={faTrash} />,
            type: "confrimation",
            modalData: {
                title: "Delete Job Type?",
                key: "id",
                subTitle: "This will delete job Type.",
                proceed: "Delete",
                terminate: "Cancel",
                link: (id) => "https://www.youtube.com/results?search_query=" + id,
                method: "delete",
            }
        },

    ],
    //list of the actions to be set
    //link to fetch data from
    fetchLink: "http://localhost:8000/typeList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/searchType/"
}
