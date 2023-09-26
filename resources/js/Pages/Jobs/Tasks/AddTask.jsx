
import { useForm } from "@inertiajs/inertia-react"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchSelect from "./SearchSelect"
import { toast } from "react-hot-toast"

const AddTask = () => {
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const [clearEmployee, setClearEmployee] = useState(false);
    const [clearType, setClearType] = useState(false);
    const [clearLocation, setClearLocation] = useState(false);

    const { data, setData, reset, clearErrors, errors, post, processing } = useForm({
        type: null,
        location: null,
        employee: null,
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/job', {
            onSuccess: () => {
                reset();
                toast.success("New Job Created successfully");
                // Invoke the hardReset function in each SearchSelect component
                setClearType(true)
                setClearEmployee(true)
                setClearLocation(true)
            },
            onError: () => (toast.error("Error creating new Job"))
        });
    };

    const dataSetter = (data, value) => {
        setData(data, value);
        clearErrors(data);
    };

    const dataRemover = (data = undefined) => {
        reset(data);
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <div className="border-solid  text-xl border-0 border-b p-2 border-teal-500 bg-teal-500 text-white">
                New Job
            </div>
            <form onSubmit={handleSubmit}>
                <SearchSelect
                    title="Employee"
                    optionLink="http://localhost:8000/employee-option"
                    label="name"
                    fordata="employee"
                    setter={dataSetter}
                    reseter={dataRemover}
                    error={errors.employee}
                    clear={clearEmployee}
                    setClear={setClearEmployee}
                />
                <SearchSelect
                    title="Job-Type"
                    optionLink="http://localhost:8000/type-option"
                    label="type"
                    fordata="type"
                    setter={dataSetter}
                    reseter={dataRemover}
                    error={errors.type}
                    clear={clearType}
                    setClear={setClearType}
                />
                <SearchSelect
                    title="Location"
                    optionLink="http://localhost:8000/location-option"
                    label="name"
                    fordata="location"
                    setter={dataSetter}
                    reseter={dataRemover}
                    error={errors.location}
                    clear={clearLocation}
                    setClear={setClearEmployee}
                />

                {/* for the start date and end date*/}
                <div className="m-2">
                    <label htmlFor="employee" className="font-bold ">StartAt</label>
                </div>
                <div className="flex m-1">
                    <div className="m-1">
                        <input
                            required
                            className="outline-none border-none bg-sky-50 min-w-full text-xl"
                            value={data.startDate}
                            type="date" name="startDate" placeholder="startDate" onChange={(e) => {
                                setData("startDate", e.target.value);
                                clearErrors("startDate");
                            }} />
                    </div>
                    <div>
                        <input
                            required
                            className="outline-none border-none bg-sky-50 min-w-full text-xl"
                            value={data.startTime}
                            type="time" name="startTime" placeholder="startTime" onChange={(e) => {
                                setData("startTime", e.target.value);
                                clearErrors("startTime");
                            }} />
                    </div>
                </div>
                {
                    errors.startDate ? <div>{errors.startDate}</div> :
                        errors.startDate ? <div>{errors.startDate}</div> : ''
                }

                <div className="m-2">
                    <label htmlFor="employee" className="font-bold ">EndAt</label>
                </div>
                <div className="flex m-1">
                    <div className="m-1">
                        <input
                            min={getCurrentDate}
                            required
                            className="outline-none border-none bg-sky-50 min-w-full text-xl"
                            value={data.endDate}
                            type="date" name="endDate" placeholder="endDate" onChange={(e) => {
                                setData("endDate", e.target.value);
                                clearErrors("endDate");
                            }} />
                    </div>

                    <div>
                        <input
                            required
                            className="outline-none border-none bg-sky-50 min-w-full text-xl"
                            value={data.endTime}
                            type="time" name="endTime" placeholder="endTime" onChange={(e) => {
                                setData("endTime", e.target.value);
                                clearErrors("endTime");
                            }} />
                    </div>
                </div>
                {
                    errors.endDate ? <div>{errors.endDate}</div> :
                        errors.endTime ? <div>{errors.endTime}</div> : ''
                }
                <div className="bg-gray-100  p-2 flex justify-end">
                    <div className="text-lg">
                        <input
                            type="submit" name="submit" value="submit"
                            required
                            className="cursor-pointer text-lg p-1 py-2 bg-teal-500 border-none rounded text-white" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;

