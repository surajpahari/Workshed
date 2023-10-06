import { useEffect } from "react";

const ViewCompletedTask = (props) => {
    useEffect(() => {
        console.log("hello form rodata")
    }, [])
    const data = props.rowdata;
    return (
        <div>
            <div>
                {data.id}
            </div>

        </div>
    )
}

export default ViewCompletedTask
