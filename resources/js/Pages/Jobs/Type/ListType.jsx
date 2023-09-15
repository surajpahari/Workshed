import Table from "../../../Table/Table"
import { Toaster } from "react-hot-toast"
import { TableInfo } from "./TypeTableInfo"

const ListType = () => {
    return (
        <div>
            <Toaster />
            <div className="flex-grow">
                <Table tableInfo={TableInfo} />
            </div>
        </div>
    )
}

export default ListType
