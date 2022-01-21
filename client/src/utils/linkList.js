import { MdEvent } from "react-icons/md";
import { MdEditCalendar } from "react-icons/md";
import { MdAccountTree } from "react-icons/md";
import { MdFitnessCenter } from "react-icons/md";
import { MdCalendarToday } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { MdMemory } from "react-icons/md"; // Для API раздела

export const sidebarList = [
  {
    name: "Создать тренировку",
    to: "/workout/create",
    icon: <MdEditCalendar />,
  },
  {
    name: "Готовые тренировки",
    to: "/workout/readies",
    icon: <MdEvent />,
  },
  {
    name: "Виды тренировок",
    to: "/workout/types",
    icon: <MdAccountTree />,
  },
  {
    name: "Виды упражнений",
    to: "/exercises/types",
    icon: <MdFitnessCenter />,
  },
  {
    name: "Расписание",
    to: "/timetable",
    icon: <MdCalendarToday />,
  },
  {
    name: "Цели",
    to: "goals",
    icon: <MdEmojiEvents />,
  },
  {
    name: "Антропометрия",
    to: "/human",
    icon: <MdArticle  />,
  },
];

// TODO Список ссылок для Navbar
