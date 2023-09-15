import Table from "../../../Table/Table"
import { Toaster } from "react-hot-toast"
import { TableInfo } from "./TypeTableInfo"
import ConfirmModal from "../../../Modals/ConfirmModal"
import CenterModal from "../../../Modals/CenterModal"

const ListType = () => {
    return (
        <div>
            <Toaster />
            <div className="flex-grow">
                <Table tableInfo={TableInfo} />
            </div>
            <ConfirmModal />
            <CenterModal />
        </div>
    )
}

export default ListType
