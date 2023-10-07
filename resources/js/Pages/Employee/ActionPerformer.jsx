import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
const ActionPerformer = async (link, data, method) => {
    try {
        await toast.promise(
            deleteResource(data),
            {
                loading: 'Deleting...',
                success: <b>Successfully Deleted</b>,
                error: <b>Error While Deleting</b>,
            }
        );
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function deleteResource(id) {
    const url = `http://localhost:8000/employee/destroy/${id}`;
    const responseData = await axios.delete(url);
    return responseData;
}

export default ActionPerformer
