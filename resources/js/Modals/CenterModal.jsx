import React, { useContext, useEffect, useState } from "react"
import { ModalContext } from "../ModalContext";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";

const CenterModal = ({ type }) => {
  const customStyles = {
    minWidth: '120px', // Set the desired minimum width
  };
  const { modalStatus, modalType, modalContent, changeModalStatus, modalData, setModalData, ModalData } = useContext(ModalContext);
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
        outline-none border border-solid border-teal-500 md:min-w-120"
      >
        <div className="bg-teal-500 w-full h-full">
          <div className='flex  p-2'>
            <div className='flex-grow'>
              {modalData.title ? modalData.title : "Center Div"}
            </div>
            <div className='text-lg cursor-pointer bg-white px-1' onClick={toggleModalStatus}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          </div>
          {modalContent}
        </div>
      </ReactModal>
    </>
  );
}

export default CenterModal;

