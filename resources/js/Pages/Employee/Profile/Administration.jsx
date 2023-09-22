import { useForm } from "@inertiajs/inertia-react"
import { useState } from "react"
import ModalProvider from "../../../Table/ModalProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { ModalContextProvider } from "../../../ModalContext"
const Administration = () => {
    const ActionPerformer = () => {
        console.log("Attempt to change the detail")
    }
    const changeAction = {
        name: "delete",
        modal: () => (<></>),
        notation: <div className="bg-red-500 border-none text-white rounded py-2 text-base"><span>Submit</span></div>,
        type: "confrimation",
        modalData: {
            title: "Change Detail?",
            key: "id",
            subTitle: "This will change the detail of user",
            proceed: "proceed",
            terminate: "Cancel",
            link: (id) => "https://www.youtube.com/results?search_query=" + id,
            method: "delete",
            performer: ActionPerformer
        }
    }

    const { data, setData } = useForm({
        Email: "",
        Phone_no: "",
    })
    return (
        <div className="m-4" >
            <div className="flex my-2">
                <div className="w-48">
                    <span className="text-base">
                        Email
                    </span>
                </div>
                <div>
                    <input type="email" name="email" placeholder="email" className="text-base" />
                </div>
            </div>
            <div className="flex my-2">
                <div className="w-48">
                    <span className="text-base">
                        Phone no
                    </span>
                </div>
                <div>
                    <input type="text" name="phone" placeholder="phone" className="text-base" />
                </div>
            </div>
            <div className="flex my-2">
                <div className="w-48">
                    <span></span>
                </div>
                <div>
                    <ModalProvider
                        modal={changeAction.modal}
                        type={changeAction.type} notation={changeAction.notation}
                        modalData={changeAction.modalData}
                        rowdata={{ username: "ram", id: 7 }}
                    />

                </div>
            </div>

        </div >
    )
}

export default Administration
