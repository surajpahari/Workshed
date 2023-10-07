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
            <div className="flex justify-center mx-32">
                <form onSubmit={handleSubmit}>
                    <h1>Company Details</h1>
                    <div className="text-lg">
                        CompanyName
                    </div>
                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="text" name="companyName" placeholder="CompanyName" onChange={(e) => {
                                setData('companyName', e.target.value)
                            }} />
                    </div>
                    <div className="text-red-500">
                        <span className="text-red-500">
                            {errors.companyName}
                        </span>
                    </div>

                    <div className="">
                        CompanyAddress
                    </div>
                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="text" name="companyAddress" placeholder="CompanyAddress" onChange={(e) => {
                                setData('companyAddress', e.target.value)
                            }} />
                    </div>
                    <div>
                        <span className="text-red-500">
                            {errors.companyAddress}
                        </span>
                    </div>

                    <div className="text-lg">
                        CompanyContact
                    </div>

                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="text" name="companyContact" placeholder="CompanyContact" onChange={(e) => {
                                setData('companyContact', e.target.value)
                            }} />
                    </div>
                    <span className="text-red-500">
                        {errors.companyContact}
                    </span>
                    <h1>User Details</h1>
                    <div className="text-lg">
                        CompanyContact
                    </div>
                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="text" name="username" placeholder="username" onChange={(e) => {
                                setData('username', e.target.value)

                            }} />
                    </div>
                    <div>
                        <span className="text-red-500">
                            {errors.username}
                        </span>
                    </div>
                    <div className="text-lg">
                        CompanyContact
                    </div>

                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="text" name="name" placeholder="name" onChange={(e) => {
                                setData('name', e.target.value)
                            }} />
                    </div>
                    <div>
                        <span className="text-red-500">
                            {errors.name}
                        </span>
                    </div>
                    <div className="text-lg">
                        CompanyContact
                    </div>
                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="text" name="email" placeholder="email" onChange={(e) => {
                                setData('email', e.target.value)
                            }} />
                    </div>
                    <div>
                        <span className="text-red-500">
                            {errors.email}
                        </span>
                    </div>
                    <div className="text-lg">
                        CompanyContact
                    </div>
                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="password" name="name" placeholder="password" onChange={(e) => {
                                setData('password', e.target.value)
                            }} />
                    </div>
                    <div>
                        <span className="text-red-500">
                            {errors.password}
                        </span>
                    </div>
                    <div className="text-lg">
                        CompanyContact
                    </div>

                    <div>
                        <input
                            className="w-80 p-1 my-2"
                            type="password" name="name" placeholder="confirmpassword" onChange={(e) => {
                                setData('password_confirmation', e.target.value)
                            }} />
                    </div>
                    <div>
                        <input
                            className="w-full text-white bg-orange-400 outline-none border-none text-lg p-2 m-2"
                            type="submit" name="submit" value="submit" />
                    </div>
                </form>
            </div>
        </>
    )

}
export default CreateUser;
