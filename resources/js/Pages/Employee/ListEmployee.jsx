import Top from "../Layout/Top";
import SideBar from "../Layout/SideBar";
import EmployeeLayout from "../Layout/Employee/EmployeeLayout";

const ListEmployee = ({ users }) => {
    console.log(users);
    return (
        <>
            <Top>
                <SideBar>
                    <EmployeeLayout>
                        {users.map((user) => (
                            <div key={user.id}>
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                                <span>{user.username}</span>
                            </div>
                        ))}
                    </EmployeeLayout>
                </SideBar>
            </Top>
        </>
    );
};

export default ListEmployee;

