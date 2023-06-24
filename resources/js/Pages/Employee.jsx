import SideBar from "./Layout/SideBar"
import CreateEmployee from "./Forms/CreateEmployee"
import Top from "./Layout/Top"
const Employee = () => {

    return (
        <Top>
            <SideBar>
                <CreateEmployee />
            </SideBar>
        </Top>
    )
}

export default Employee
