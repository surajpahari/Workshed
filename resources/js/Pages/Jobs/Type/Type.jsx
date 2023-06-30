import DashboardLayout from "../../Layout/DashboardLayout";
import AddType from "./AddType";
import ListType from "./ListType";
import SearchType from "./SearchType";
const Type = () => {
    return (
        <div>
            <h1>
                Add Type
            </h1>
            <AddType />
            <h1>
                Searh Type
            </h1>
            <SearchType />
            <h1>Type List</h1>
            <ListType />
        </div>

    )
}

Type.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);
export default Type
