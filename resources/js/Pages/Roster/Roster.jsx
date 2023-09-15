import { ModalContextProvider } from "../../ModalContext";
import DashboardLayout from "../Layout/DashboardLayout";
import ListRoster from "./ListRoster";
const Roster = () => {
    return (
        <ModalContextProvider>
            <div className="flex-grow">
                {/*Heading*/}
                <div className=" flex mx-2 my-5  border-b-4 border-b-green-100">
                    <div className="m-0 flex-grow">
                        <h1 className="m-0 font-light">Rosters</h1>
                    </div>
                    <div>

                        Home&nbsp; / &nbsp; Rosters
                    </div>
                </div>
                {/*Heading*/}
                <div>
                    <ListRoster />
                </div>
            </div>
        </ModalContextProvider>
    )
}
Roster.layout = (page) => (
    < DashboardLayout >
        {page}
    </DashboardLayout >
);
export default Roster









