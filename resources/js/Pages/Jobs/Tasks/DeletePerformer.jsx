import { toast } from "react-hot-toast";
import axios from "axios";
const DeletePerformer = async (link, data, method) => {
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
    }
}
async function deleteResource(id) {
    const url = `http://localhost:8000/job/destroy/${id}`;
    const responseData = await axios.delete(url);
    return responseData; // Add this line
}

export default DeletePerformer

