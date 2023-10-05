import { Toaster } from "react-hot-toast"
import { TodoTableInfo } from "./TodoTableInfo"
import Table from "../../../Table/Table"
import ConfirmModal from "../../../Modals/ConfirmModal"
import CenterModal from "../../../Modals/CenterModal"
const ListTodo = () => {
    return (
        <>
            <Toaster />
            <div>
                <Table tableInfo={TodoTableInfo} />
            </div>
            <ConfirmModal />
            <CenterModal />
        </>
    )
}

export default ListTodo

