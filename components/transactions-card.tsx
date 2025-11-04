const transactions = [
  {
    id: 1,
    coin: "BTC",
    type: "Receive",
    amount: "+0.002345",
    status: "Pending",
    time: "08:21 AM",
    icon: "🟠",
  },
  {
    id: 2,
    coin: "SOL",
    type: "Send",
    amount: "-23.42",
    status: "Pending",
    time: "06.12.2024",
    icon: "🟣",
    chart: true,
  },
  {
    id: 3,
    coin: "ETH",
    type: "Receive",
    amount: "+3.21",
    status: "Confirmed",
    time: "05.19 AM",
    icon: "⚪",
  },
  {
    id: 4,
    coin: "MATIC",
    type: "Receive",
    amount: "+590.41",
    status: "Confirmed",
    time: "05.12.2024",
    icon: "🟣",
    highlight: true,
  },
  {
    id: 5,
    coin: "USDT",
    type: "Send",
    amount: "-19.57",
    status: "Failed",
    time: "04.12.2024",
    icon: "🟢",
  },
]

export function TransactionsCard() {
  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6">
      <h3 className="text-lg font-bold text-white mb-6">Recent Transactions</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className={`rounded-xl p-4 flex flex-col ${
              tx.highlight ? "bg-yellow-400" : "bg-neutral-900 border border-neutral-800"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{tx.icon}</span>
              <div className="flex-1">
                <p className={`text-sm font-medium ${tx.highlight ? "text-black" : "text-white"}`}>{tx.type}</p>
                <p className={`text-xs ${tx.highlight ? "text-black/60" : "text-neutral-500"}`}>{tx.time}</p>
              </div>
            </div>

            {tx.chart && <div className="h-8 mb-2 bg-neutral-800 rounded opacity-40"></div>}

            <p
              className={`text-lg font-bold ${
                tx.highlight ? "text-black" : tx.amount.startsWith("+") ? "text-green-400" : "text-red-400"
              }`}
            >
              {tx.amount}
            </p>
            <p className={`text-xs ${tx.highlight ? "text-black/60" : "text-neutral-400"}`}>{tx.coin}</p>
            <p
              className={`text-xs mt-2 ${
                tx.status === "Confirmed"
                  ? "text-green-400"
                  : tx.status === "Failed"
                    ? "text-red-400"
                    : "text-yellow-400"
              }`}
            >
              ◐ {tx.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
