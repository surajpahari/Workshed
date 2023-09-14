import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ReactModal from "react-modal";
import Pagination from "../../UI/Pagination";
import { toast } from "react-hot-toast";
import axios from "axios";
import SearchEmployee from "./SearchLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { LocationInfo } from "./LocationInfo";
import Table from "../../Table/Table"
import { ModalContextProvider } from "../../ModalContext"
import CenterModal from "../../Modals/CenterModal"
import ConfirmModal from "../../Modals/ConfirmModal"
import { Toaster } from "react-hot-toast"
const ListLocation = () => {
    return (
        <>
            <Toaster />
            <div className="flex-grow">
                <Table tableInfo={LocationInfo} />
                <CenterModal />
                <ConfirmModal />
            </div>
        </>
    )
}


export default ListLocation;

