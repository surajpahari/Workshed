import { useForm } from "@inertiajs/inertia-react"
import axios from "axios"
import { useEffect, useState } from "react"
import SearchSelect from "./SearchSelect"
const AddTask = () => {
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

    const dataSetter = (data, value) => {
        setData(data, value)
    }
    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>
            <div className="border-solid  text-xl border-0 border-b p-2 border-teal-500 bg-teal-500 text-white">
                New Job
            </div>
            <form onSubmit={handleSubmit}>
                <SearchSelect title="Employee" optionLink="http://localhost:8000/employee-option" label="name" setter={dataSetter} fordata="employee" />
                <SearchSelect title="Job-Type" optionLink="http://localhost:8000/type-option" label="type" fordata="type" setter={dataSetter} />
                <SearchSelect title="Location" optionLink="http://localhost:8000/location-option" label="name" fordata="location" setter={dataSetter} />

                {/* for the start date and end date*/}
                <div className="flex">
                    <div>
                        <input type="date" name="startDate" placeholder="startDate" onChange={(e) => {
                            setData("startDate", e.target.value)
                        }} />
                    </div>
                    <div>
                        <input type="date" name="endDate" placeholder="endDate" onChange={(e) => {
                            setData("endDate", e.target.value)
                        }} />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <input type="time" name="startTime" placeholder="startTime" onChange={(e) => {
                            setData("startTime", e.target.value)
                        }} />
                    </div>
                    <div>
                        <input type="time" name="endTime" placeholder="endTime" onChange={(e) => {
                            setData("endTime", e.target.value)
                        }} />
                    </div>
                </div>
                <div className="bg-gray-100  p-2">
                    <input type="submit" name="submit" value="submit" className="cursor-pointer text-lg p-1 bg-sky-500 border-none rounded text-white" />
                </div>

            </form >
        </div >
    )
}

export default AddTask
