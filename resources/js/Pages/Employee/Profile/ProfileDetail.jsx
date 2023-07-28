import { useEffect, useRef } from "react"

const ProfileDetail = (props = null) => {
    useEffect(
        () => {
            console.log(props)
        }
        , [props])
    return (
        <div className="m-1">
            <div>
                <div className="border-0  border-b border-b-gray-200 border-solid  font-medium py-4 text-2xl">
                    Personal Details
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        Username
                    </div>
                    <div>
                        :
                    </div>
                    <div className="flex-grow">
                        {props.detail ? props.detail.username : ''}
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        Email
                    </div>
                    <div>
                        :
                    </div>
                    <div className="flex-grow">
                        {props.detail ? props.detail.email : ''}
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-grow">
                        Phone
                    </div>
                    <div>
                        :
                    </div>
                    <div className="flex-grow">
                        {props.detail ? props.detail.phone : ''}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetail
