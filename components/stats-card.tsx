interface StatsCardProps {
  label: string
  value: string
  change: string
  positive?: boolean
}

export function StatsCard({ label, value, change, positive }: StatsCardProps) {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4">
      <p className="text-neutral-400 text-xs font-medium mb-2">{label}</p>
      <p className="text-white text-lg font-bold mb-2">{value}</p>
      <p className={`text-xs ${positive ? "text-green-400" : "text-red-400"}`}>◐ {change}</p>
    </div>
  )
}
