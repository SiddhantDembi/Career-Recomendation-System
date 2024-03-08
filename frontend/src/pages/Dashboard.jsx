import "../styles/Sidebar.css";
import Sidebar from "./sidebar";

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