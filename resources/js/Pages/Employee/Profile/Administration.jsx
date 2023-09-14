import { useForm } from "@inertiajs/inertia-react"
import { useState } from "react"
const Administration = () => {
    const { data, setData } = useForm({
        Email: "",
        Phone_no: "",
    })
    return (
        <div className="m-4">
            <div className="flex my-2">
                <div className="w-48">
                    <span className="text-base">
                        Email
                    </span>
                </div>
                <div>
                    <input type="email" name="email" placeholder="email" className="text-base" />
                </div>
            </div>
            <div className="flex my-2">
                <div className="w-48">
                    <span className="text-base">
                        Phone no
                    </span>
                </div>
                <div>
                    <input type="text" name="phone" placeholder="phone" className="text-base" />
                </div>
            </div>
            <div className="flex my-2">
                <div className="w-48">
                    <span></span>
                </div>
                <div>
                    <input type="submit" name="change" value="Change" className="bg-red-500 border-none text-white rounded py-2 text-base" />
                </div>
            </div>

        </div>
    )
}

export default Administration
