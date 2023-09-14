import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
const ActionPerformer = async (link, data, method) => {
    console.log(link, data, method, "bhadai hoo");

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
async function deleteResource(searchQuery) {
    const url = `http://localhost:8000/employee/destroy/${searchQuery}`;
    const responseData = await axios.delete(url);
    return responseData; // Add this line
}
export default ActionPerformer
