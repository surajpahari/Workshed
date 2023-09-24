
import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin
import DashboardLayout from "../Layout/DashboardLayout";
import axios from "axios";

const Dashboard = () => {
    const calendarUrl = "http://localhost:8000/dashboard/getCalendarData/"
    const fetchUrl = async () => {
        let resposne = await axios.get(calendarUrl);
    }
    const { data, setData, post } = useForm({
        message: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post('/send-message', {
            onSucess: () => console.log("hello")
        })
    }
    useEffect(() => {
        fetchUrl()
    }, []);
    return (
        <div className="flex">
            <div className="flex-grow max-h-fit">
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
                />
            </div>
            <div className="m-4 flex-col">
                <div className="bg-teal-500 text-white text-xl px-20">
                    Notice Board
                </div>
                <div className="flex-grow">

                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="m-2">
                            <input type="text" name="message" value={data.message} onChange={(e) => (setData('message', e.target.value))} />
                        </div>
                        <div className="flex justify-end items-end">
                            <div>
                                <button type="submit" className="bg-teal-500 text-white text-xl border-none">send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Dashboard.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Dashboard;

