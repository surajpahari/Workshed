import DashboardLayout from "../../Layout/DashboardLayout";
import { UnpaidTableInfo } from "./UpaidTableInfo";
import Table from "../../../Table/Table";
import { ModalContextProvider } from "../../../ModalContext";
import Payslip from "../Payslip";
import ConfirmModal from "../../../Modals/ConfirmModal";
import CenterModal from "../../../Modals/CenterModal";
const Unpaid = () => {
    return (
        <>
            <ModalContextProvider>
                <div>
                    <Table tableInfo={UnpaidTableInfo} />
                </div>
                <ConfirmModal />
                <CenterModal />
            </ModalContextProvider>
        </>
    )
}

Unpaid.layout = (page) => (
    < DashboardLayout >
        <Payslip />
        <div>
            {page}
        </div>
    </DashboardLayout >
);
export default Unpaid
