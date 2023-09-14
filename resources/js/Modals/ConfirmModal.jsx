import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { ModalContext } from '../ModalContext';
import { useContext } from 'react';

function ConfirmModal(props) {
    const { modalStatus, modalType, modalData, modalContent, changeModalStatus, dataNumbers } = useContext(ModalContext);
    const toggleModalStatus = () => {
        changeModalStatus(!modalStatus)
    }

    const showData = () => {
        changeModalStatus(false)
        if (typeof modalData.performer === "function") {
            modalData.performer(modalData.link, modalData.key, (modalData.method ? modalData.method : ''))
        }
        //         (typeof modalData.performer === "function") ?
        //         () => { }
        // }
    }


    return (
        <>
            <ReactModal
                closeTimeoutMS={400}
                isOpen={modalStatus && modalType == "confrimation"}
                onRequestClose={toggleModalStatus}
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    content: {
                        width: '100%',
                        padding: '0px',
                        maxWidth: '400px',
                        borderRadius: '8px',
                        backgroundColor: 'white',
                        position: 'static',
                        transform: 'none',
                    },
                }}
            >
                <div>
                    <h1>{dataNumbers}</h1>
                    <div className=" border-b border-b-gray-400 p-6 text-lg font-bold">{(typeof modalData) === 'function' ? modalData.title(dataNumbers) : modalData.title}</div>
                    <div className='px-6 py-3'>{modalData.subTitle}</div>
                    <div className="flex justify-end pb-6 px-3">
                        <div className='mr-4'>
                            <button

                                onClick={toggleModalStatus}
                                className="px-4 py-2 bg-red-500 rounded-lg text-white border-none cursor-pointer"
                            >
                                {modalData.terminate}
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={showData}
                                className="px-4 py-2 bg-green-500 rounded-lg text-white border-none cursor-pointer"
                            >
                                {modalData.proceed}
                            </button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </>
    );
}

export default ConfirmModal;

