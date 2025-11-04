"use client"

import { Navbar } from "@/components/navbar"
import { WalletCard } from "@/components/wallet-card"
import { PortfolioCard } from "@/components/portfolio-card"
import { TransactionsCard } from "@/components/transactions-card"
import { StatsCard } from "@/components/stats-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <WalletCard />
          </div>
          <div>
            <PortfolioCard />
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <TransactionsCard />
          </div>
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard label="Realized PL" value="+$1,429.00" change="+27% Today" positive />
          <StatsCard label="Unrealized PL" value="-$521.10" change="-11.8% Today" positive={false} />
          <StatsCard label="Projected Growth" value="+$1,864.04" change="+3.2% Today" positive />
          <StatsCard label="Net Change" value="+$495.68" change="-11.8% Today" positive />
        </div>
      </div>
    </div>
  )
}
