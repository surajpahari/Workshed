import { options } from "@fullcalendar/core/preact";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const SearchSelect = ({ title, optionLink, label, fordata, setter, reseter, error }) => {
    const [input, setInput] = useState('');
    const [mainOptions, setMainOptions] = useState(null);
    const [optionSatus, changeOptionStatus] = useState(false);
    const [filteredOptions, setFilteredOptions] = useState(mainOptions);
    const [inputStatus, changeInputStatus] = useState(false);
    const [resetStatus, changeResetStatus] = useState(false);
    const [selected, setSelected] = useState(null);
    const [optionHover, setOptionHover] = useState(false);
    async function fetchOption() {
        try {
            const url = optionLink
            const response = await axios.get(url);
            setMainOptions(response.data);
        } catch (error) {
            // Handle the error here
            console.error("Error fetching employee list:", error);
        }
    }
    useEffect(() => {
        fetchOption()
        console.log("hello")
    }, [])
    useEffect(() => {

    }, [mainOptions])

    useEffect(() => {
        if (input.trim() === '') {
            setFilteredOptions(mainOptions)
        }
        else {
            setFilteredOptions(filterForInput(input))
        }
    }, [input])
    const handleChange = (e) => {
        setInput(e.target.value)
        if (e.target.value == "") {
            e.preventDefault()
        }
        //change the <input type="" name="" value="">
        //filter the option along with the input
        //if pressed enter setSelected the first item of the input
    }
    const handleFocus = () => {
        if (!inputStatus) {
            changeOptionStatus(true)
        }
        else {
            changeOptionStatus(false)
        }

    }

    const handleBlur = (e) => {
        if (!optionHover) {
            changeOptionStatus(false);
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (filteredOptions.length > 0) {
                setInput(filteredOptions[0][label])
                changeOptionStatus(false)
                changeInputStatus(true)
                changeResetStatus(true)
                setSelected(filteredOptions[0].id)
            }
        }
    }
    const handleOptionClick = (option) => {
        setInput(option[label])
        changeOptionStatus(false)
        changeInputStatus(true)
        changeResetStatus(true)
        setSelected(option.id)
    }
    const handleReset = (e) => {
        setInput('');
        changeResetStatus(false)
        changeInputStatus(false)
        reseter(fordata)
    }

    const filterForInput = (prefix) => {
        prefix = prefix.toLowerCase();
        return mainOptions
            ? mainOptions.filter((item) => item[label]?.toLowerCase().startsWith(prefix))
            : [];
    };

    useEffect(() => {
        setter(fordata, selected)

    }, [selected])
    return (
        <>
            <div className="m-1 flex-col">
                <div className="m-1">
                    <label htmlFor="employee" className="font-bold text-lg">{title}</label>
                </div>
                <div className="relative">
                    <div className="relative">
                        <div>
                            <input type="text"
                                required
                                className={`outline-none border-none bg-sky-100 min-w-full text-xl
p-2
                                ${inputStatus ? 'bg-teal-400 text-white rounded' : 'bg-sky-100'}
                                `
                                }
                                placeholder={title}
                                value={input}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                                readOnly={inputStatus}
                            />
                            {resetStatus ?
                                <div className="absolute top-0 right-0 cursor-pointer bg-red-500 text-red-500 h-full w-8 rounded-r" onClick={handleReset}>
                                    <div className="flex justify-center items-center h-full">
                                        <div className="text-white">
                                            <FontAwesomeIcon icon={faClose} />
                                        </div>
                                    </div>
                                </div>
                                : ''
                            }
                        </div>
                    </div>
                    {error ?
                        <div>
                            {error}
                        </div>
                        : ""
                    }
                    {optionSatus ?
                        <div className="absolute  w-full z-10"
                            onMouseOver={() => { setOptionHover(true) }}
                            onMouseOut={() => { setOptionHover(false) }}
                        >
                            <div className="max-h-32 bg-white p-2  border-teal-500 overflow-y-auto">
                                {
                                    filteredOptions ?
                                        filteredOptions.map((option, index) => (
                                            <div
                                                key={index}
                                                onClick={() => handleOptionClick(option)}
                                                className="cursor-pointer"
                                            >
                                                {index === 0 ?
                                                    <div className="option[label] bg-teal-500 text-white p-1 text-lg">
                                                        {option[label]}
                                                    </div>
                                                    :
                                                    <div className="option[label] p-1 text-lg hover:bg-teal-300 hover:text-white">
                                                        {option[label]}
                                                    </div>
                                                }
                                            </div>
                                        ))
                                        : ''
                                }
                            </div>
                        </div>
                        : ''
                    }
                </div>
            </div >
        </>
    )
}

export default SearchSelect
