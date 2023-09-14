import { useContext } from "react"
import { ModalContext } from "../ModalContext"

const ModalProvider = (props) => {
    const handleModalTrigger = () => {
        changeModalStatus(true);
        setModalType(props.type);
        setModalContent(() => props.modal(props.rowdata));
        setModalData({
            ...props.modalData,
            link: props.modalData.link(props.rowdata.username),
            title: (typeof props.modalData.title === "function")
                ? props.modalData.title(props.dataNumbers)
                : props.modalData.title,
            subTitle: (typeof props.modalData.subTitle === "function")
                ? props.modalData.subTitle(props.dataNumbers)
                : props.modalData.subTitle,
            key: (typeof props.modalData.key === "string") ? props.rowdata[props.modalData.key] : (props.modalData.key === true ? props.selected : undefined)
        });
    };

    const { changeModalStatus, setModalContent, setModalType, setModalData, setModalLink } = useContext(ModalContext);

    return (
        <button onClick={handleModalTrigger} className="cursor-pointer bg-none border-none">{props.notation}</button>
    );
};

export default ModalProvider
