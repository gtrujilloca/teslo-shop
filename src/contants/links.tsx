import { MenuLink, SidebarLink } from "@/interfaces";
import { IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";

export const menuLInks: MenuLink[] = [
  {
    title: 'Men',
    href: '/category/men'
  },
  {
    title: 'Women',
    href: '/category/women'
  },
  {
    title: 'Kids',
    href: '/category/kids'
  },
  {
    title: 'Unisex',
    href: '/category/unisexs'
  }
]

export const sibebarLinks: SidebarLink[] = [
  {
    title: 'Home',
    href: '/',
    icon: <IoPersonOutline size={20} />
  },
  {
    title: 'Orders',
    href: '/orders',
    icon: <IoTicketOutline size={20} />
  },
  {
    title: 'Login',
    href: '/login',
    icon: <IoLogInOutline size={20} />
  },
  {
    title: 'logout',
    href: '/logout',
    icon: <IoLogOutOutline size={20} />,
    includeSeparator: true
  },
  {
    title: 'products',
    href: '/products',
    icon: <IoShirtOutline size={20} />
  },
  {
    title: 'orders',
    href: '/orders',
    icon: <IoTicketOutline size={20} />
  },
  {
    title: 'users',
    href: '/users',
    icon: <IoPeopleOutline size={20} />
  },
];