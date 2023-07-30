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
                <div className=" grid grid-cols-4">
                    <div>
                        Username
                    </div>
                    <div>
                        :
                    </div>
                    <div>
                        {props.detail ? props.detail.username : ''}
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div>
                        Email
                    </div>
                    <div>
                        <div>
                            :
                        </div>
                    </div>
                    <div>
                        {props.detail ? props.detail.email : ''}
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div>
                        Phone
                    </div>
                    <div>
                        :
                    </div>
                    <div>
                        {/*props.detail ? props.detail.phone : ''*/}
                        9898989898
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetail
