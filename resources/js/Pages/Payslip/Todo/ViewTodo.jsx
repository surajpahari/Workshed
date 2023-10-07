import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from "@fortawesome/free-solid-svg-icons"
const ViewTodo = ({ rowdata }) => {
    return (
        <>
            <div className="flex justify-center mb-4">
                <div>
                    <div className="flex">
                        <div>
                            {"Assigned to: " + rowdata.user.name}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            {"Job Type: " + rowdata.type.type}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            {"Final amount:  Rs " + rowdata.paydetail.totalPay.toFixed(1)}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            {"Total Hours:  " + rowdata.paydetail.totalHours.toFixed(1) +
                                " hrs"}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-blue-500">
                <div className="text-lg bg-blue-500 text-white p-1">
                    todo<FontAwesomeIcon className="ml-2" icon={faBookReader} />
                </div>
            </div>
        </>
    )
}

export default ViewTodo
