import { Link } from "@inertiajs/inertia-react";
import UserLogin from "../Forms/UserLogin"
import Front from "../Layout/Front";
const SignIn = () => {
    return (
        <>
            <Front>
                <div className="">
                    <div className="mb-32 ">
                        <div className=" bg-teal-100 flex items-center justify-center">
                            <div className="text-4xl text-bolder">
                                SignIn
                            </div>
                        </div>
                    </div>

                    <UserLogin />
                    <div className="flex items-center justify-center text-xl mt-6  mb-6">
                        <div className="mx-2">
                            Don't have an Account?
                        </div>
                        <div className="mx-2">
                            Please
                        </div>
                        <Link
                            as="div"
                            className="cursor-pointer text-blue-500"
                            href="/signup"
                        >
                            SignUp

                        </Link>
                    </div>
                </div>
            </Front >
        </>
    )
}
export default SignIn;
