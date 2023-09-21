
import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin
import DashboardLayout from "../Layout/DashboardLayout";
import axios from "axios";

const Dashboard = () => {
    const [events, setEvents] = useState([
        { title: "bishowkarmaPuja", date: '2023-09-01T12:30:00' }
    ]);
    const calendarUrl = "http://localhost:8000/dashboard/getCalendarData/"
    const fetchUrl = async () => {
        let resposne = await axios.get(calendarUrl);
        console.log(resposne)
    }
    useEffect(() => {
        fetchUrl()
    }, []);
    useEffect(() => {
        console.log("events are: ", events);
    }, [events]);

    return (
        <div>
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
            />
        </div>
    );
};

Dashboard.layout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Dashboard;

