const AddTask = () => {
    return (
        <div>
            <form className="m-2">
                <div className="flex">
                    <div>
                        <input type="text" name="type" placeholder="type" />
                    </div>
                    <input type="text" name="address" placeholder="address" />
                </div>
                <div>
                    <input type="text" name="employee" placeholder="employee" />
                </div>
                <div className="flex">
                    <div>
                        <input type="date" name="startDate" placeholder="startDate" />
                    </div>
                    <div>
                        <input type="date" name="endDate" placeholder="endDate" />
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <input type="time" name="startTime" placeholder="startTime" />
                    </div>
                    <div>
                        <input type="time" name="endTime" placeholder="endTime"
                        />
                    </div>
                </div>
                <div>
                    <input type="submit" name="submi" value="submit" />
                </div>

            </form>
        </div>
    )
}

export default AddTask
