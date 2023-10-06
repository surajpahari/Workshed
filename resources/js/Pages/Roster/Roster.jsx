import { ModalContextProvider } from "../../ModalContext";
import DashboardLayout from "../Layout/DashboardLayout";
import ListRoster from "./ListRoster";
import SearchSelect from "../Jobs/CompletedTask/SearchSelect";
import { preventDefault } from "@fullcalendar/core/internal";
const Roster = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <ModalContextProvider>
            <div className="flex-grow">
                {/*Heading*/}
                <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                    <div className="m-0 flex-grow">
                        <h1 className="m-0 font-light">Rosters</h1>
                    </div>
                    <div>

                        Home&nbsp; / &nbsp; Rosters
                    </div>
                </div>
                {/*Heading*/}
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
                    {/*Filter*/}
                </form>

                <div>
                    <ListRoster />
                </div>
            </div>
        </ModalContextProvider>
    )
}
Roster.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);
export default Roster









