import React from "react";
import { Container } from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import EventCard from "../../components/EventCard";
import EventiItem from "../../components/EventItem";

function Events() {
  return (
    <Container>
      <Sidebar />
      <div className="content">
        <h1 className="title">Eventos</h1>
        <EventCard />
      </div>
    </Container>
  );
}

export default Events;