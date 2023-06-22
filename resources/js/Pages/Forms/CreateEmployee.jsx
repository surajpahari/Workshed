import { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
const CreateEmployee = () => {
    const { data, setData, error, post, processing } = useForm(
        {
            name: '',
            username: '',
            password: '',
            password_confirmation: '',
            email: '',
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post('/createEmployee');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="name" placeholder="name" onChange={(e) => {
                        setData('name', e.target.value)
                    }} />
                </div>
                <div>
                    <input type="text" name="username" placeholder="username" onChange={(e) => {
                        setData('username', e.target.value)

                    }} />
                </div>
                <div>
                    <input type="text" name="name" placeholder="password" onChange={(e) => {
                        setData('password', e.target.value)
                    }} />
                </div>
                <div>
                    <input type="text" name="name" placeholder="confirmpassword" onChange={(e) => {
                        setData('password_confirmation', e.target.value)
                    }} />
                </div>
                <div>
                    <input type="text" name="role" placeholder="role" onChange={(e) => {
                        setData('role', e.target.value)
                    }} />
                </div>
                <div>
                    <input type="text" name="email" placeholder="email" onChange={(e) => {
                        setData('email', e.target.value)
                    }} />
                </div>
                <div>
                    <input type="submit" name="submit" value="submit" />
                </div>
            </form>
        </>
    )

}
export default CreateEmployee;
