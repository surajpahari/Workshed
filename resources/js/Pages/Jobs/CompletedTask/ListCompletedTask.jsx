import { Toaster } from "react-hot-toast"
import CenterModal from "../../../Modals/CenterModal"
import ConfirmModal from "../../../Modals/ConfirmModal"
import Table from "../../../Table/Table"
import { CompletedTaskTableInfo } from "./CompletedTaskTableInfo"

const ListCompletedTask = () => {
    return (
        <>
            <Toaster />
            <div>
                <Table tableInfo={CompletedTaskTableInfo} />
                <CenterModal />
                <ConfirmModal />
            </div>
        </>
    )
}

export default ListCompletedTask
