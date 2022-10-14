import { Container } from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import UsersTable from "../../components/UsersTable";
import EventItem from "../../components/EventItem";
import FeatureCard from "../../components/FeatureCard";
import YearsChart from "../../components/Charts/EventsPerMonthsOfTheYear";
import FullHoursChart from "../../components/Charts/FullHoursSend";
import Navbar from "../../components/Navbar";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <div className="content">
        <div className="bg-background-gray p-6 rounded-l-[25px] h-full w-full">
          <Navbar />
          <div className="flex gap-x-6 py-8">
            <div className="flex w-3/5 flex-col gap-y-8">
              <EventItem />
              <UsersTable />
            </div>
            <div>
              <YearsChart />
              <FullHoursChart />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Container>
  );
}

export default Dashboard;
