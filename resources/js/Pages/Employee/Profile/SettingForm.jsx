const SettingForm = () => {
    return (
        <div className="m-4">
            <form>
                <div className="flex">
                    <div className="w-72">
                        Old Password
                    </div>
                    <div>
                        <input type="text" name="old_password" placeholder="old_password" />
                    </div>
                </div>
                <div className="flex">
                    <div className="w-72">
                        New Password
                    </div>
                    <div>
                        <input type="text" name="old_password" placeholder="new_password" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div className="w-72">
                            Password Confirmation
                        </div>
                    </div>
                    <div>
                        <input type="text" name="old_password" placeholder="new_password_confirmation" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div className="w-72">
                        </div>

                    </div>
                    <div>
                        <input type="submit" name="change" value="Change" className="bg-red-500 border-none text-white rounded py-2" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SettingForm
