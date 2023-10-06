import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import ViewPaid from "./ViewPaid"
//helper functions
const statusIndicator = (status) => {
    if (status == 3) {
        return (
            <span className="bg-green-400 p-1 rounded text-white">
                paid
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
export const PaidTableInfo = {
    //header of the table in order
    header: ['id', 'Status', 'Job', 'employee', 'Total hours', 'Total amount', 'Paid time', 'Actions'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'status', dataProcessor: statusIndicator },
        { name: 'type' },
        { name: 'paid_to' },
        { name: 'total_hours' },
        { name: 'total_amount' },
        { name: 'paid_date' }

    ],
    setAction: true,
    //list of the actions to be set
    Actions: [
        {
            name: "view",
            modal: (rowdata) => (<ViewPaid rowdata={rowdata} />),
            notation: < FontAwesomeIcon className="text-teal-500" icon={faEye} />,
            type: "center",
            modalData: {
                title: "Paid Job",
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
    fetchLink: "http://localhost:8000/getPaidList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    // searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
