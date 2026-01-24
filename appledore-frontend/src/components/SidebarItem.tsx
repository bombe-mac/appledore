import type { ReactElement, MouseEventHandler } from "react"

interface SidebarItemProps {
    text: string;
    icon: ReactElement;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

export const SidebarItem = ({ text, icon, onClick }: SidebarItemProps) => {
  return (
    <div
      className="flex items-center gap-3 px-5 py-2.5 mx-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer transition-colors duration-150 group"
      onClick={onClick}
      role="button"
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          onClick(e as any);
        }
      }}
    >
      <div className="text-gray-500 group-hover:text-gray-700 transition-colors">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
        {text}
      </span>
    </div>
  )
}