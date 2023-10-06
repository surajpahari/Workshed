import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons"
const ViewPaid = ({ rowdata }) => {
    return (
        <>
            <div className="flex justify-center mb-4">
                <div>
                    <div className="flex">
                        <div>
                            {"Paid to: " + rowdata.paid_to}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            {"Job Type: " + rowdata.type}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            {"Amount:" + rowdata.total_amount}
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            {"Paid At:" + rowdata.paid_date}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-green-500">
                <div className="text-lg bg-green-500 text-white p-1">
                    Paid<FontAwesomeIcon icon={faCheckDouble} />
                </div>
            </div>
        </>
    )
}

export default ViewPaid
