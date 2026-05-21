import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center text-4xl font-bold">
      {/* CI/CD Dashboard */}
      <Dashboard />
    </div>
  );
}

export default App;
