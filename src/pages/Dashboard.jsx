import { Route,Routes } from "react-router-dom";
import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from '../components/Dashborad/Sidebar/Sidebar'
import Status from "./StatusPage";
import Users from "./User";
import Projects from "./Projects";
import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard";
import Developer from "./Developer";
function Dashboard() {
  
  return (
    <>
      <Navbar adminName="mohamed" />
      <div className="d-flex">
        <Sidebar/>
        <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Status/>}/>
          
          <Route path="/users" element={<Users/>} >
            <Route index element={<TableDashboard name="User" btn="Add New User"/>}/>
            <Route path="add" element={<FormDashboard/>}/>
          </Route>

          <Route path="/projects"  element={<Projects/>}>
            <Route index element={<TableDashboard name="Projects" btn="Add New Project"/>}/>
            <Route path="add" element={<FormDashboard/>}/>
          </Route>

            <Route path="/developers"  element={<Developer/>}>
            <Route index element={<TableDashboard name="Developers" btn="Add New Developer"/>}/>
            <Route path="add" element={<FormDashboard/>}/>
          </Route>

          </Routes>
          </main>
       
      </div>
    
      <Footer />
    </>
  );
}

export default Dashboard;
