import { useForm } from "@inertiajs/inertia-react"
import axios from "axios"
import { useEffect, useState } from "react"
const AddTask = () => {
    const types = ['Teaching', 'Murder', 'Pickup', 'Cleaning']
    const locations = ['lamachaur', 'lakeside', 'bagar', 'harichowk']
    const employees = ['ram', 'shyam', 'hari', 'krishna', 'radhe']
    const { data, setData, errors, post, processing } = useForm({
        type: null,
        location: null,
        employee: null,
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        post('/job')
        setData(null);
    }
    const handleEmployeeInput = (e) => {
        console.log(e.target.value)
    }
    //setting up Options for type input
    const [typeOptions, setTypeOptions] = useState();
    async function fetchType() {
        try {
            const url = `http://localhost:8000/type-option`;
            const response = await axios.get(url);
            setTypeOptions(response.data);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }
    useEffect(() => {
        console.log(typeOptions)
    }, [typeOptions])

    useEffect(() => {
        fetchType();
    }, [])

    //setting up options for location input
    const [locationOptions, setLocationOptions] = useState();
    async function fetchLocation() {
        try {
            const url = `http://localhost:8000/location-option`;
            const response = await axios.get(url);
            setLocationOptions(response.data);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }
    useEffect(() => {
        console.log(locationOptions)
    }, [locationOptions])

    useEffect(() => {
        fetchLocation();
    }, [])

    //setting up options for employee input
    const [employeeOptions, setEmployeeOptions] = useState();
    const [employeeQuery, setEmployeeQuery] = useState("");
    async function fetchEmployee() {
        try {
            const url = `http://localhost:8000/employee-option`;
            const response = await axios.get(url);
            setEmployeeOptions(response.data);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }
    useEffect(() => {
        console.log(employeeOptions)
    }, [employeeOptions])

    useEffect(() => {
        if (employeeQuery.length == 1)
            fetchEmployee();
        if (employeeQuery.length == 0) {
            setEmployeeQuery('');
            setEmployeeOptions(null);
        }
    }, [employeeQuery])

    //to handle the employee selection
    const [selectedEmployee, setSelectedEmployee] = useState({ name: '', id: '' });
    const selectEmployee = (employee) => {
        setSelectedEmployee(employee)
        setData('employee', employee.id)
    }
    useEffect(() => {

        console.log(selectedEmployee)

    }, [selectedEmployee])

    //
    const clearInput = () => {
        return document.getElementByTagName("input");
    }
    return (
        <div>
            <form className="m-2" onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="m-2">
                        <select className="select" name="type" onChange={(e) => {
                            setData("type", e.target.value)
                        }}>
                            {
                                typeOptions ? typeOptions.map((type, index) => (
                                    <option value={type.id} key={index}>{type.type}</option>
                                )
                                )
                                    : ''
                            }

                        </select>
                    </div>
                    <div className="m-2">
                        <select className=" select select-secondary" name="location" onChange={(e) => {
                            setData("location", e.target.value)
                        }}>
                            {
                                locationOptions ? locationOptions.map((location, index) => (
                                    <option value={location.id} key={index}>{location.name}</option>
                                )
                                )
                                    : ''
                            }

                        </select>
                    </div>
                </div>
                <div>
                    <input type="text" name="employee" placeholder="Employee" onChange={(e) => {
                        handleEmployeeInput(e)
                        setEmployeeQuery(e.target.value)
                        setSelectedEmployee({ id: '', name: e.target.value })
                    }} value={selectedEmployee.name} />
                </div>
                <div>
                    {
                        employeeOptions ? employeeOptions.map((employee, index) => (
                            <span onClick={() => {
                                selectEmployee(employee)
                            }}>{employee.name}</span>
                        )) : ''
                    }
                </div>

                <div className="flex">
                    <div>
                        <input type="date" name="startDate" placeholder="startDate" />
                    </div>
                    <div>
                        <input type="date" name="endDate" placeholder="endDate" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <input type="time" name="startTime" placeholder="startTime" />
                    </div>
                    <div>
                        <input type="time" name="endTime" placeholder="endTime"
                        />
                    </div>
                </div>
                <div>
                    <input type="submit" name="submi" value="submit" />
                </div>

            </form>
        </div>
    )
}

export default AddTask
