import { useForm } from "@inertiajs/inertia-react"
import { useEffect } from "react";
import { toast } from "react-hot-toast"
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { ModalContext } from "../../ModalContext";


const CreateEmployee = () => {
    const { data, setData, errors, post, clearErrors, processing } = useForm({
        username: '',
        name: '',
        email: '',
        phone_no: '',
        password: '',
        role_id: 0,
        payrate: '',
    })

    const { changeModalStatus } = useContext(ModalContext);


    const send = async () => {
        const response = await axios.post("/employee", data);
        return response;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors) {
            clearErrors()
        }
        post('/employee', {
            onSuccess: () => {
                changeModalStatus(false)
                toast.success("Employee Created Sucessfully")
            },
            onError: () => (toast.error("Error creating employee"))
        })
        // Handle error if needed
    };
    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <>
            <Toaster />
            <div className="w-full max-h-full bg-white mb-2">
                <div className="flex max-h-full justify-center items-center">
                    <form onSubmit={handleSubmit}>
                        <div className=" text-lg font-semibold text-white">
                            UserName
                        </div>
                        <div>
                            <input required placeholder="username"
                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                value={data.username}
                                name="username"
                                onFocus={() => { clearErrors("username") }}
                                onChange={(e) => {
                                    setData("username", e.target.value)
                                }} />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded">
                            <span>{errors.username}</span>
                        </div>


                        <div className=" text-lg font-semibold text-white">
                            Name
                        </div>
                        <div>
                            <input required placeholder="name"
                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                onFocus={() => { clearErrors("name") }}

                                name="name" onChange={(e) => {
                                    setData("name", e.target.value)
                                }} />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded">
                            <span>{errors.name}</span>
                        </div>

                        <div className=" text-lg font-semibold text-white">
                            Email
                        </div>
                        <div>
                            <input required placeholder="email"
                                onFocus={() => { clearErrors("email") }}

                                type="email"
                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                name="email" onChange={(e) => {
                                    setData("email", e.target.value)
                                }} />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded">
                            <span>{errors.email}</span>
                        </div>

                        <div className=" text-lg font-semibold text-white">
                            Phone Number
                        </div>
                        <div>
                            <input required placeholder="phone_no"
                                onFocus={() => { clearErrors("phone_no") }}

                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                name="phone_no" onChange={(e) => {
                                    setData("phone_no", e.target.value)
                                }} />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded">
                            <span>{errors.phone_no}</span>
                        </div>

                        <div className="text-white text-lg font-semibold">
                            Password
                        </div>
                        <div>
                            <input required placeholder="password"
                                onFocus={() => { clearErrors("password") }}

                                type="password"
                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                name="password" onChange={(e) => {
                                    setData("password", e.target.value)
                                }}
                            />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded max-w-full">
                            <span>{errors.password}</span>
                        </div>

                        <div className=" text-lg font-semibold text-white">
                            Confirm Password
                        </div>
                        <div>
                            <input required placeholder="confirm_password"
                                onFocus={() => { clearErrors("password_confirmation") }}

                                type="password"
                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                name="password_confirmation" onChange={(e) => {
                                    setData("password_confirmation", e.target.value)
                                    clearErrors("password")
                                }} />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded">
                            <span>{errors.password_confirmation}</span>
                        </div>

                        <div className=" text-lg font-semibold text-white">
                            Payrate
                        </div>
                        <div>
                            <input required placeholder="payrate"
                                onFocus={() => { clearErrors("payrate") }}
                                className="outline-none rounded-md border-none text-xl p-1 px-1 my-2"
                                name="payrate" onChange={(e) => {
                                    setData("payrate", e.target.value)
                                }} />
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded max-w-full">
                            <span>{errors.payrate}</span>
                        </div>

                        <div className=" text-lg font-semibold text-white">
                            Role
                        </div>
                        <div>
                            <select className="outline-none border-none text-xl min-w-[257px] rounded-md p-1 px-1 my-2 bg-white"
                                onFocus={() => { clearErrors("role_id") }}

                                onChange={(e) => { setData("role_id", e.target.value) }}>
                                <option value={0} label="Employee" />
                                <option value={1} label="Admin" className="text-red" />
                            </select>
                        </div>
                        <div className="text-white bg-red-500 px-1 rounded">
                            <span>{errors.role_id}</span>
                        </div>
                        <div className="mt-2 flex justify-end">
                            <div>
                                <input type="submit" name="submit"
                                    className="border-none text white cursor-pointer rounded text-xl p-1 text-white bg-green-400 font-bold" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateEmployee
