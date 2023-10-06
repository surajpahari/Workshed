import DashboardLayout from "../../Layout/DashboardLayout";
import Table from "../../../Table/Table";
import { ModalContextProvider } from "../../../ModalContext";
import Payslip from "../Payslip";
import ConfirmModal from "../../../Modals/ConfirmModal";
import CenterModal from "../../../Modals/CenterModal";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { PaidTableInfo } from "./PaidTableInfo";
const Paid = () => {
    return (
        <>
            <ModalContextProvider>
                <Toaster />
                <div>
                    <Table tableInfo={PaidTableInfo} />
                </div>
                <ConfirmModal />
                <CenterModal />
            </ModalContextProvider>
        </>
    )
}

Paid.layout = (page) => (
    < DashboardLayout >
        <Payslip />
        <div>
            {page}
        </div>
    </DashboardLayout >
);
export default Paid;
