import { useForm } from "@inertiajs/inertia-react"
import { ModalContext } from "../../../ModalContext";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
const ViewPay = (props) => {
    const { data, put } = useForm({});

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
            <div className="flex justify-center items-center text-xl">
                <div className="flex justify-center items-center text-teal-500 p-2 bg-white rounded  cursor-pointer"
                    onClick={markAsPaid}
                >
                    Mark as paid
                </div>
            </div>
        </>
    )
}

export default ViewPay
