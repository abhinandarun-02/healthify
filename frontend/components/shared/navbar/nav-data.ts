type NavData = {
  id: number;
  name: string;
  link: string;
};

export const navData: NavData[] = [
  {
    id: 1,
    name: "Home",
    link: "/dashboard ",
  },
  {
    id: 2,
    name: "Doctors",
    link: "/dashboard/doctors",
  },
  {
    id: 3,
    name: "Hospitals",
    link: "/dashboard/hospitals",
  },
  {
    id: 4,
    name: "Chat",
    link: "/dashboard/chat",
  },
];
