import {
  faNoteSticky,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
export const sideLinks = [
  { id: 1, label: "Today", link: "/today", icon: faList },
  {
    id: 2,
    label: "Sticky Notes",
    link: "/stickywall",
    icon: faNoteSticky,
  },
  {
    id: 3,
    label: "Calendar",
    link: "/calendar",
    icon: faCalendar,
  },
];

export const days = [
  "Sunday",

  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
