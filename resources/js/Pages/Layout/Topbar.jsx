import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Topbar = ({ handleShowMenuTitle }) => {
    return (
        <div className="flex w-full items-center h-full">
            <div className="flex-grow mr-2 ">
                <div>
                    <FontAwesomeIcon icon={faBars} className="text-xl bold cursor-pointer" onClick={handleShowMenuTitle} />
                </div>
            </div>
            <div className="mr-6 ml-20 text-large">
                <div>
                    you are user
                </div>
            </div>
        </div>
    )
}

export default Topbar
