import Table from "../../../Table/Table"
import { CompletedTaskTableInfo } from "./CompletedTaskTableInfo"

const ListCompletedTask = () => {
    return (
        <div>
            <Table tableInfo={CompletedTaskTableInfo} />
        </div>
    )
}

export default ListCompletedTask
