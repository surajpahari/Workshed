
import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // Import the timeGrid plugin
import DashboardLayout from "../Layout/DashboardLayout";

const Dashboard = () => {
    const [events, setEvents] = useState([
        { title: "bishowkarmaPuja", date: '2023-09-01T12:30:00' }
    ]);

    const addEvent = () => {
        setEvents([...events, {
            title: "New Event", date: '2023-09-02T14:00:00'
        }]);
    };

    useEffect(() => {
        console.log("events are: ", events);
    }, [events]);

    return (
        <div>
            <button onClick={addEvent}>Add Event</button>
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
                events={[
                    {
                        title: 'event1',
                        start: '2023-09-01'
                    },
                    {
                        title: 'event2',
                        start: '2010-01-05',
                        end: '2023-09-07'
                    },
                    {
                        title: 'event3',
                        start: '2010-01-09T12:30:00',
                        allDay: false // will make the time show
                    }
                ]}
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

