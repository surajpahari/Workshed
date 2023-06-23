import { useState } from "react";
import axios from "axios";
import { useForm } from "@inertiajs/inertia-react";

const Login = () => {
    const { data, setData, error, post, processing } = useForm({
        name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        companyName: '',
        companyAddress: '',

    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        post('/request')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    CompanyName
                </div>
                <div>
                    <input type="text" value={data.companyName} name="companyName" placeholder="companyName" onChange={
                        e => setData('companyName', e.target.value)
                    } />
                </div>
                <div>
                    CompanyAddress
                </div>
                <div>
                    <input type="text" name="companyAddress" placeholder="companyName" onChange={(e) => {
                        setData('companyAddress', e.target.value)
                    }} />
                </div>
                <div>
                    Password
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => {
                        setData('password', e.target.value)
                    }} />
                </div>
                <div>
                    ConfirmPassword
                </div>
                <div>
                    <input type="password" name="confirmPassword" placeholder="ConfirmPassword" onChange={(e) => {
                        setData('password_confirmation', e.target.value)
                    }} />
                </div>
                <div>
                    UserName
                </div>
                <div>
                    <input type="text" name="userName" placeholder="userName" onChange={(e) => {
                        setData('username', e.target.value)
                    }} />
                </div>
                <div>
                    Email
                </div>
                <div>
                    <input type="text" name="email" placeholder="Email" onChange={(e) => {
                        setData('email', e.target.value)
                    }} />
                </div>
                <div>
                    Name
                </div>
                <div>
                    <input type="text" name="name" onChange={(e) => {
                        setData('name', e.target.value)
                    }} />

                </div>
                <div>
                    CompnayField
                </div>
                <input type="text" name="companyField" onChange={(e) => {
                    setData("companyField", e.target.value)
                }} />
                <div>
                    <input type="submit" name="submit" value="submit" />
                </div>
            </form>
        </>
    )
}

export default Login;
