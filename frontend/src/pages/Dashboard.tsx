import { useEffect, useState } from "react";
import StatusCard from "../components/StatusCard";
import WorkflowTable from "../components/WorkflowTable";

function Dashboard() {
  const [backendMessage, setBackendMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/hello")
      .then((res) => res.text())
      .then((data) => {
        setBackendMessage(data);
      })
      .catch(() => {
        setBackendMessage("Backend Offline");
      });
  }, []);

  return (
    <div className="bg-zinc-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">CI/CD Monitoring Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatusCard
          title="Build Status"
          value="SUCCESS"
          color="text-green-400"
        />

        <StatusCard title="Docker Image" value="latest" />

        <StatusCard
          title="Backend Status"
          value={backendMessage}
          color="text-blue-400"
        />

        <StatusCard title="Last Deployment" value="Just Now" />
      </div>

      <WorkflowTable />
    </div>
  );
}

export default Dashboard;
