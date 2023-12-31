import { TableInfo } from "./TableInfo"
import Table from "../../Table/Table"
import { ModalContextProvider } from "../../ModalContext"
import CenterModal from "../../Modals/CenterModal"
import ConfirmModal from "../../Modals/ConfirmModal"
import { Toaster } from "react-hot-toast"
const ListEmployee = () => {
    return (
        <>
            <Toaster />
            <div>
                <Table tableInfo={TableInfo} />
            </div>
            <CenterModal />
            <ConfirmModal />
        </>
    )
}

export default ListEmployee
