const ViewUnpaid = (props) => {
    const rowdata = props.rowdata;
    return (
        <>
            <div className="flex justify-center items-center text-xl m-4">
                <div>
                    <div className="flex ">
                        <div>
                            Job by:
                        </div>
                        <div>
                            {rowdata.user.name}
                        </div>
                    </div>
                    <div className="flex ">
                        <div>
                            Job:
                        </div>
                        <div>
                            {rowdata.tablename}
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            Total Hours:
                        </div>
                        <div>
                            {rowdata.payDetail.totalHours.toFixed(1)
                            }
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            Total Pay:
                        </div>
                        <div>

                            {"Rs " + rowdata.payDetail.totalPay.toFixed(1)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-center items-center
                            w-full
                        bg-gray-200
                        text-xl
                    bold
                        text-gray-900
                        p-1 cursor-pointer mt-4"
                >
                    Unpaid
                </div>
            </div>
        </>
    )
}

export default ViewUnpaid;
