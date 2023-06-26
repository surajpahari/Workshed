import { Link } from "@inertiajs/inertia-react"
import Authbar from "../../UI/Navbar/Authbar"
const Top = ({ children }) => {
    return (
        <>
            <Authbar />
            {children}
        </>
    )
}

export default Top
