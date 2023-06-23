import { Link } from "@inertiajs/inertia-react";
import UserLogin from "../Forms/UserLogin"
import Front from "../Layout/Front";
const SignIn = () => {
    return (
        <>
            <Front>
                <div>
                    <p>
                        Don't have an Account?
                    </p>
                    <Link
                        href="/signup"
                    >
                        SignUp

                    </Link>
                </div>
                <UserLogin />
            </Front>
        </>
    )
}
export default SignIn;
