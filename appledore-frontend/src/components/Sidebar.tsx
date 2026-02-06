import { useNavigate } from "react-router-dom"
import { Blog } from "../icons/Blog"
import { Links } from "../icons/Links"
import Logout from "../icons/Logout"
import { Page } from "../icons/Page"
import Shercap from "../icons/Shercap"
import { X } from "../icons/X"
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebarItem"
import { All } from "../icons/All"
import useCardsStore, { type CardFilterType } from "../stores/useCardStore"

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const sidebarItems: { icon: React.ReactNode; label: string; type: CardFilterType }[] = [
  { icon: <All />, label: "All", type: "all" },
  { icon: <X />, label: "X/Tweet", type: "X" },
  { icon: <Youtube />, label: "YouTube", type: "videos" },
  { icon: <Page />, label: "Document", type: "document" },
  { icon: <Blog />, label: "Blog", type: "blog" },
  { icon: <Links />, label: "Links", type: "link" },
]

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const selectedType = useCardsStore((s) => s.selectedType)
  const setSelectedType = useCardsStore((s) => s.setSelectedType)

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
    onClose();
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 flex flex-col transform transition-transform duration-200 shadow-lg md:shadow-none md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-100 dark:border-slate-800">
        <div className="flex-shrink-0 dark:invert">
          <Shercap />
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold text-lg text-gray-800 dark:text-slate-100">Appledore</span>
          <button
            className="md:hidden text-gray-500 dark:text-slate-300 hover:text-gray-800 dark:hover:text-white"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        <p className="px-5 text-xs font-semibold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-3">Content Types</p>
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.type}
            icon={item.icon}
            text={item.label}
            isActive={selectedType === item.type}
            onClick={() => setSelectedType(item.type)}
          />
        ))}
      </nav>

      <SidebarItem icon={<Logout />} text="Logout" onClick={logoutHandler} />
      <div className="px-5 py-4 border-t border-gray-100 dark:border-slate-800">
        <p className="text-xs text-gray-400 dark:text-slate-500">© 2026 Appledore</p>
      </div>
    </div>
  );
};

export default Sidebar