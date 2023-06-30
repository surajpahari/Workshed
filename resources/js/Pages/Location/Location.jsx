import DashboardLayout from "../Layout/DashboardLayout"
import SearchLocation from "./SearchLocation";
import AddLocation from "./AddLocation";
import ListLocation from "./ListLocation";


const Location = () => {
    return (
        <>
            <div>
                <h1>Location</h1>
                <AddLocation />
                <h1>Search Location</h1>
                <SearchLocation />
                <h1>List Location</h1>
                <ListLocation />
            </div>
        </>

    )
}
Location.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);

export default Location

