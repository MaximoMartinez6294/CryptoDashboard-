import { LineChart, Line, ResponsiveContainer } from "recharts"

const riskData = [
  { x: 0, y: 20 },
  { x: 1, y: 25 },
  { x: 2, y: 30 },
  { x: 3, y: 28 },
  { x: 4, y: 35 },
]

const receiveTxns = [
  { id: 1, type: "Receive", coin: "BTC", time: "08:21 AM", icon: "🟠" },
  { id: 2, type: "Send", coin: "SOL", time: "06.12.2024", icon: "🟣" },
  { id: 3, type: "Reward", coin: "ETH", time: "05.19 AM", icon: "⚪" },
]

const sendTxns = [
  { id: 1, type: "Receive", coin: "MATIC", time: "05.12.2024", icon: "🟣", highlight: true },
  { id: 2, type: "Send", coin: "USDT", time: "04.12.2024", icon: "🟢" },
]

export function PortfolioCard() {
  return (
    <div className="space-y-4">
      {/* Risk Score */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="text-neutral-400 text-sm">Risk Score</p>
          </div>
          <span className="text-xs text-neutral-500">Updated: Just Now</span>
        </div>

        {/* Risk bar */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-neutral-400">Low Risk</span>
            <span className="text-xs text-neutral-400 ml-auto">High Risk</span>
          </div>
          <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-300 to-yellow-400 w-3/4 rounded-full"></div>
          </div>
        </div>

        {/* Mini chart */}
        <ResponsiveContainer width="100%" height={60}>
          <LineChart data={riskData} margin={{ top: 5, right: 5, bottom: 5, left: -25 }}>
            <Line type="monotone" dataKey="y" stroke="#8b5cf6" strokeWidth={1} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Transactions */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">Transactions</h3>
          <a href="#" className="text-yellow-400 text-sm hover:text-yellow-300">
            View All
          </a>
        </div>

        <div className="space-y-3">
          {receiveTxns.map((txn) => (
            <div key={txn.id} className="flex items-center gap-3">
              <div className="text-xl">{txn.icon}</div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">{txn.type}</p>
                <p className="text-neutral-500 text-xs">{txn.time}</p>
              </div>
              <p className="text-neutral-300 text-sm">{txn.coin}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
