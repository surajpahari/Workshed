import DashboardLayout from "../../Layout/DashboardLayout";
import ListCompletedTask from "./ListCompletedTask";
const CompletedTasks = () => {
    return (
        <>
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
                <div className="m-6">
                    <div className="flex gap-8">
                        {/*Employee*/}
                        <div>
                            <div>
                                Employee(s)
                            </div>
                            <div>
                                <select className="text-xl">
                                    <option value="all" className="m-6">All</option>
                                </select>
                            </div>
                        </div>
                        {/*Employee*/}

                        {/*Start Date*/}
                        <div>
                            <div>
                                Start Date
                            </div>
                            <div>
                                <input type="date" name="date" />
                            </div>
                        </div>
                        {/*Start date*/}

                        {/*End date*/}

                        <div>
                            <div>
                                Start Date
                            </div>
                            <div>
                                <input type="date" name="date" />
                            </div>
                        </div>

                        <div>

                        </div>
                    </div>

                </div>
                {/*Filter*/}
                <div>
                    <ListCompletedTask />
                </div>
            </div>
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
