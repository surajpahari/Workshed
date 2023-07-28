const SettingForm = () => {
    return (
        <div>
            <form>
                <div className="flex">
                    <div>
                        Old Password
                    </div>
                    <div>
                        <input type="text" name="old_password" placeholder="old_password" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        New Password
                    </div>
                    <div>
                        <input type="text" name="old_password" placeholder="new_password" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        Password Confirmation
                    </div>
                    <div>
                        <input type="text" name="old_password" placeholder="new_password_confirmation" />
                    </div>
                </div>
                <div>
                    <input type="submit" name="submit" value="submit" />
                </div>
            </form>
        </div>
    )
}

export default SettingForm
