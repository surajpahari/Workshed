import { useForm } from "@inertiajs/inertia-react";
import Front from "../Layout/Front";
const UserLogin = () => {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    })

    function submit(e) {
        e.preventDefault()
        post('/login')
    }

    return (
        <div className="flex items-center justify-center">
            <form onSubmit={submit}>
                <div className="mb-6">
                    <div className="text-lg">
                        Email
                    </div>
                    <div >
                        <input
                            className="text-lg p-1 w-80"
                            type="text" value={data.email} onChange={e => setData('email', e.target.value)} />
                    </div>
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                </div>
                <div className="mb-6">
                    <div>
                        Password
                    </div>
                    <div>
                        <input
                            className="text-lg p-1 w-80"
                            type="password" value={data.password} onChange={e => setData('password', e.target.value)} />
                    </div>
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <div>
                    <div className="mb-2">
                        <input type="checkbox" checked={data.remember} onChange={e => setData('remember', e.target.checked)} /> Remember Me
                    </div>
                    <div className="bg-orange-500  bg-none border-none">
                        <button
                            className="w-full bg-orange-500  text-xl p-2 text-white  border-none outline-none "
                            type="submit" disabled={processing}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default UserLogin;
