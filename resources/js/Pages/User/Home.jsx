import { useForm } from "@inertiajs/inertia-react";
import CreateEmployee from "../Forms/CreateEmployee";
import EmployeeList from "../Components/EmployeeList";
import PublishNotice from "../Components/PublishNotice";
import { useState } from "react";
const Home = ({ data }) => {
    const { datas, setData, error, post, processing } = useForm(
        {

        }
    )
    const tester = () => {
        console.log({ data });
    }
    const [component, setComponent] = useState();
    const handleCompoent = () => {
        setComponent(<CreateEmployee />);
    }
    const provideList = () => {
        setComponent(<EmployeeList />);
    }
    const publishNotice = () => {
        setComponent(<PublishNotice />);
    }
    return (
        <>
            <button type="button" onClick={tester}>click Me</button>
            <h1> Welcome {data.username}</h1>
            <h1>Company Name</h1>
            <button type="button" onClick={handleCompoent}>create Employee</button >
            <button type="button" onClick={provideList} >List Employees</button>
            <button type="button" onClick={publishNotice}>Publish Notice</button>
            <button type="button" >Add JobType</button>
            <button type="button" >Add JobAddress</button>
            <button type="button" >Delete Employee</button>
            <button type="button" >Update Employee</button>
            {component}
        </>
    )
}
export default Home;
