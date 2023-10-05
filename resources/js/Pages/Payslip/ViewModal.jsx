import { useEffect } from "react"
import { ModalContext } from "../../ModalContext"
import { useContext } from "react"
import { useForm } from "@inertiajs/inertia-react"
import { toast } from "react-hot-toast"

const ViewModal = (props) => {
    const { changeModalStatus } = useContext(ModalContext)
    const { put, data } = useForm();
    const markAsCompleted = (e) => {
        e.preventDefault()
        put('/markAsCompleted/' + props.rowdata.id, {
            onSuccess: () => {
                toast.success("Job Updated  sucessfully")
            },
            onError: () => (toast.error("Error updating the Job"))
        })
        changeModalStatus(false);
    }
    useEffect(() => {
        console.log("props are", props)
    }, [])
    return (
        <>
            <div className="flex items-center justify-center">
                <div>
                    <div className="flex gap-3 bg-green-50 p-6">
                        <div>
                            Task Id
                        </div>
                        <div>
                            {props.rowdata.id}
                        </div>
                    </div>

                    <div className="flex gap-3 bg-green-50 p-6">
                        <div>
                            Task
                        </div>
                        <div>
                            {props.rowdata.tablename}
                        </div>
                    </div>
                    <div className="flex gap-3 bg-green-50 p-6">
                        <div>
                            Start date
                        </div>
                        <div>
                            {props.rowdata.user.name}
                        </div>
                    </div>

                    <div className="flex gap-3 bg-green-50 p-6">
                        <div>
                            Assigned to
                        </div>
                        <div>
                            {props.rowdata.user.name}
                        </div>
                    </div>
                    <div className="flex gap-3 bg-green-50 p-6">
                        <div>
                            End Date
                        </div>
                        <div>
                            {props.rowdata.endDate}
                        </div>
                    </div>
                </div>
            </div >
            <div className="flex  p-2 rounded cursor-pointer justify-center items-center text-xl text-white">
                <div className="flex bg-green-500 rounded-full p-2" onClick={markAsCompleted}>
                    <div>
                    </div>
                    <div>
                        Mark as completed
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewModal
