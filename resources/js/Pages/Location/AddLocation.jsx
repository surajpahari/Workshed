import { useForm } from "@inertiajs/inertia-react"
import { toast } from "react-hot-toast"
const AddLocation = () => {
    const { data, setData, errors, post, processing, reset } = useForm({
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
                <div className="border-solid  border-0 border-b p-2 border-teal-500">
                    Add
                </div>
                <form onSubmit={handleSubmit} className="m-2">
                    <div className="m-2">
                        <div><label htmlFor="name" className="font-semibold">Name:</label></div>
                        <input placeholder="Name"
                            value={data.name}
                            onChange={(e) => {
                                setData("name", e.target.value)
                            }} className=" ml-1  p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors ? errors.name : ''}</span>
                    <div className="m-2">
                        <div><label htmlFor="address" className="font-semibold">Address:</label></div>
                        <input placeholder="address" name="address"
                            value={data.address}
                            onChange={(e) => {
                                setData("address", e.target.value)
                            }} className="ml-1 p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors ? errors.name : ''}</span>
                    <div className="m-2">
                        <div><label htmlFor="contact" className="font-semibold">Contact No:</label></div>
                        <input placeholder="Contact No" name="contact"
                            value={data.contact}
                            onChange={(e) => {
                                setData("contact", e.target.value)
                            }} className="ml-1 p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors ? errors.name : ''}</span>
                    <div className="m-2">
                        <div><label htmlFor="person" className="font-semibold">Contact Person</label></div>
                        <input placeholder="person" name="person"
                            value={data.person}
                            onChange={(e) => {
                                setData("person", e.target.value)
                            }} className="ml-1 p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors ? errors.name : ''}</span>
                    <div className="flex justify-end mt-8">
                        <input type="submit" name="submit" className="bg-blue-500 text-white border-none cursor-pointer
                        rounded p-3 text-base hover:bg-blue-600" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddLocation
