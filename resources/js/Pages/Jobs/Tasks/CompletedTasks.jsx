import DashboardLayout from "../../Layout/DashboardLayout";
const CompletedTasks = () => {
    return (
        <div>
            This is completedTasks
        </div>
    )
}
CompletedTasks.layout = (page) => (
    < DashboardLayout >
        <div className="flex-grow">
            {page}
        </div>
    </DashboardLayout >
);


export default CompletedTasks
