import "../styles/Dashboard.css";
import Sidebar from "./Sidebar";

export default function DashboardTemplate() {
  return (
    <>
      
      <Sidebar />
      <Dashboard />
    </>
  );
}

function Dashboard() {
  return (
    <>
    <h1>Career Recomendation</h1>
    </>
    
  );
}