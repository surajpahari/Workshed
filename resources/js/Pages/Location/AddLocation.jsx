import { useForm } from "@inertiajs/inertia-react"
import { toast } from "react-hot-toast"
const AddLocation = () => {
    const { data, setData, errors, post, processing, reset, clearErrors } = useForm({
        name: '',
        address: '',
        contact: '',
        person: '',
        lat: '',
        long: '',
        role_id: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        post('/location', {
            onSuccess: () => {
                reset()
                toast.success("New Location Created sucessfully")
            },
            onError: () => (toast.error("Error Occured while processing form"))
        })
    }

    return (
        <>
            <div>
                <div className="border-solid  text-xl border-0 border-b p-2 border-teal-500 bg-teal-500 text-white">
                    Add Location
                </div>
                <form onSubmit={handleSubmit} className="m-2">
                    <div className="m-2">
                        <div><label htmlFor="name" className="font-semibold">Name:</label></div>
                        <input
                            required
                            placeholder="Name"
                            onFocus={() => { clearErrors('name') }}
                            value={data.name}
                            onChange={(e) => {
                                setData("name", e.target.value)
                            }} className=" ml-1  p-1 text-lg border-none bg-sky-50 rounded" />
                    </div>
                    {errors ? errors.name ?
                        <span className="p-1 bg-red-400 text-white rounded">{errors.name}</span>
                        : '' : ''
                    }

                    <div className="m-2">
                        <div><label htmlFor="address" className="font-semibold">Address:</label></div>
                        <input
                            required
                            placeholder="address" name="address"
                            onFocus={() => { clearErrors('address') }}
                            value={data.address}
                            onChange={(e) => {
                                setData("address", e.target.value)
                            }} className="ml-1 p-1 text-lg border-none bg-sky-50 rounded" />
                    </div>
                    {errors ? errors.address ?
                        <span className="p-1 bg-red-400 text-white rounded">{errors.address}</span>
                        : '' : ''
                    }

                    <div className="m-2">
                        <div><label htmlFor="contact" className="font-semibold">Contact No:</label></div>
                        <input
                            required
                            type="inter"
                            placeholder="Contact No" name="contact"
                            onFocus={() => { clearErrors('contact') }}
                            value={data.contact}
                            onChange={(e) => {
                                setData("contact", e.target.value)
                            }} className="ml-1 p-1 text-lg border-none bg-sky-50 rounded" />
                    </div>
                    {errors ? errors.contact ?
                        <span className="p-1 bg-red-400 text-white rounded">{errors.contact}</span>
                        : '' : ''
                    }

                    <div className="m-2">
                        <div><label htmlFor="person" className="font-semibold">Contact Person</label></div>
                        <input
                            placeholder="person" name="person"
                            onFocus={() => { clearErrors('person') }}
                            value={data.person}
                            onChange={(e) => {
                                setData("person", e.target.value)
                            }} className="ml-1 p-1 text-lg border-none bg-sky-50 rounded" />
                    </div>
                    {errors ? errors.person ?
                        <span className="p-1 bg-red-400 text-white rounded">{errors.person}</span>
                        : '' : ''
                    }

                    <div className="flex justify-end mt-8">
                        <input type="submit" name="submit" className="bg-teal-500 text-white border-none cursor-pointer
                        rounded p-1 px-2 text-lg hover:text-lg" disabled={processing} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddLocation
