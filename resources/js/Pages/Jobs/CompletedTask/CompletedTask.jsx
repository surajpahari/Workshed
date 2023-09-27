import { ModalContextProvider } from "../../../ModalContext";
import SearchSelect from "./SearchSelect";
import DashboardLayout from "../../Layout/DashboardLayout";
import ListCompletedTask from "./ListCompletedTask";
const CompletedTasks = () => {
    const handleSubmit = () => {
        e.preventDefault();
        console.log("Submission");
    }
    return (
        <>
            <ModalContextProvider>
                <div className="m-1">
                    {/*Heading*/}
                    <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                        <div className="m-0 flex-grow">
                            <h2 className="m-0 font-light">Rooster History</h2>
                        </div>
                        <div>
                            Home&nbsp; / &nbsp;Task Completed
                        </div>
                    </div>
                    {/*Heading*/}


                    {/*Filter*/}
                    <form onSubmit={handleSubmit}>
                        <div className="m-6">
                            <div className="flex gap-8">
                                {/*Employee*/}
                                <div>
                                    <SearchSelect
                                        title="Employee"
                                        optionLink="http://localhost:8000/employee-option"
                                        label="name"
                                        fordata="employee"
                                        setter={() => { }}
                                        reseter={() => { }}
                                        error={() => { }}
                                        clear={() => { }}
                                        setClear={() => { }}
                                    />
                                </div>
                                {/*StartDate*/}
                                <div className="">
                                    <div className="m-2">
                                        <label htmlFor="employee" className="font-bold ">StartAt</label>
                                    </div>
                                    <div className="m-1">
                                        <input
                                            required
                                            className="outline-none border-none bg-sky-50 min-w-full text-xl"
                                            type="date" name="startDate" placeholder="startDate" onChange={(e) => {
                                                console.log(e)
                                            }} />
                                    </div>
                                </div>
                                {/*EndDate*/}
                                <div className="">
                                    <div className="m-2">
                                        <label htmlFor="employee" className="font-bold ">StartAt</label>
                                    </div>
                                    <div className="m-1">
                                        <input
                                            required
                                            className="outline-none border-none bg-sky-50 min-w-full text-xl"
                                            type="date" name="startDate" placeholder="startDate" onChange={(e) => {
                                                console.log(e)
                                            }} />
                                    </div>
                                </div>
                                {/*Employee*/}

                                {/*Start Date*/}
                                {/*Start date*/}
                                {/*End date*/}

                                <div className="flex justify-center items-center">
                                    <div className="bg-teal-500 text-white px-6 py-2 rounded cursor-pointer">
                                        Filter
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/*Filter*/}
                    <div>
                        <ListCompletedTask />
                    </div>
                </div>
            </ModalContextProvider>
        </>
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
