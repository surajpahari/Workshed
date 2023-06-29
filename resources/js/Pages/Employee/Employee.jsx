
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



import CreateEmployee from "../Forms/CreateEmployee";
import DashboardLayout from "../Layout/DashboardLayout";
import { Inertia } from "@inertiajs/inertia";
import ListEmployee from "./ListEmployee";
import SearchEmployee from "./SearchEmployee";

const Employee = () => {
    return (
        <>

            <div>
                <div>
                    <h1>ADD Employee</h1>
                    <CreateEmployee />
                </div>
                <div>
                    <h1>Search</h1>
                    <SearchEmployee />

                </div>
                <div>
                    <h1>List</h1>
                    <ListEmployee />
                </div>
            </div>
        </>

    );
};

Employee.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Employee;
