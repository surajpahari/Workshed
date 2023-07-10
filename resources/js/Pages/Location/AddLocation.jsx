import { useForm } from "@inertiajs/inertia-react"
import { document } from "postcss"

const AddLocation = () => {
    const { data, setData, errors, post, processing } = useForm({
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
        post('/location')
        setData(null);
    }
    const clearInput = () => {
        return document.getElementByTagName("input");
    }
    return (
        <>
            <div>
                <div className="border-solid  border-0 border-b p-2 border-teal-500">
                    Add
                </div>
                <form onSubmit={handleSubmit} className="m-2">
                    <div className="m-2">
                        <label htmlFor="name" className="font-semibold">Name:</label>
                        <input placeholder="Name" name="name" onChange={(e) => {
                            setData("name", e.target.value)
                        }} className=" ml-1  p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors.name}</span>
                    <div className="m-2">
                        <label htmlFor="address" className="font-semibold">Address:</label>
                        <input placeholder="address" name="address" onChange={(e) => {
                            setData("address", e.target.value)
                        }} className="ml-1 p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors.name}</span>
                    <div className="m-2">
                        <label htmlFor="contact" className="font-semibold">Contact No:</label>
                        <input placeholder="Contact No" name="contact" onChange={(e) => {
                            setData("contact", e.target.value)
                        }} className="ml-1 p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors.email}</span>
                    <div className="m-2">
                        <label htmlFor="person" className="font-semibold">Contact Person</label>
                        <input placeholder="person" name="person" onChange={(e) => {
                            setData("person", e.target.value)
                        }} className="ml-1 p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors.person}</span>
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
