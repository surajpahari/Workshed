import DashboardLayout from "../Layout/DashboardLayout"
import SearchLocation from "./SearchLocation";
import AddLocation from "./AddLocation";
import ListLocation from "./ListLocation";


const Location = () => {
    return (
        <>

            <div className="flex-grow">
                {/*Heading*/}
                <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                    <div className="m-0 flex-grow">
                        <h1 className="m-0 font-light">Location</h1>
                    </div>
                    <div>

                        Home&nbsp; / &nbsp;Location
                    </div>
                </div>
                {/*Heading*/}
                <div className="m-4 bg-gray-100">
                    <div className="flex">
                        <div className="form">
                            <AddLocation />

                        </div>
                        <div className="list flex-grow">
                            <ListLocation />
                        </div>
                    </div>
                </div>
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

