import DashboardLayout from "../../Layout/DashboardLayout";
import AddType from "../Type/AddType"
import ListType from "./ListType";

const Type = () => {
    return (
        <>

            <div className="flex-grow">
                {/*Heading*/}
                <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                    <div className="m-0 flex-grow">
                        <h1 className="m-0 font-light">Location</h1>
                    </div>
                    <div>

                        Home&nbsp; / &nbsp;JobType
                    </div>
                </div>
                {/*Heading*/}

                <div className="flex">
                    <div className="m-2 border border-solid border-teal-500 rounded-t border-t-4">
                        <div className="form">
                            <AddType />
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
                                    <ListType />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
Type.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);

export default Type

