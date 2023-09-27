import { Toaster } from "react-hot-toast"
import Table from "../../Table/Table"
import { TableInfo } from "../Employee/TableInfo"
import { RoosterTableInfo } from "./RoosterTableInfo"
const ListRoster = () => {
    return (
        <>
            <Toaster />
            <div>
                <Table tableInfo={RoosterTableInfo} />
            </div>
        </>
    )
}

export default ListRoster
