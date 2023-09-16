import DashboardLayout from "./Layout/DashboardLayout"
const Dashboard = () => {
    return (
        <div>
            This is Dasboard
        </div>
    )
}

Dashboard.layout = page => <DashboardLayout children={page} title="Welcome" />


export default Dashboard
