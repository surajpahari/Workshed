import { useForm } from "@inertiajs/inertia-react"
import { useEffect } from "react";
import { toast } from "react-hot-toast"
import axios from "axios";

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



    const send = async () => {
        const response = await axios.post("/employee", data);
        return response;
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await toast.promise(
                send(data),
                {
                    loading: 'Creating...',
                    success: <b>Successfully Created</b>,
                    error: <b>Error While Creating</b>,
                }
            );
        } catch (error) {
            console.error("An error occurred:", error);
        }
        // Handle error if needed
    };
    useEffect(() => {
        console.log(data)
    }, [data])


    return (
        <>
            <div className="w-full max-h-full">
                <div className="flex max-h-full justify-center items-center">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input placeholder="username"

                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="username" onChange={(e) => {
                                    setData("username", e.target.value)
                                }} />
                        </div>
                        <span>{errors.username}</span>
                        <div>
                            <input placeholder="name"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="name" onChange={(e) => {
                                    setData("name", e.target.value)
                                }} />
                        </div>
                        <span>{errors.name}</span>
                        <div>
                            <input placeholder="email"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="email" onChange={(e) => {
                                    setData("email", e.target.value)
                                }} />
                        </div>
                        <span>{errors.email}</span>
                        <div>
                            <input placeholder="phone_no"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="phone_no" onChange={(e) => {
                                    setData("phone_no", e.target.value)
                                }} />
                        </div>
                        <span>{errors.phone_no}</span>
                        <div>
                            <input placeholder="password"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="password" onChange={(e) => {
                                    setData("password", e.target.value)
                                }} />
                        </div>
                        <span>{errors.password}</span>
                        <div>
                            <input placeholder="confirm_password"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="password_confirmation" onChange={(e) => {
                                    setData("password_confirmation", e.target.value)
                                }} />
                        </div>
                        <span>{errors.password_confirmation}</span>
                        <div>
                            <input placeholder="payrate"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="payrate" onChange={(e) => {
                                    setData("payrate", e.target.value)
                                }} />
                        </div>
                        <span>{errors.payrate}</span>
                        <div>
                            <input placeholder="role"
                                className="outline-none rounded-md border-none text-lg px-1 my-2"
                                name="role" onChange={(e) => {
                                    setData("role_id", e.target.value)
                                }} />
                        </div>
                        <span>{errors.role_id}</span>
                        <div>
                            <input type="submit" name="submit" className="border-none text white cursor-pointer text-lg text-white bg-green-500" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateEmployee
