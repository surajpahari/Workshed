import { useEffect } from "react"
import { useContext } from "react";
import CenterModal from "../Modals/CenterModal";
import { ModalContext } from "../ModalContext";
import { ModalContextProvider } from "../ModalContext";
import ModalProvider from "./ModalProvider";
import axios from "axios";
import { Link, usePage } from "@inertiajs/inertia-react";

const Action = ({ actions, rowdata }) => {

    //for test
    const { changeModalStatus, setModalContent, setModalType, modalData } = useContext(ModalContext);
    const handleModal = (ModalComponent, type, rowdata) => {
        setModalContent(<ModalComponent rowdata={rowdata} notation="" />)
        changeModalStatus(true);
        setModalType(type)
    };
    const getInternalLink = async (url) => {
        await axios.get(url);
    }
    const { auth } = usePage().props;
    const role = auth.user.role_id;
    //test ends
    return (
        <>
            <div className="flex">
                {
                    actions.map((action, index) => (
                        !(action.role) || (action.role === role) ?
                            action.link ?
                                <div key={index}>
                                    <a className="m-2 cursor-pointer" key={index} href={action.link(rowdata.id)}>{action.notation}</a>
                                </div>
                                :
                                action.internalLink ?
                                    <div key={index}>
                                        <Link
                                            href={action.internalLink(rowdata.id)}
                                            className="m-2 cursor-pointer">
                                            {action.notation}
                                        </Link>
                                    </div>
                                    :
                                    ''
                                        ||
                                        action.modal ?
                                        <div key={index}>
                                            <span className="m-2 cursor-pointer">
                                                {/*<action.modal key={index} rowdata={rowdata} notation={action.notation} />*/}
                                                {/*provide modal
                      needed :type,content,rowdata,modaldata
                      return button with functionality that changes the modalVariables
                    */}
                                                <ModalProvider modal={action.modal} type={action.type} notation={action.notation} modalData={action.modalData} rowdata={rowdata} isRowData={true} />

                                                {/*<button onClick={() => handleModal(action.modal, action.type, rowdata)}>
                      {action.notation}
                    </button>*/}
                                                {/*<action.modal key={index} rowdata={rowdata} notation={action.notation} />*/}
                                            </span>
                                        </div>
                                        : "" : ""
                    ))
                }
                <div >
                </div>
            </div >
        </>
    )
}
const testContent = () => {
    return (
        <>
            <div>
                This is test Content
            </div>
        </>

    )
}


export default Action
