import { useEffect, useRef } from "react"

const ProfileDetail = ({ username, email, phone_no }) => {
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
                        {username}
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
                        {email}
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
                        {phone_no ? phone_no : "----------"}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetail
