import { Link } from "@inertiajs/inertia-react"
import SideBar from "./Layout/SideBar"
import Top from "./Layout/Top"

const Dashboard = () => {
    return (
        <div>
            <Top>
                <SideBar>
                </SideBar>
            </Top>
        </div>
    )
}

export default Dashboard
