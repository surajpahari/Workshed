
import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin
import DashboardLayout from "../Layout/DashboardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Dashboard = () => {
    const calendarUrl = "http://localhost:8000/dashboard/getCalendarData/"
    const fetchUrl = async () => {
        let resposne = await axios.get(calendarUrl);
    }
    const { data, setData, post, reset } = useForm({
        message: ""
    });
    const isEmpty = (string) => {
        return string.trim() === '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmpty(data.message)) {
            data.message = data.message.trim();
            post('/send-message', {
                onSuccess: () => {
                    setMessages([...messages, { message: data.message, self: true }])
                    reset()
                }
            })
        }
    }

    const [messages, setMessages] = useState(undefined);
    const getMessages = async () => {
        const response = await axios.get('/get-message');
        setMessages(response.data)
    }
    useEffect(() => {
        console.log(messages)
    }, [messages])
    useEffect(() => {
        fetchUrl()
    }, []);
    useEffect(() => {
        getMessages()
    }, []);
    return (
        <div className="flex m-1">
            <div className="flex-grow max-h-fi mt-4">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    editable={false}
                    firstDay="1"
                    allDaySlot={false}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    selectable={true}
                    selectHelper={true}
                    lazyFetching={true}
                    eventLimit={true}
                    initialView="dayGridMonth"
                    events={"http://localhost:8000/dashboard/getCalendarData/"}
                    eventClick={function(info) {
                        console.log(info.event.title)
                    }}
                    height={"auto"}
                />
            </div>
            <div className="m-4 mb-0 border-solid border border-teal-500 min-w-fit rounded  relative  max-h-[36rem] overflow-y-auto">
                <div className="bg-teal-500">
                    {/*header for the notice*/}
                    <div className="text-white text-2xl mx-32">
                        <FontAwesomeIcon icon={faBullhorn} />
                        &nbsp;&nbsp;Notice Board
                    </div>
                </div>
                {/*content for the header*/}
                <div className="m-2">
                    {/*right side*/}
                    {messages ?
                        messages.map((messageInfo, index) => (
                            messageInfo.self ?
                                <div className="flex-col" key={index}>
                                    <div className="flex">
                                        <span className="italic text-gray-500">
                                            you
                                        </span>
                                    </div>
                                    <div className="mb-2 mr-40 max-w-sm bg-teal-500 text-white text-lg rounded p-1">
                                        <span className="bg-teal-500 rounded p-1 text-white text-lg">
                                            {messageInfo.message}
                                        </span>
                                    </div>
                                </div> :

                                <div className=" flex-col">
                                    <div className="flex justify-end">
                                        <span className="italic text-gray-500">
                                            {messageInfo.username}
                                        </span>
                                    </div>
                                    <div className="flex justify-end">
                                        <div className="mb-2 ml-10 max-w-sm bg-teal-500 text-white  text-lg rounded p-1">
                                            <span >
                                                {messageInfo.message}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        )) : ''
                    }
                    {/*left side*/}

                </div>
                {/*butttom form*/}
                <div className="absolute bottom-0 left-0 text-red w-full rounded mb-1">
                    <form onSubmit={handleSubmit}>
                        <div className="flex m-1">
                            <div className="flex-grow mr-1">
                                <input type="text" name="message"
                                    className="w-full border-none rounded text-xl bg-gray-200 py-1"
                                    value={data.message}
                                    onChange={
                                        (e) => (setData('message', e.target.value))
                                    }
                                />
                            </div>
                            <div className="">
                                <button type="sumbit" className="bg-teal-500 text-white text-xl border-none rounded  py-1 px-3">
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div >
    );
};

Dashboard.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Dashboard;

