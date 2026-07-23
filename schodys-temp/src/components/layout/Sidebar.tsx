import {
  LayoutDashboard,
  BarChart3,
  Video,
  Brain,
  CalendarDays,
  Trophy,
  Settings,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Analytics", icon: BarChart3 },
  { name: "Videos", icon: Video },
  { name: "AI Studio", icon: Brain },
  { name: "Planner", icon: CalendarDays },
  { name: "Goals", icon: Trophy },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h2 className="text-2xl font-bold text-white mb-10">
        🎮 Schody&apos;s Arcade
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}