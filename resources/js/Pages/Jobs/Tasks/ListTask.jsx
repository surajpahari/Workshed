import { Toaster } from "react-hot-toast"
import { TaskTableInfo } from "./TaskTableInfo"
import Table from "../../../Table/Table"
import ConfirmModal from "../../../Modals/ConfirmModal"
import CenterModal from "../../../Modals/CenterModal"
const ListTask = () => {
    return (
        <>
            <Toaster />
            <div>
                <Table tableInfo={TaskTableInfo} />
            </div>
            <ConfirmModal />
            <CenterModal />
        </>
    )
}

export default ListTask

