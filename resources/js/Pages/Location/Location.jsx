import DashboardLayout from "../Layout/DashboardLayout"

const Location = () => {
    return (
        <>
            <h1>Location</h1>
        </>
    )
}
Location.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);

export default Location

