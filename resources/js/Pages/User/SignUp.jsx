import { Link } from "@inertiajs/inertia-react";
import CreateUser from "../Forms/CreateUser";
import Front from "../Layout/Front";

const SignUp = () => {
    return (
        <>
            <Front>
                <div className="justify-center items-center flex m-6 text-lg">
                    <div>
                        Already  have an account? ;&nsp;
                        <Link href="/signin" >Sign in</Link>
                    </div>
                </div>
                <CreateUser />
            </Front>
        </>
    )
}
export default SignUp;
