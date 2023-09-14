import { createContext, useState } from "react"
export const ModalContext = createContext()
export const ModalContextProvider = ({ children }) => {
    const [modalType, setModalType] = useState();
    const [modalContent, setModalContent] = useState();
    const [modalStatus, changeModalStatus] = useState(false);
    const [modalData, setModalData] = useState({ title: "", subTitle: "", terminate: "", proceed: "", link: "" })

    return (

        < ModalContext.Provider value={{ modalType, modalContent, setModalType, setModalContent, modalStatus, changeModalStatus, setModalData, modalData }}>
            {children}
        </ModalContext.Provider>

    )
}
