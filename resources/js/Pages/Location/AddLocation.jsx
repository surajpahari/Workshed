import { useForm } from "@inertiajs/inertia-react"

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
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="name" name="name" onChange={(e) => {
                        setData("name", e.target.value)
                    }} />
                </div>
                <span>{errors.name}</span>
                <div>
                    <input placeholder="address" name="address" onChange={(e) => {
                        setData("address", e.target.value)
                    }} />
                </div>
                <span>{errors.name}</span>
                <div>
                    <input placeholder="contact" name="contact" onChange={(e) => {
                        setData("contact", e.target.value)
                    }} />
                </div>
                <span>{errors.email}</span>
                <div>
                    <input placeholder="person" name="person" onChange={(e) => {
                        setData("person", e.target.value)
                    }} />
                </div>
                <span>{errors.person}</span>
                <div>
                    <input type="submit" name="submit" />
                </div>

            </form>
        </>
    )
}

export default AddLocation
