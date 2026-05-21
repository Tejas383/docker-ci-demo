type StatusCardProps = {
  title: string;
  value: string;
  color?: string;
};

function StatusCard({ title, value, color = "text-white" }: StatusCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
      <h2 className="text-zinc-400 text-sm mb-2">{title}</h2>

      <p className={`text-2xl font-semibold ${color}`}>{value}</p>
    </div>
  );
}

export default StatusCard;
