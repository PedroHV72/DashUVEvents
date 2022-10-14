import { Container } from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import UsersTable from "../../components/UsersTable";
import EventCard from "../../components/EventCard";
import FeatureCard from "../../components/FeatureCard";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <div className="content">
        <h1 className="title">Início</h1>
        <FeatureCard />
        <EventCard />
        <UsersTable />
      </div>
    </Container>
  )
}

export default Dashboard;