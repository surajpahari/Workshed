import Navbar from "../UI/Navbar/Navbar";

const Welcome = () => {
    return (
        <>
            <Navbar />
            <div className="">
                <div className=" m-2 flex justify-center">
                    <div>
                        <h1 class="h1-large text-center">Organize your work, from anywhere</h1>
                    </div>
                </div>
                <div className=" m-2 flex justify-center">
                    <div>
                        <h5 class="text-md text-center">Rooster managment app for small business owner</h5>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-none outline-none border-none p-2 text-lg rounded text-white bg-orange-500">
                        signup
                    </button>
                </div>
            </div>
        </>
    )
}
export default Welcome;
