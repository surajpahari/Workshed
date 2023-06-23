import { Link } from "@inertiajs/inertia-react";

const Header = () => {
    return (
        <>
            <h1>
                Welcome to Workshed
            </h1>
            <Link href="/signin"
                method="get"
                as="button"
            >
                SignIn
            </Link>

        </>
    )
}
export default Header;
