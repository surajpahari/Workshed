
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



import DashboardLayout from "../Layout/DashboardLayout";
import { Inertia } from "@inertiajs/inertia";

const Employee = () => {
    return (
        <>
            <h1>Details About Employee</h1>
        </>
    );
};

Employee.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Employee;
