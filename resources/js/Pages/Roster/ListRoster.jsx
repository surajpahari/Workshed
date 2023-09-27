import { Toaster } from "react-hot-toast"
import Table from "../../Table/Table"
import { TableInfo } from "../Employee/TableInfo"
import { RoosterTableInfo } from "./RoosterTableInfo"
import CenterModal from "../../Modals/CenterModal"
const ListRoster = () => {
    return (
        <>
            <Toaster />
            <div>
                <Table tableInfo={RoosterTableInfo} />
            </div>
            <CenterModal />
        </>
    )
}

export default ListRoster
