import { Link } from "@inertiajs/inertia-react"

const Top = ({ children }) => {
    return (
        <>
            <div>
                <span>Welcome to Dashboard</span>
                <Link href="/logout" method="post" as-="button">Logout</Link>
            </div>
            {children}
        </>
    )
}

export default Top
