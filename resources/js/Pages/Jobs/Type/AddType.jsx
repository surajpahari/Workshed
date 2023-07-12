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
                <div className="border-solid  border-0 border-b p-2 border-teal-500">
                    Add
                </div>

                <form onSubmit={handleSubmit} className="m-2">
                    <div className="m-2">
                        <label htmlFor="name" className="font-semibold">Job Type:</label>
                        <input placeholder="Eg: cleaning" name="name" onChange={(e) => {
                            setData("type", e.target.value)
                        }} className=" ml-1  p-1 text-lg border-none bg-blue-100 rounded" />
                    </div>
                    <span>{errors.name}</span>
                    <div className="flex justify-end mt-8">
                        <input type="submit" name="submit" className="bg-blue-500 text-white border-none cursor-pointer
                        rounded p-3 text-base hover:bg-blue-600" />
                    </div>

                </form>
            </div>


        </>
    )
}

export default AddType
