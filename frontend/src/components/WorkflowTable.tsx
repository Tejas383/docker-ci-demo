const workflows = [
  {
    name: "Build",
    status: "SUCCESS",
    time: "2 mins ago",
  },
  {
    name: "Docker Push",
    status: "SUCCESS",
    time: "1 min ago",
  },
  {
    name: "Frontend Deploy",
    status: "RUNNING",
    time: "Just now",
  },
];

function WorkflowTable() {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800 mt-10">
      <h2 className="text-2xl font-bold mb-6">Workflow History</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-400">
              <th className="pb-4">Workflow</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Time</th>
            </tr>
          </thead>

          <tbody>
            {workflows.map((workflow, index) => (
              <tr key={index} className="border-b border-zinc-800">
                <td className="py-4">{workflow.name}</td>

                <td className="py-4">
                  <span
                    className={
                      workflow.status === "SUCCESS"
                        ? "text-green-400"
                        : workflow.status === "RUNNING"
                          ? "text-yellow-400"
                          : "text-red-400"
                    }
                  >
                    {workflow.status}
                  </span>
                </td>

                <td className="py-4 text-zinc-400">{workflow.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkflowTable;
