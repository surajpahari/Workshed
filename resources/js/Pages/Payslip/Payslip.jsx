import DashboardLayout from "../Layout/DashboardLayout";
const Payslip = () => {
    return (
        <div>
            This is payslip
        </div>
    )
}
Payslip.layout = (page) => (
    < DashboardLayout >
        <div>
            {page}
        </div>
    </DashboardLayout >
);



export default Payslip
