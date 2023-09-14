import DashboardLayout from "../Layout/DashboardLayout"
import SearchLocation from "./SearchLocation";
import AddLocation from "./AddLocation";
import ListLocation from "./ListLocation";
import { ModalContext, ModalContextProvider } from "../../ModalContext";


const Location = () => {
    return (
        <>
            <ModalContextProvider>
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
                        {/*location form*/}
                        <div className="m-2 border border-solid border-teal-500 rounded-t border-t-4">
                            <div className="form">
                                <AddLocation />
                            </div>
                            {/*End of Location form*/}
                        </div>


                        {/*List of the Location*/}
                        <div className="flex-grow m-2 border-solid border border-teal-500 rounded-t border-t-4">
                            <div className=" bg-gray-100">
                                <div className="flex">
                                    <div className="list flex-grow">
                                        <div className="border-solid border-0 border-b border-teal-500 p-4">
                                            <span className="m-2 text-lg">
                                                List
                                            </span>
                                        </div>
                                        <ListLocation />
                                    </div>
                                </div>
                            </div>
                            {/*End of list Location*/}
                        </div>
                    </div>
                </div>
            </ModalContextProvider>
        </>

    )
}
Location.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);

export default Location

