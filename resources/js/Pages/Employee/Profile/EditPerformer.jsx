import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
export const editPerformer = async (link, data, method) => {
    console.log(link, data, method);

    try {
        await toast.promise(
            updateUser(),
            {
                loading: 'Updating...',
                success: <b>Successfully Updated</b>,
                error: <b>Error While Updating</b>,
            }
        );
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
async function updateUser() {
    const url = `http://localhost:8000/edit-employee`;
    const responseData = await axios.get(url);
    return responseData; // Add this line
}

