import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
const ViewCompletedTodo = ({ rowdata }) => {
    return (
        <>
            <div className="flex justify-center mb-4">
                <div>
                    <div className="flex">
                        <div>
                            Assigned to : {rowdata.user.name}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            Job : {rowdata.type.type}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            start : {rowdata.start}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            end : {rowdata.end}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-green-500">
                <div className="text-lg bg-green-500 text-white p-1">
                    Completed<FontAwesomeIcon className="ml-2" icon={faCheckDouble} />
                </div>
            </div>
        </>
    )
}

export default ViewCompletedTodo
