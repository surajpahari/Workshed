import { useForm } from "@inertiajs/inertia-react"
import { toast } from "react-hot-toast"
import axios from "axios"

const AddType = () => {
    const { data, setData, errors, post, processing, reset } = useForm({
        type: '',
        pay_rate: ''
    })
    const send = async () => {
        const response = await axios.post("/job-type", data);
        return response;
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        post('/job-type', {
            onSuccess: () => {
                reset('type')
                toast.success("New Job Created sucessfully")
            },
            onError: () => (toast.error("Error creating new Job"))
        })
    }


    return (
        <>
            {/*         <form onSubmit={handleSubmit}>
                < div >
                <input placeholder="type" name="type" onChange={(e) => {
                    setData("type", e.target.value)
                }} />
                </div >
                <span>{errors.type}</span>
                <div>
                    <input type="submit" name="submit" />
                </div>

            </form >*/}
            <div>
                <div className="border-solid  border-0 border-b p-2 bg-teal-500 text-white text-xl">
                    Add
                </div>

                <form onSubmit={handleSubmit} className="m-2">
                    <div className="m-2">
                        <label htmlFor="name" className="font-semibold">Job Type:</label>
                        <input
                            required
                            minLength={4}
                            value={data.type}
                            placeholder="Eg: cleaning" name="name" onChange={(e) => {
                                setData("type", e.target.value)
                            }} className=" ml-1  p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    {
                        errors.type ?
                            <span>{errors.type}</span>
                            : ''

                    }
                    <div className="flex justify-end mt-8">
                        <input type="submit" name="submit" className="bg-teal-500 text-white border-none cursor-pointer
                        rounded p-2 text-base hover:bg-blue-600" disabled={processing} />
                    </div>

                </form>
            </div>


        </>
    )
}

export default AddType
