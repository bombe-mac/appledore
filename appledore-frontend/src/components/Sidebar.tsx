import { useNavigate } from "react-router-dom"
import { Blog } from "../icons/Blog"
import { Links } from "../icons/Links"
import Logout from "../icons/Logout"
import { Page } from "../icons/Page"
import Shercap from "../icons/Shercap"
import { X } from "../icons/X"
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebarItem"

const Sidebar = () => {
  const navigate=useNavigate();
  const logoutHandler=()=>{
    localStorage.removeItem("token");
    navigate('/')
  }
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-gray-100">
        <div className="flex-shrink-0">
          <Shercap />
        </div>
        <span className="font-semibold text-lg text-gray-800">Appledore</span>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 py-4">
        <p className="px-5 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Content Types</p>
        <SidebarItem icon={<X />} text="X/Tweet" />
        <SidebarItem icon={<Youtube />} text="YouTube" />
        <SidebarItem icon={<Page />} text="Document" />
        <SidebarItem icon={<Blog />} text="Blog" />
        <SidebarItem icon={<Links />} text="Links" />
      </nav>

      {/* Footer Section */}
      <SidebarItem icon={<Logout/>} text="Logout" onClick={logoutHandler}/>
      <div className="px-5 py-4 border-t border-gray-100">
        <p className="text-xs text-gray-400">© 2026 Appledore</p>
      </div>
    </div>
  )
}

export default Sidebar