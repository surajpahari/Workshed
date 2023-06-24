import { useForm } from "@inertiajs/inertia-react"

const CreateEmployee = () => {
    const { data, setData, errors, post, processing } = useForm({
        username: '',
        name: '',
        email: '',
        phone_no: '',
        password: '',
        role_id: '',
        payrate: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        post('/employee')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="username" name="username" onChange={(e) => {
                        setData("username", e.target.value)
                    }} />
                </div>
                <span>{errors.username}</span>
                <div>
                    <input placeholder="name" name="name" onChange={(e) => {
                        setData("name", e.target.value)
                    }} />
                </div>
                <span>{errors.name}</span>
                <div>
                    <input placeholder="email" name="email" onChange={(e) => {
                        setData("email", e.target.value)
                    }} />
                </div>
                <span>{errors.email}</span>
                <div>
                    <input placeholder="phone_no" name="phone_no" onChange={(e) => {
                        setData("phone_no", e.target.value)
                    }} />
                </div>
                <span>{errors.phone_no}</span>
                <div>
                    <input placeholder="password" name="password" onChange={(e) => {
                        setData("password", e.target.value)
                    }} />
                </div>
                <span>{errors.password}</span>
                <div>
                    <input placeholder="confirm_password" name="password_confirmation" onChange={(e) => {
                        setData("password_confirmation", e.target.value)
                    }} />
                </div>
                <span>{errors.password_confirmation}</span>
                <div>
                    <input placeholder="payrate" name="payrate" onChange={(e) => {
                        setData("payrate", e.target.value)
                    }} />
                    <span>{errors.payrate}</span>
                </div>
                <div>
                    <input placeholder="role" name="role" onChange={(e) => {
                        setData("role_id", e.target.value)
                    }} />
                </div>
                <span>{errors.role_id}</span>
                <div>
                    <input type="submit" name="submit" />
                </div>

            </form>
        </>
    )
}

export default CreateEmployee
