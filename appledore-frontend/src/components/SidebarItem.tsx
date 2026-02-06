import type { ReactElement, MouseEventHandler, ReactNode } from "react"

interface SidebarItemProps {
    text: string;
    icon: ReactNode;
    isActive?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const SidebarItem = ({ text, icon, isActive, onClick }: SidebarItemProps) => {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-2.5 mx-2 rounded-lg transition-colors duration-150 group focus:outline-none hover:cursor-pointer
        ${isActive
          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          : "hover:bg-gray-100 dark:hover:bg-slate-800"
        }`}
      onClick={onClick}
      role="button"
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          onClick(e as any);
        }
      }}
      tabIndex={0}
    >
      <div className={`transition-colors
        ${isActive
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-500 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-white"
        }`}
      >
        {icon}
      </div>
      <span className={`text-sm font-medium transition-colors
        ${isActive
          ? "text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-slate-200 group-hover:text-gray-900 dark:group-hover:text-white"
        }`}
      >
        {text}
      </span>
    </div>
  )
}