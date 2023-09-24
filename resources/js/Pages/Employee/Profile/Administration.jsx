import axios from "axios"
import ModalProvider from "../../../Table/ModalProvider"
import { toast } from "react-hot-toast"
import { useEffect, useState } from "react"
import { useForm } from "@inertiajs/inertia-react"
import { ModalContext } from "../../../ModalContext"
import { useContext } from "react"

const Administration = () => {
    //data for the form
    const { data, put, setData, processing, errors, clearErrors, reset } = useForm({
        email: "",
        phone: "",
        remember: false

    })
    const { changeModalStatus, setModalContent, setModalType, setModalData, setModalLink } = useContext(ModalContext);
    //submit function
    const submit = () => {
        put('/edit-employee', {
            onSuccess: () => {
                reset();
                toast.success("Sucessfully Edited");
            },
            onError: () => {
                toast.error("Error Occured")
            }
        })
    }
    //submit for the Modal
    const submitModal = (e) => {
        e.preventDefault();
        changeModalStatus(true);
        setModalType("confrimation")
        setModalData({
            title: "Edit User?",
            subTitle: "This will edit the user details.",
            proceed: "proceed",
            terminate: "cancel",
            performer: submit
        })
    }
    const freeError = () => {
        clearErrors()
    }
    //
    return (
        <div className="m-4" >
            <form onSubmit={submitModal}>
                <div className="flex my-2">
                    <div className="w-48">
                        <span className="text-base">
                            Email
                        </span>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="email" value={data.email}
                            className="text-base" onFocus={freeError}
                            onChange={(e) => (setData("email", e.target.value))} />
                    </div>
                </div>
                {errors.email && <div>
                    <span className="text-sm text-white bg-red-500 p-1 rounded">{errors.email}</span>
                </div>}
                <div className="flex my-2">
                    <div className="w-48">
                        <span className="text-base">
                            Phone no
                        </span>
                    </div>
                    <div>
                        <input type="phone" name="phone" placeholder="phone" minLength={10} className="text-base" value={data.phone} onChange={(e) => (setData("phone", e.target.value))} />
                    </div>

                </div>
                {errors.phone && <div>
                    <span className="text-sm text-white bg-red-500 p-1 rounded">{errors.phone}</span>
                </div>}
                <div className="flex my-2">
                    <div className="w-48">
                        <span></span>
                    </div>
                    <div>
                        <div className="bg-red-500 border-none text-white rounded py-2 text-base">
                            <button className="bg-none border-none bg-red-500 text-white" type="submit" disabled={processing}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Administration
