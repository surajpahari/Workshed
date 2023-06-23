import { Link } from "@inertiajs/inertia-react"

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to dashboard!!</h1>
            <Link href="/logout" method="post">
                logout
            </Link>
        </div>
    )
}

export default Dashboard
