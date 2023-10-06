import { LocationInfo } from "./LocationInfo";
import Table from "../../Table/Table"
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

