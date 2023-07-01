import DashboardLayout from "../Layout/DashboardLayout";
const Employee = () => {
    return (
        <div className="flex-grow h-96 bg-red-500">
            {/*Heading*/}
            <div className="bg-green-500 flex">
                <div className="m-0 flex-grow">
                    <b>Employee</b>
                </div>
                <div>
                    Home /Employee
                </div>
            </div>
            {/*Heading*/}

            {/*list and add bar*/}
            <div className="flex justify-center items-center">
                <div className="flex-grow">
                    <div>
                        List
                    </div>
                </div>
                <div className="cursor-pointer bg-blue-500 text-white p-2 rounded-lg">
                    add
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}
Employee.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Employee
