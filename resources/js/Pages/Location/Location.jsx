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

                <div className="flex">
                    <div className="m-2 border border-solid border-teal-500 rounded-t border-t-4">
                        <div className="form">
                            <AddLocation />

                        </div>
                    </div>
                    <div className="m-2 border-solid border border-teal-500 rounded-t border-t-4">
                        <div className=" bg-gray-100">
                            <div className="flex">
                                <div className="list flex-grow">
                                    <div className="border-solid border-0 border-b border-teal-500 p-4">
                                        <span className="m-2 text-lg">
                                            List
                                        </span>
                                    </div>
                                    <div className="flex justify-end p-2">
                                        <SearchLocation />
                                    </div>
                                    <ListLocation />
                                </div>
                            </div>
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

