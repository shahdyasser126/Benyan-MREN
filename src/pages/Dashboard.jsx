import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Footer from "../components/Dashborad/Footer/Footer";
import Navbar from "../components/Dashborad/Navbar/Navbar";
import Sidebar from "../components/Dashborad/Sidebar/Sidebar";

import Status from "./StatusPage";
import Users from "./User";
import Projects from "./Projects";
import Developer from "./Developer";

import TableDashboard from "../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../components/ui/FormDashboard/FormDashboard";

function Dashboard() {

  const [drafts, setDrafts] = useState({
    users: false,
    projects: false,
    developers: false,
  });

  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">

        <Sidebar drafts={drafts} />

        <main className="flex-grow-1">

          <Routes>

            <Route path="/" element={<Status />} />

            {/* USERS */}
            <Route path="/users" element={<Users setDrafts={setDrafts}/>}>
              <Route index element={<TableDashboard name="User" btn="Add New User"/>} />
                <Route path="add" element={<FormDashboard type="users" s    /> } /> 
                </Route>
               
            {/* PROJECTS */}
            <Route path="/projects" element={<Projects setDrafts={setDrafts}  />}>
             <Route index  element={<TableDashboard name="Projects" btn="Add New Project" />   }/> 
              <Route path="add" element={ <FormDashboard type="projects"  />}/>
               </Route> 
            {/* DEVELOPERS */}
            <Route path="/developers" element={<Developer setDrafts={setDrafts} />}>
             <Route index element={<TableDashboard name="Developers"btn="Add New Developer"/>}/>
             <Route path="add" element={<FormDashboard type="developers" />}/>
            </Route>

          </Routes>

        </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;