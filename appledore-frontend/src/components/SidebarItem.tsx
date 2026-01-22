import type { ReactElement } from "react"


export const SidebarItem = ({text, icon}: {
    text: string; 
    icon: ReactElement;}) => {
  return (
    <div className="flex items-center pl-10  pt-6">
        {icon}
        <span className="pl-8 font-semibold font-sans">{text}</span>
    </div>
  )
}
