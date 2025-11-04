"use client"

export default function PortfolioCard() {
  const transactions = [
    {
      id: 1,
      type: "Receive",
      coin: "BTC",
      amount: "+0.002345",
      time: "08:21 AM",
      status: "Pending",
      icon: "🟠",
      chart: [20, 25, 30, 28, 35, 32, 28],
    },
    {
      id: 2,
      type: "Send",
      coin: "SOL",
      amount: "-23.42",
      time: "05.12.2024",
      status: "Pending",
      icon: "🟣",
      chart: [35, 32, 28, 30, 25, 28, 32],
    },
    {
      id: 3,
      type: "Reward",
      coin: "ETH",
      amount: "+3.21",
      time: "05.19 AM",
      status: "Confirmed",
      icon: "⚪",
      chart: [25, 22, 20, 22, 25, 28, 30],
    },
    {
      id: 4,
      type: "Receive",
      coin: "MATIC",
      amount: "+590.41",
      time: "05.12.2024",
      status: "Confirmed",
      icon: "🟣",
      chart: [15, 18, 22, 25, 28, 32, 35],
      highlight: true,
    },
    {
      id: 5,
      type: "Receive",
      coin: "MATIC",
      amount: "+14.08",
      time: "05.12.2024",
      status: "Confirmed",
      icon: "🟣",
    },
    {
      id: 6,
      type: "Send",
      coin: "USDT",
      amount: "-19.57",
      time: "04.12.2024",
      status: "Failed",
      icon: "🟢",
    },
  ]

  return (
    <div className="min-h-screen bg-black p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">Transactions</h1>
          <a href="#" className="text-lime-400 hover:text-lime-300 text-sm md:text-base">
            View All
          </a>
        </div>

        {/* Transactions Grid - Mobile vertical, tablet 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {transactions.map((txn) => (
            <div
              key={txn.id}
              className={`rounded-3xl p-6 border transition-all ${
                txn.highlight
                  ? "bg-lime-400 border-lime-400 text-black"
                  : "bg-neutral-900 border-neutral-800 text-white hover:border-neutral-700"
              }`}
            >
              {/* Icon and Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3 flex-1">
                  <div className="text-3xl">{txn.icon}</div>
                  <div>
                    <p className={`font-medium ${txn.highlight ? "text-black" : "text-white"}`}>{txn.type}</p>
                    <p className={`text-xs ${txn.highlight ? "text-black/60" : "text-neutral-400"}`}>{txn.time}</p>
                  </div>
                </div>
              </div>

              {/* Coin and Amount */}
              <div className="mb-4">
                <p className={`text-xs font-semibold opacity-75 ${txn.highlight ? "text-black" : "text-neutral-400"}`}>
                  {txn.coin}
                </p>
                <p
                  className={`text-2xl font-bold ${
                    txn.amount.startsWith("+")
                      ? txn.highlight
                        ? "text-black"
                        : "text-green-400"
                      : txn.highlight
                        ? "text-black"
                        : "text-red-400"
                  }`}
                >
                  {txn.amount}
                </p>
              </div>

              {/* Chart if available */}
              {txn.chart && (
                <div className="mb-4 h-12 bg-black/20 rounded-lg p-2 flex items-end gap-0.5">
                  {txn.chart.map((value, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-white/30 rounded-sm"
                      style={{ height: `${(value / 40) * 100}%` }}
                    />
                  ))}
                </div>
              )}

              {/* Status */}
              <div
                className={`flex items-center gap-2 text-xs font-medium ${
                  txn.status === "Confirmed"
                    ? txn.highlight
                      ? "text-black"
                      : "text-green-400"
                    : txn.status === "Failed"
                      ? "text-red-500"
                      : txn.highlight
                        ? "text-black"
                        : "text-neutral-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    txn.status === "Confirmed"
                      ? txn.highlight
                        ? "bg-black"
                        : "bg-green-400"
                      : txn.status === "Failed"
                        ? "bg-red-500"
                        : txn.highlight
                          ? "bg-black"
                          : "bg-neutral-400"
                  }`}
                />
                {txn.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
