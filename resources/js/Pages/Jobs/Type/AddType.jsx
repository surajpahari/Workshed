import { useForm } from "@inertiajs/inertia-react"

const AddType = () => {
    const { data, setData, errors, post, processing } = useForm({
        type: '',
        pay_rate: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        post('/job-type')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="type" name="type" onChange={(e) => {
                        setData("type", e.target.value)
                    }} />
                </div>
                <span>{errors.type}</span>
                <div>
                    <input type="submit" name="submit" />
                </div>

            </form>
        </>
    )
}

export default AddType
