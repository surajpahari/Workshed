import Navbar from "../../UI/Navbar/Navbar";
const Front = ({ children }) => {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
        </>

    )
}
export default Front;
