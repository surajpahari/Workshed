
// import SideBar from "../Layout/SideBar"
// import CreateEmployee from "../Forms/CreateEmployee"
// import EmployeeLayout from "../Layout/Employee/EmployeeLayout"
// import Top from "../Layout/Top"
// import DashboardLayout from "../Layout/DashboardLayout"
// const Employee = () => {
//
//     return (
//         <>
//             <h1>"hola"</h1>
//         </>
//     )
//
// }
// Employee.layout = page => <DashboardLayout children={page} title="Welcome" />
//
//
//
// export default Employee


import ReactModal from "react-modal";
import CreateEmployee from "../Forms/CreateEmployee";
import DashboardLayout from "../Layout/DashboardLayout";
import { Inertia } from "@inertiajs/inertia";
import ListEmployee from "./ListEmployee";
import SearchEmployee from "./SearchEmployee";
import { useState } from "react";

const Employee = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
        setOpenModal(!openModal);
        console.log(true);
    }
    return (
        <>

            <div className="flex-grow  bg-red-500">
                {/*Heading*/}
                <div className="bg-green-500 flex">
                    <div className="m-0 flex-grow">
                        <b>Employee</b>
                    </div>
                    <div>
                        Home /Employee
                    </div>
                </div>
                {/*Heading*/}

                {/*list and add bar*/}
                <div className="flex justify-center items-center">
                    <div className="flex-grow">
                        <div>
                            List
                        </div>
                    </div>
                    <div className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg">
                        <button onClick={handleModal}>+ add</button>
                    </div>
                </div>
                {/*end of list and add bar*/}
                <div className="bg-orange-300">
                    <ListEmployee />
                </div>

            </div>
            <ReactModal
                onRequestClose={handleModal}
                isOpen={openModal}
            >
                <span>
                    <button onClick={handleModal}> close</button>
                </span>
                <CreateEmployee />
            </ReactModal>
        </>

    );
};

Employee.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Employee;
