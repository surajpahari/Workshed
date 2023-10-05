import { ModalContext, ModalContextProvider } from "../../ModalContext";
import DashboardLayout from "../Layout/DashboardLayout";
import ListTable from "./ListTable";
const Payslip = () => {
    return (
        <>
            <ModalContextProvider>
                <div className="flex gap-2">

                    <div className="text-2xl bg-teal-500 p-2 rounded text-white cursor-pointer" >
                        <div>
                            Unpaid
                        </div>
                        <div>
                            Rs 500
                        </div>
                        <div>
                            8hours
                        </div>
                    </div>

                    <div className="text-2xl bg-teal-500 p-2 rounded text-white cursor-pointer" >
                        <div>
                            Paid
                        </div>
                        <div>
                            Rs 400
                        </div>
                        <div>
                            6hours
                        </div>
                    </div>
                    <div className="text-2xl bg-teal-500 p-2 rounded text-white cursor-pointer" >
                        <div>
                            Remaining Task
                        </div>
                        <div>
                            Rs 600
                        </div>
                        <div>
                            5 hours
                        </div>
                    </div>
                </div>
                <div>
                    <ListTable />
                </div>
            </ModalContextProvider>
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
