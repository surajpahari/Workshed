import { Link } from "@inertiajs/inertia-react";

const Header = () => {
    return (
        <>
            <div className="bg-red-300">
                <div className="flex">
                    <div>
                        WorkShed
                    </div>

                </div>
            </div>
            <h1 className="text-red-300">
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
