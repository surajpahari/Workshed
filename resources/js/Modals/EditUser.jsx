import React, { useEffect, useState } from 'react';
import './Modal.css'

function EditUser(props) {
    useEffect(() => {
        console.log("The data is ", props.data.username)
    })

    return (
        <>
            <form>
                <div>
                    This is Edit User
                    <div>
                        {props.data.username}
                    </div>

                </div>
            </form>
        </>
    );
}

export default EditUser;

