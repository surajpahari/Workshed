import DashboardLayout from "../Layout/DashboardLayout";
const Dashboard = () => {
    return (
        <div>
            This is DashboardLayout
        </div>
    )
}

Dashboard.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);


export default Dashboard
