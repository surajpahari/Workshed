
import SideBar from "../Layout/SideBar"
import CreateEmployee from "../Forms/CreateEmployee"
import EmployeeLayout from "../Layout/Employee/EmployeeLayout"
import Top from "../Layout/Top"
const Employee = () => {

    return (
        <Top>
            <SideBar>
                <EmployeeLayout>
                </EmployeeLayout>
            </SideBar>
        </Top>
    )
}

export default Employee
