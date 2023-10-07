import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@inertiajs/inertia-react";
import DashboardLayout from "../Layout/DashboardLayout";
import { usePage } from "@inertiajs/inertia-react";
const Payslip = () => {
    const { url } = usePage();
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
            <section className="p-2 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-5 2xl:grid-cols-6 g-5 items-start ">
                <Link
                    as="section"
                    href="/payslip/unpaid"
                    className={`${url.startsWith('/payslip/unpaid') ? 'bg-teal-500 text-white ' : 'bg-gray-200 text-gray-600'}
p-4 mr-2 text-left transform duration-500 hover:-translate-y-1
                    hover:shadow-xl cursor-pointer`}
                >
                    <h2 className="font-semibold mb-8 text-2xl text-center">Unpaid</h2>
                    <h2 className="font-semibold mb-2 text-xl text-center">
                        {paymentInfo ? paymentInfo.unpaidInfo ? paymentInfo.unpaidInfo.totalCount + " Jobs" : '--' : '--' + "Jobs"}
                    </h2>
                    <div className="flex flex-row justify-between mt-2 font-semibold text-md ">
                        <span>
                            {paymentInfo ? paymentInfo.unpaidInfo ? "RS " + paymentInfo.unpaidInfo.totalPay.toFixed(1) : 'Rs --' : 'Rs--'}
                        </span>
                        <span>
                            {paymentInfo ? paymentInfo.unpaidInfo ? paymentInfo.unpaidInfo.totalHours.toFixed(1) + ' hours' : '-- hours' : '--hours'}
                        </span>
                    </div>
                </Link>
                <Link
                    as="section"
                    href="/payslip/paid"
                    className={`${url.startsWith('/payslip/paid') ? 'bg-teal-500 text-white ' : 'bg-gray-200 text-gray-600'}
p-4 mr-2 text-left transform duration-500 hover:-translate-y-1
                    hover:shadow-xl cursor-pointer`}
                >
                    <h2 className="font-semibold mb-10  text-2xl text-center">Paid</h2>
                    <h2 className="font-semibold mb-2 text-xl text-center">
                        {paymentInfo ? paymentInfo.paidInfo ? paymentInfo.paidInfo.totalCount + " Jobs" : '--' : '--' + "Jobs"}
                    </h2>
                    <div className="flex flex-row justify-between mt-2 font-semibold text-md ">
                        <span>
                            {paymentInfo ? paymentInfo.paidInfo ? "Rs " + paymentInfo.paidInfo.totalPay : '--' : '--' + "Jobs"}
                        </span>
                        <span>
                            {paymentInfo ? paymentInfo.paidInfo ? + paymentInfo.paidInfo.totalHours.toFixed(1) + 'hours' : "" : ""}
                        </span>
                    </div>
                </Link>
                <Link
                    as="section"
                    href="/payslip/todo"
                    className={`${url.startsWith('/payslip/todo') ? 'bg-teal-500 text-white shadow-xl ' : 'bg-gray-200 text-gray-600'}
p-4 mr-2 text-left transform duration-500 hover:-translate-y-1
                    hover:shadow-xl cursor-pointer`}
                >
                    <h2 className="font-semibold mb-10 text-2xl text-center">Todo</h2>
                    <h2 className="font-semibold mb-2 text-xl text-center">
                        {paymentInfo ? paymentInfo.remainingInfo ? paymentInfo.remainingInfo.totalCount + " Jobs" : '--' : '--' + "Jobs"}
                    </h2>
                    <div className="flex flex-row justify-between mt-2 font-semibold text-md ">
                        <span>
                            {paymentInfo ? paymentInfo.remainingInfo ? "RS " + paymentInfo.remainingInfo.totalPay.toFixed(1) : 'Rs --' : 'Rs--'}
                        </span>
                        <span>
                            {paymentInfo ? paymentInfo.remainingInfo ? paymentInfo.remainingInfo.totalHours.toFixed(1) + ' hours' : '-- hours' : '-- hours'}
                        </span>
                    </div>
                </Link>
            </section >
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
