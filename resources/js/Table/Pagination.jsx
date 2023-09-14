import { useEffect, useState } from "react";

const Pagination = ({ onChangeFunction, maxPage = 5, perPage }) => {
    const max = maxPage;
    const [page, setPage] = useState(1);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [previousDisabled, setPreviousDisabled] = useState(false);

    const increasePage = () => {
        if (page < max) {
            console.log(page + 1)
            setPage(page + 1);
            onChangeFunction(page + 1, perPage);

        }
    };

    const decreasePage = () => {
        if (page > 1) {
            console.log(page - 1)
            onChangeFunction(page - 1, perPage)
            setPage(page - 1);
        }
    };

    useEffect(() => {
        if (page === max) {
            setNextDisabled(true);
        } else {
            setNextDisabled(false);
        }
    }, [page, max]);

    useEffect(() => {
        if (page === 1) {
            setPreviousDisabled(true);
        } else {
            setPreviousDisabled(false);
        }
    }, [page]);
    useEffect(() => {
        console.log("maxPage is :", max)
        console.log("perPage is :", perPage)
        onChangeFunction(1, perPage)
        setPage(1)
        // onChangeFunction()
    }, [perPage])


    return (
        <div className="flex p-2">
            <div
                className={`text-white p-2 rounded cursor-pointer ${previousDisabled ? "bg-teal-200" : "bg-teal-500"
                    }`}
                onClick={decreasePage}
            >
                <span>Previous</span>
            </div>
            <div className="bg-green-50 p-2">
                <span>{page}</span>
            </div>
            <div
                className={`text-white p-2 rounded cursor-pointer ${nextDisabled ? "bg-teal-200" : "bg-teal-500"
                    }`}
                onClick={increasePage}
            >
                <span>Next</span>
            </div>
        </div>
    );
};

export default Pagination;
