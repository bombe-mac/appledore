import { Blog } from "../icons/Blog"
import {  Links } from "../icons/Links"
import { Page } from "../icons/Page"
import Shercap from "../icons/Shercap"
import { X } from "../icons/X"
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebarItem"

const Sidebar = () => {
  return (
    <div className="fixed">
      <div className="flex items-center gap-4 pt-2 pl-2">
        <div className=""><Shercap/></div>
        <span className="font-sans font-semibold">Appledore</span>
      </div>
      <SidebarItem icon={<X/>} text="X/Tweet"/>
      <SidebarItem icon={<Youtube/>} text="YouTube/Video"/>
      <SidebarItem icon={<Page/>} text="Document"/>
      <SidebarItem icon={<Blog/>} text="Blog"/>
      <SidebarItem icon={<Links/>} text="Link"/>
    </div>
  )
}

export default Sidebar