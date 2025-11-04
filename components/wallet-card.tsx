"use client"

import { Plus, Copy, Eye } from "lucide-react"
import { Line, Bar, XAxis, YAxis, ResponsiveContainer, ComposedChart } from "recharts"

const chartData = [
  { time: "8:00 AM", value: 35000, bar: 2000 },
  { time: "9:00 AM", value: 36000, bar: 2500 },
  { time: "10:00 AM", value: 37000, bar: 2200 },
  { time: "11:00 AM", value: 38500, bar: 2800 },
  { time: "12:00 PM", value: 39200, bar: 2300 },
  { time: "1:00 PM", value: 38800, bar: 2600 },
  { time: "2:00 PM", value: 41812, bar: 2900 },
]

export function WalletCard() {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-white text-lg font-thin mb-2">Wallet Value</p>
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-semibold text-white">$41,812.14</h2>
            <span className="text-orange-400 text-sm font-semibold">◐ 4.6%</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition">
            <Plus className="h-5 w-5 text-white" />
          </button>
          <button className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition">
            <Copy className="h-5 w-5 text-white" />
          </button>
          <button className="p-2 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition">
            <Eye className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Time selectors */}
      <div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-4">
        {["1h", "8h", "1d", "1w", "1m", "6m", "1y"].map((period) => (
          <button
            key={period}
            className={`px-3 py-1.5 rounded text-xs font-medium transition ${
              period === "6m"
                ? "bg-neutral-800 text-orange-400 border border-orange-400/30"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-64 -mx-6 px-6">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ left: -30, top: 10 }}>
            <XAxis dataKey="time" stroke="transparent" />
            <YAxis stroke="transparent" />
            <Bar dataKey="bar" fill="#1a1a1a" radius={[2, 2, 0, 0]} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#eab308"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-yellow-400 font-semibold">+$1,859.48</span>
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>8:00 AM</span>
          <span>→</span>
          <span>2:00 PM</span>
        </div>
      </div>
    </div>
  )
}