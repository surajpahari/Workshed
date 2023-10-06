import DashboardLayout from "../../Layout/DashboardLayout";
import { TodoTableInfo } from "./TodoTableInfo";
import Table from "../../../Table/Table";
import { ModalContextProvider } from "../../../ModalContext";
import Payslip from "../Payslip";
import ConfirmModal from "../../../Modals/ConfirmModal";
import CenterModal from "../../../Modals/CenterModal";
const Todo = () => {
    return (
        <>
            <ModalContextProvider>
                <div>
                    <Table tableInfo={TodoTableInfo} />
                </div>
                <CenterModal />
                <ConfirmModal />
            </ModalContextProvider>
        </>
    )
}

Todo.layout = (page) => (
    < DashboardLayout >
        <Payslip />
        <div>
            {page}
        </div>
    </DashboardLayout >
);
export default Todo
