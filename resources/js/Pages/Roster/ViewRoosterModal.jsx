import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookReader } from "@fortawesome/free-solid-svg-icons"
const ViewRoosterModal = ({ rowdata }) => {
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
                            Job : {rowdata.tablename}
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
            <div className="flex justify-center bg-blue-500">
                {rowdata.status == 0 ?
                    <div className="text-lg bg-blue-500 text-white p-1">
                        Todo<FontAwesomeIcon className="ml-2" icon={faBookReader} />
                    </div>
                    : ''
                }
                {rowdata.status == 1 ?
                    <div className="text-lg bg-blue-500 text-white p-1">
                        Todo<FontAwesomeIcon className="ml-2" icon={faBookReader} />
                    </div>
                    : ''
                }
                {rowdata.status == 2 ?
                    <div className="text-lg bg-blue-500 text-white p-1">
                        Unpaid<FontAwesomeIcon className="ml-2" icon={faBookReader} />
                    </div>
                    : ''
                }
                {rowdata.status == 3 ?
                    <div className="text-lg bg-blue-500 text-white p-1">
                        Paid<FontAwesomeIcon className="ml-2" icon={faBookReader} />
                    </div>
                    : ''
                }
            </div>
        </>
    )
}

export default ViewRoosterModal
