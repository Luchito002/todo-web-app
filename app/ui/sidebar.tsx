"use client"

import { TiThMenuOutline } from "react-icons/ti";
import { CiSun } from "react-icons/ci";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { CiBoxList } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import SidebarItem from "./sidebar-item";
import { useState } from "react";

const menuItems = [
  { icon: <CiSun size={24} color="yellow" />, label: "Today" },
  { icon: <HiOutlineCalendarDays size={25} color="cyan" />, label: "Tomorrow" },
  { icon: <CiBoxList size={25} color="violet" />, label: "Tasks Lists" },
  { icon: <FaCheckCircle size={25} color="green" />, label: "Completed" },
];

export default function Sidebar() {
  const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false)
  return (
    <>
      <button
        type="button"
        className={`w-auto items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden`}
        onClick={() => {setMenuIsVisible(true)}}
      >
        <span className="sr-only">Open sidebar</span>
        <TiThMenuOutline size={32} />
      </button>

      <aside className="hidden sm:flex top-0 left-0 h-screen z-40 flex-col justify-center items-center transition-transform -translate-x-full sm:translate-x-0 ml-16">
        <ul className='bg-box border border-border w-64 px-2 py-4 rounded grid gap-2'>
          {menuItems.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} label={item.label} />
          ))}
        </ul>
      </aside>

      {menuIsVisible &&
        <span
          className="fixed bg-black bg-opacity-50 w-full h-full"
          onClick={() => { setMenuIsVisible(false) }}
        />
      }

      <div className={`${menuIsVisible ? "translate-x-0" : "-translate-x-full"} w-3/5  h-full bg-box  transition-transform fixed sm:hidden`}>
        <ul className='bg-box px-2 py-4 rounded grid gap-2'>
          {menuItems.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} label={item.label} />
          ))}
        </ul>
      </div>
    </>
  )
}
