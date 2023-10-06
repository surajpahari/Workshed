import { useForm } from "@inertiajs/inertia-react"
import { ModalContext } from "../../../ModalContext";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
const ViewPay = (props) => {
    const { data, put } = useForm({})
    const rowdata = props.rowdata;
    const markAsPaid = (e) => {
        e.preventDefault()
        put('/markAsPaid/' + props.rowdata.id, {
            onSuccess: () => {
                toast.success("Job is marked as paid")
            },
            onError: () => (toast.error("Error updating the Job"))
        })
        changeModalStatus(false);
    }


    const { changeModalStatus } = useContext(ModalContext);

    return (
        <>
            <div className="flex justify-center items-center text-xl m-4">
                <div>
                    <div className="flex ">
                        <div>
                            Job by:
                        </div>
                        <div>
                            {rowdata.user.name}
                        </div>
                    </div>
                    <div className="flex ">
                        <div>
                            Job:
                        </div>
                        <div>
                            {rowdata.tablename}
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            Total Hours:
                        </div>
                        <div>
                            {rowdata.payDetail.totalHours.toFixed(1)
                            }
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            Total Pay:
                        </div>
                        <div>

                            {"Rs " + rowdata.payDetail.totalPay.toFixed(1)}
                        </div>
                    </div>
                    <div className="flex justify-center items-center
                        bg-green-500
                        text-white
                        p-2 rounded  cursor-pointer mt-4"
                        onClick={markAsPaid}
                    >
                        Mark as paid
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewPay
