

import { useEffect, useState } from "react";
import axios from "axios";

const ListEmployee = () => {
    const [user, setUser] = useState(null);

    async function getEmployeeList(pageNo = 1) {
        try {
            const url = `http://localhost:8000/api/employeeList/?page=${pageNo}`;
            const response = await axios.get(url);
            setUser(response.data);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }

    useEffect(() => {
        getEmployeeList()
            .catch(error => {
                // Handle the error here
                console.error("Error fetching employee list:", error);
            });
    }, []);

    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <>
            {user ? user.data.map((u) =>
                <p>{u.name}</p>
            ) : ''}
        </>
    );
};

export default ListEmployee;

