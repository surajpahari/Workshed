import Header from "../Components/Header";
const Front = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                {children}
            </div>
        </>

    )
}
export default Front;
