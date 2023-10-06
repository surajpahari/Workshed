import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import ViewUnpaid from "./ViewUnpaid"
import ViewPay from "./ViewPay"
import { usePage } from "@inertiajs/inertia-react"
const statusIndicator = (status) => {
    if (status == 2) {
        return (
            <span className="bg-pink-500 p-1 rounded text-white">
                unpaid
            </span>
        )
    }
    else {
        return status
    }
}
const concatRs = (value) => {
    value = value.toFixed(1)
    return "Rs " + value;
}
const concatHrs = (hour) => {
    return hour.toFixed(1)
}
//main Setting
export const UnpaidTableInfo = {
    //header of the table in order
    header: ['id', 'Status', 'Job', 'location', 'Total hours', 'payment', 'days', 'Actions'],
    //properties per header in order
    properties: [
        { name: 'id' },
        { name: 'status', dataProcessor: statusIndicator },
        { name: 'tablename' },
        { name: ['location', 'name'] },
        { name: ['payDetail', 'totalHours'], dataProcessor: concatHrs },
        { name: ['payDetail', 'totalPay'], dataProcessor: concatRs },
        { name: 'completedTime' },
    ],
    setAction: true,
    //list of the actions to be set
    Actions: [
        {
            name: "view",
            modal: (rowdata) => (<ViewUnpaid rowdata={rowdata} />),
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
        {
            role: 1,
            name: "view",
            modal: (rowdata) => (<ViewPay rowdata={rowdata} />),
            notation: < FontAwesomeIcon className="text-teal-500" icon={faEye} />,
            type: "center",
            modalData: {
                title: "Unpaid Job",
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
    fetchLink: "http://localhost:8000/getUnpaidList/",
    //set the paginate or not
    paginate: true,
    //set the searchbox or not
    // searchBox: true,
    //link to search from
    searchLink: "http://localhost:8000/api/employeeSearch/"
}
