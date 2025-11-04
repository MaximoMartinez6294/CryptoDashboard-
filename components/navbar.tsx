import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="bg-black border-b border-neutral-800 sticky top-0 z-50">
      <div className="px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and menu */}
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold text-white tracking-tight">Cryptera Labs</div>
            <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="#" className="hover:text-white transition">
                Dashboard
              </a>
              <a href="#" className="hover:text-white transition">
                Market
              </a>
              <a href="#" className="hover:text-white transition">
                Trade
              </a>
              <a href="#" className="hover:text-white transition">
                Portfolio
              </a>
              <a href="#" className="hover:text-white transition">
                Assets
              </a>
            </div>
          </div>

          {/* Search and user */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 bg-neutral-900 rounded-lg px-3 py-2">
              <Search className="h-4 w-4 text-neutral-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-32"
              />
            </div>
            <Button size="icon" variant="ghost" className="text-neutral-400">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 bg-neutral-900 rounded-lg px-3 py-1.5 text-xs text-neutral-300">
              <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
              0xA7F3d4B8c6...
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
