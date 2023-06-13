import { useState, useEffect } from "react";
import React from 'react';
import './Home.css'
import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { v4 as uuid } from "uuid";
import allLocales from '@fullcalendar/core/locales-all'
import timeGridPlugin from '@fullcalendar/timegrid'
import { formatDate } from '@fullcalendar/core'
import { auth, banco } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";

function Home() {
    const [events, setEvents] = useState([]);
    useEffect(() => { }, [setEvents])

    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Entrar com nome do evento");
        if (eventNamePrompt) {
            setEvents([
                ...events,
                {
                    start,
                    end,
                    title: eventNamePrompt,
                    id: uuid(),
                },
            ]);
            const email = auth.currentUser.email
            banco.collection("dbAgenda").doc(email).set(events)
        }
    };

    const navigate = useNavigate();

    const handleLogout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            console.log('error')
        });
    }

    const handleEventClick = (info) => {
        if (confirm(`Tem certeza que deseja deletar o evento '${info.event.title}'?`)) {
            const newEvent = events.filter(item => item.id !== info.event.id)
            setEvents([
                ...newEvent
            ])
        }
    }


    function renderEventContent(eventInfo) {
        return (
            <>
                <b>{eventInfo.timeText}</b>
                <i>{eventInfo.event.title}</i>
            </>
        )
    }

    return (
        <div className="page">
            <div className="side-panel">
                <div className="profile">
                    <div className="profile-photo"></div>
                    <div className="profile-name">Benjamin Costa</div>
                </div>
                <div className="buttons">
                    <button className="report-button">Relatório</button>
                    <button className="event-button">Evento</button>
                </div>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
            <div className="main-section">
                <h1>main section</h1>
                <FullCalendar
                    locales={allLocales}
                    locale={'pt-br'}
                    eventClick={handleEventClick}
                    eventChange={true}
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: false

                    }}
                    displayEventTime={true}
                    eventBackgroundColor={'blue'}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    events={events}
                    select={handleSelect}
                    headerToolbar={{
                        start: "today prev next",
                        end: "dayGridMonth timeGridWeek timeGridDay",
                        center: 'title',
                    }}
                    plugins={[daygridPlugin, interactionPlugin, timeGridPlugin]}
                    views={["dayGridMonth", "dayGridWeek", "dayGridDay"]}
                    initialView={'timeGridWeek'}
                    eventContent={renderEventContent}
                    height={'65vh'}
                />
            </div>
        </div>
    )
}

export default Home;