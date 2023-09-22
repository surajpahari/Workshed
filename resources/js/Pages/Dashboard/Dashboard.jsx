
import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin
import DashboardLayout from "../Layout/DashboardLayout";
import axios from "axios";

const Dashboard = () => {
    const calendarUrl = "http://localhost:8000/dashboard/getCalendarData/"
    const fetchUrl = async () => {
        let resposne = await axios.get(calendarUrl);
        console.log(resposne)
    }
    useEffect(() => {
        fetchUrl()
    }, []);

    return (
        <div className="flex justify-center items-center">
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
        </div>
    );
};

Dashboard.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Dashboard;

