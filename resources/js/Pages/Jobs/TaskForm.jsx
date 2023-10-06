import AddTask from "./Tasks/AddTask"
import SearchSelect from "./Tasks/SearchSelect"
import { ModalContext } from "../../ModalContext"
import { useContext, useEffect } from "react"

const TaskForm = ({ rowdata }) => {
    const presets = {
        location: { id: rowdata.location.id, label: rowdata.location.name },
        employee: { id: rowdata.user.id, label: rowdata.user.name },
        type: { id: rowdata.type.id, label: rowdata.tablename },
        startTime: rowdata.start.split('  ')[1],
        startDate: rowdata.start.split(' ')[0],
        endTime: rowdata.end.split(' ')[1],
        endDate: rowdata.end.split(' ')[0],

    }
    useEffect(() => {
        console.log("presetters are ", rowdata)
        console.log(rowdata.start)
    }, [])
    const { modalData } = useContext(ModalContext)
    return (
        <div className="flex items-center justify-center">
            <AddTask presets={presets} editmode={true} />
        </div >
    )
}

export default TaskForm
