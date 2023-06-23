import { Link } from "@inertiajs/inertia-react";
import CreateUser from "../Forms/CreateUser";
import Front from "../Layout/Front";

const SignUp = () => {
    return (
        <>
            <Front>
                <div>
                    Already  have an account?
                    <Link href="/signin" >Sing in</Link>
                </div>
                <CreateUser />
            </Front>
        </>
    )
}
export default SignUp;
