import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import ViewTodo from "./ViewTodo"
//helper functions
const statusIndicator = (status) => {
    if (status == 1) {
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
const concatRs = (value) => {
    value = value.toFixed(1);
    return "Rs " + value;
}
const concatHrs = (hour) => {
    hour = hour.toFixed(1);
    return hour;
}
//main Setting
export const TodoTableInfo = {
    //header of the table in order
    header: ['id', 'Status', 'Job', 'location', 'Total hours', 'payment', 'assignto', 'Actions'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'status', dataProcessor: statusIndicator },
        { name: 'tablename' },
        { name: ['location', 'name'] },
        { name: ['paydetail', 'totalHours'], dataProcessor: concatHrs },
        { name: ['paydetail', 'totalPay'], dataProcessor: concatRs },
        { name: ['user', 'name'] },
    ],
    setAction: true,
    //list of the actions to be set
    Actions: [
        {
            name: "view",
            modal: (rowdata) => (<ViewTodo rowdata={rowdata} />),
            notation: < FontAwesomeIcon className="text-teal-500" icon={faEye} />,
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
    //link to fetch data from
    fetchLink: "http://localhost:8000/getTodoPayList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    // searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
