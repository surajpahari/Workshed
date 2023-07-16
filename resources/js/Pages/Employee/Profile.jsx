import DashboardLayout from "../Layout/DashboardLayout";
const Profile = () => {
    return (
        <>
            <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                <div className="m-0 flex-grow">
                    <h1 className="m-0 font-light">Profile</h1>
                </div>
                <div>

                    Home&nbsp; / &nbsp;profile
                </div>
            </div>
            <div className="flex">
                {/*left side containder*/}
                <div className=" p-4 m-2 border-solid border border-green-500 border-t-4 rounded">
                    {/*pic and info*/}
                    <div>
                        profilepic
                    </div>
                    <div>
                        name
                    </div>
                    {/*other detail*/}
                    <div>
                        <div className="border-0 border-t border-t-gray-200 border-solid ">
                            joined
                        </div>
                        <div>
                            email
                        </div>
                        <div>
                            phone no
                        </div>
                    </div>
                </div>
                {/* right side contiander*/}
                <div className=" m-2 flex-grow border-solid border border-green-500">
                    {/*top menu bar*/}
                    <div className="flex border-0 border-solid border-b border-b-gray-400">

                        <div className="m-2 p-2 text-lg font-light cursor-pointer rounded hover:bg-teal-500 hover:text-white">
                            Profile
                        </div>
                        <div className="m-2 p-2 text-lg font-light cursor-pointer rounded hover:bg-teal-500 hover:text-white">
                            Emergency Contact
                        </div>

                        <div className="m-2 p-2 text-lg font-light cursor-pointer rounded hover:bg-teal-500 hover:text-white">
                            Details
                        </div>

                        <div className="m-2 p-2 text-lg font-light cursor-pointer rounded hover:bg-teal-500 hover:text-white">
                            Setting
                        </div>

                        <div className="m-2 p-2 text-lg font-light cursor-pointer rounded hover:bg-teal-500 hover:text-white">
                            Administration
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}
Profile.layout = (page) => (
    < DashboardLayout >
        <div className="flex-grow">
            {page}
        </div>
    </DashboardLayout >
);

export default Profile
