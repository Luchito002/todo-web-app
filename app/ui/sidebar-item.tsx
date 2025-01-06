import { JSX } from "react";

export default function SidebarItem({ icon, label }: { icon: JSX.Element, label: string }) {
  return (
    <li className="flex items-center pl-4 py-2 hover:bg-hover rounded gap-2 hover:cursor-pointer focus:ring-gray-200">
      {icon}
      <span>{label}</span>
    </li>
  )
}
