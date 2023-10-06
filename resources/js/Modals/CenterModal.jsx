import React, { useContext, useEffect, useState } from "react"
import { ModalContext } from "../ModalContext";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";

const CenterModal = ({ type, data }) => {
    const customStyles = {
        minWidth: '120px', // Set the desired minimum width
    };
    const { modalStatus, modalType, modalContent, changeModalStatus, modalData, setModalData, modalRow, setModalRow } = useContext(ModalContext);
    const toggleModalStatus = () => {
        changeModalStatus(!modalStatus)
    }
    useEffect(() => {
    }, [])

    return (
        <>

            <ReactModal
                closeTimeoutMS={400}
                isOpen={modalStatus && modalType == "center"}
                onRequestClose={toggleModalStatus}
                ariaHideApp={false}
                style={{
                    content: { ...customStyles }
                }
                }
                className="absolute inset-8 inset-x-0 md:inset-x-56 overflow-auto
        outline-none border border-solid border-teal-500 md:min-w-120 z-20 bg-teal-500"
            >
                <div className="bg-teal-500 w-full h-full z-20">
                    <div className='flex bg-teal-600 mb-4'>
                        <div className='flex-grow'>
                            <div className="flex justify-center p-2">
                                <div className="text-white text-2xl m-2">
                                    {modalData.title ? modalData.title : "Center Div"}
                                </div>
                            </div>
                        </div>
                        <div className='text-lg flex justify-center items-center mr-2' onClick={toggleModalStatus}>
                            <div className=" cursor-pointer  p-0">
                                <FontAwesomeIcon icon={faClose} className="hover:text-red-500 h-8 w-8" />
                            </div>
                        </div>
                    </div>
                    {modalContent}
                </div>
            </ReactModal>
        </>
    );
}

export default CenterModal;

