import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/inertia-react";
import DashboardLayout from "../Layout/DashboardLayout";
const Payslip = () => {
    const [paymentInfo, setPaymentInfo] = useState();
    const fetchInfo = async () => {
        const url = "http://localhost:8000/getPaymentInfo/"
        let response = await axios.get(url);
        setPaymentInfo(response.data);
    }
    useEffect(() => {
        fetchInfo()
    }, [])
    useEffect(() => {
        console.log(paymentInfo)
    }, [paymentInfo])
    return (
        <>
            <div className="flex gap-2">
                <Link as="div" href="/payslip/unpaid" className="text-2xl bg-teal-500 p-2 rounded text-white cursor-pointer" >
                    <div>
                        Unpaid
                    </div>
                    <div>
                        {paymentInfo ? paymentInfo.unpaidInfo ? paymentInfo.unpaidInfo.totalCount + " Jobs" : '--' : '--' + "Jobs"}
                    </div>
                    <div>
                        {paymentInfo ? paymentInfo.unpaidInfo ? "RS " + paymentInfo.unpaidInfo.totalPay.toFixed(1) : 'Rs --' : 'Rs--'}
                    </div>
                    <div>
                        {paymentInfo ? paymentInfo.unpaidInfo ? paymentInfo.unpaidInfo.totalHours.toFixed(1) + ' hours' : '-- hours' : '--hours'}
                    </div>
                </Link>
                <Link
                    as="div"
                    href="/payslip/paid"
                    className="text-2xl bg-teal-500 p-2 rounded text-white cursor-pointer" >
                    <div>
                        Paid
                    </div>
                    <div>
                        4 jobs
                    </div>
                    <div>
                        Rs 400
                    </div>
                    <div>
                        6hours
                    </div>
                </Link>
                <Link
                    as="div"
                    href="/payslip/todo"
                    className="text-2xl bg-teal-500 p-2 rounded text-white cursor-pointer" >
                    <div>
                        Todo
                    </div>
                    <div>
                        {paymentInfo ? paymentInfo.remainingInfo ? paymentInfo.remainingInfo.totalCount + " Jobs" : '--' : '--' + "Jobs"}
                    </div>
                    <div>
                        {paymentInfo ? paymentInfo.remainingInfo ? "RS " + paymentInfo.remainingInfo.totalPay.toFixed(1) : 'Rs --' : 'Rs--'}
                    </div>
                    <div>
                        {paymentInfo ? paymentInfo.remainingInfo ? paymentInfo.remainingInfo.totalHours.toFixed(1) + ' hours' : '-- hours' : '-- hours'}
                    </div>
                </Link>

            </div>
        </>
    )
}

Payslip.layout = (page) => (
    < DashboardLayout >
        <div>
            {page}
        </div>
    </DashboardLayout >
);
export default Payslip
