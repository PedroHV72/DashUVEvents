import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";

function Navigation() {
  return (
    <div className="grid grid-cols-1 h-screen">
      <div className="grid grid-cols-2 z-0">
        <div className="z-10">
          <Sidebar />
        </div>
      <Nav />
      </div>
    </div>
  )
}

export default Navigation;