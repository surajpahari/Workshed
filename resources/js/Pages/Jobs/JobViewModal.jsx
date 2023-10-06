import { useEffect } from "react"

const JobViewModal = (props) => {
    useEffect(() => {
        console.log("props are", props)
    }, [])
    return (
        <div className="flex items-center justify-center">
            <div>
                <div className="flex gap-3 bg-green-50 p-6">
                    <div>
                        Task Id
                    </div>
                    <div>
                        {props.rowdata.id}
                    </div>
                </div>

                <div className="flex gap-3 bg-green-50 p-6">
                    <div>
                        Task
                    </div>
                    <div>
                        {props.rowdata.tablename}
                    </div>
                </div>
                <div className="flex gap-3 bg-green-50 p-6">
                    <div>
                        Start date
                    </div>
                    <div>
                        {props.rowdata.user.name}
                    </div>
                </div>

                <div classname="flex gap-3 bg-green-50 p-6">
                    <div>
                        assigned to
                    </div>
                    <div>
                        {props.rowdata.user.name}
                    </div>
                </div>
                <div classname="flex gap-3 bg-green-50 p-6">
                    <div>
                        End Date
                    </div>
                    <div>
                        {props.rowdata.endDate}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JobViewModal
