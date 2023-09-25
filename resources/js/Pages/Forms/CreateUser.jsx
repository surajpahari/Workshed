import { useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import axios from "axios";
const CreateUser = () => {
    const { data, setData, errors, post, processing } = useForm(
        {
            companyName: '',
            companyAddress: '',
            companyContact: '',
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
        post('/signup');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Company Details</h1>
                <div>
                    <input type="text" name="companyName" placeholder="CompanyName" onChange={(e) => {
                        setData('companyName', e.target.value)
                    }} />
                </div>
                <span>
                    {errors.companyName}
                </span>
                <div>
                    <input type="text" name="companyAddress" placeholder="CompanyAddress" onChange={(e) => {
                        setData('companyAddress', e.target.value)
                    }} />
                </div>
                <span>
                    {errors.companyAddress}
                </span>
                <div>
                    <input type="text" name="companyContact" placeholder="CompanyContact" onChange={(e) => {
                        setData('companyContact', e.target.value)
                    }} />
                </div>
                <span>
                    {errors.companyContact}
                </span>
                <h1>User Details</h1>
                <div>
                    <input type="text" name="username" placeholder="username" onChange={(e) => {
                        setData('username', e.target.value)

                    }} />
                </div>
                <span>
                    {errors.username}
                </span>
                <div>
                    <input type="text" name="name" placeholder="name" onChange={(e) => {
                        setData('name', e.target.value)
                    }} />
                </div>
                <span>
                    {errors.name}
                </span>
                <div>
                    <input type="text" name="email" placeholder="email" onChange={(e) => {
                        setData('email', e.target.value)
                    }} />
                </div>
                <span>
                    {errors.email}
                </span>
                <div>
                    <input type="password" name="name" placeholder="password" onChange={(e) => {
                        setData('password', e.target.value)
                    }} />
                </div>
                <span>
                    {errors.password}
                </span>
                <div>
                    <input type="password" name="name" placeholder="confirmpassword" onChange={(e) => {
                        setData('password_confirmation', e.target.value)
                    }} />
                </div>
                <div>
                    <input type="submit" name="submit" value="submit" />
                </div>
            </form>
        </>
    )

}
export default CreateUser;
