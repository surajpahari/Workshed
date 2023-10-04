
import { useForm } from "@inertiajs/inertia-react"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchSelect from "./SearchSelect"
import { useContext } from "react"
import { toast } from "react-hot-toast"
import { ModalContext } from "../../../ModalContext"

const AddTask = ({ presets, editmode }) => {
    const { changeModalStatus } = useContext(ModalContext)

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    };
    const locationPreset = { label: "lamachaurBranch", id: 68 }
    const typePreset = { label: "cleaning", id: 13 }
    const employeePreset = { label: "kisan", id: 12 }
    const [clearEmployee, setClearEmployee] = useState(false);
    const [clearType, setClearType] = useState(false);
    const [clearLocation, setClearLocation] = useState(false);
    const { data, setData, reset, clearErrors, errors, post, processing } = useForm({
        type: presets ? presets.type.id : '',
        employee: presets ? presets.employee.id : '',
        location: presets ? presets.location.id : '',
        startDate: presets ? presets.startDate : '',
        endDate: presets ? presets.endDate : '',
        startTime: presets ? presets.startTime : '',
        endTime: presets ? presets.endTime : '',
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
                editmode ? changeModalStatus(false) : () => { }
            },
            onError: () => (toast.error("Error creating new Job"))
        });
    };

    const employeeSetter = (value) => {
        console.log("setting the employee")

        setData('employee', value);
        clearErrors('employee')
    }
    const typeSetter = (value) => {
        console.log('setting the type')
        setData('type', value);
        clearErrors('type')
    }
    const locationSetter = (value) => {
        console.log('setting the location')
        setData('location', value);
        clearErrors('location')

    }

    const dataRemover = (data = undefined) => {
        setData(data, '')
    };

    useEffect(() => {
        console.log(data);
    }, [data]);
    const searchSelectArray = [
        {
            title: "Employee",
            optionLink: "http://localhost:8000/employee-option",
            label: "name",
            fordata: "employee",
            setter: employeeSetter,
            reseter: dataRemover,
            error: errors.employee,
            clear: clearEmployee,
            setClear: setClearEmployee,
            presetValue: presets ? presets.employee : undefined
        },
        {
            title: "Location",
            optionLink: "http://localhost:8000/location-option",
            label: "name",
            fordata: "location",
            setter: locationSetter,
            reseter: dataRemover,
            error: errors.location,
            clear: clearLocation,
            setClear: setClearLocation,
            presetValue: presets ? presets.location : undefined
        },
        {
            title: "Job-Type",
            optionLink: "http://localhost:8000/type-option",
            label: "type",
            fordata: "type",
            setter: typeSetter,
            reseter: dataRemover,
            error: errors.location,
            clear: clearType,
            setClear: setClearType,
            presetValue: presets ? presets.type : undefined
        }


    ]

    return (
        <div>
            <div className="border-solid  text-xl border-0 border-b p-2 border-teal-500 bg-teal-500 text-white">
                New Job
            </div>
            <form onSubmit={handleSubmit}>
                {

                    searchSelectArray.map((searchSelect, index) => (
                        <SearchSelect
                            key={index}
                            title={searchSelect.title}
                            optionLink={searchSelect.optionLink}
                            label={searchSelect.label}
                            fordata={searchSelect.fordata}
                            setter={searchSelect.setter}
                            reseter={searchSelect.reseter}
                            error={searchSelect.error}
                            clear={searchSelect.clear}
                            setClear={searchSelect.setClear}
                            presetValue={searchSelect.presetValue}
                        />
                    ))
                }


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
                    <div className="m-1">
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

                    <div className="m-1">
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
                        {editmode ?
                            <input
                                type="submit" name="submit" value="Edit"
                                required
                                className="cursor-pointer text-lg p-1 py-2 bg-teal-500 border-none rounded text-white"
                            /> :
                            <input
                                type="submit" name="submit" value="Submit"
                                required
                                className="cursor-pointer text-lg p-1 px-3 bg-teal-500 border-none rounded text-white"
                            />
                        }
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;

