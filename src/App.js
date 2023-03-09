import "./App.css";
import { useState } from "react";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  const [open, setOpen] = useStatne(true);
  const [menuOpen, setMenuOpen] = useState(false);
  // const [start, setStart] = useState(true)
  // const [start, setStart] = useState(true)


  const Menus = [
    { title: "Dashboard", link: "/" },
    { title: "View All Series", link: "https://www.google.com/" },
    { title: "View All Team" },
    { title: "View All Player" },
    
    {
      title: "Match Manager",
      submenu: true,
      submenuItems: [
        { title: "Upcoming All Matches" },
        { title: "View All Matches" },
        { title: "Update Playing 11" },
      ],
    },
    {
      title: "Contest Manager",
      submenu: true,
      submenuItems: [
        { title: "Create Quiz Contest" },
        { title: "View Quiz Contests" },
        { title: "View All Contests" },
      ],
    },
    {
      title: "Quiz Manager",
      submenu: true,
      submenuItems: [
        { title: "Contest Categories" },
        { title: "Global Contests" },
        { title: "Match Wise Contests" },
      ],
    },
    {
      title: "User Manager",
      submenu: true,
      submenuItems: [
        { title: "All User" },
        { title: "User Feedback" },
      ],
    },
  ];

  return (
    <BrowserRouter>
    <Routes><div className="flex">

{/* Container - Sidebar */}
<div
  className={` bg-super4 h-full p-5 pt-8 ${
    open ? "w-72" : "w-28"
  } duration-300  relative`}
>
  {/* <BsArrowLeftShort
    className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 shadow-lg border-black cursor-pointer ${
      !open && "rotate-180"
    }`}
    onClick={() => {
      setOpen(!open);
    }}
  /> */}
  <div className="inline-flex">
    {/* <img src="../images/logo.png" /> */}
    <h1
      className={`text-[#FFA500] origin-left font-medium text-3xl duration-300 ${
        !open && "scale-0"
      }`}
    >
      Super 4
    </h1>
  </div>

  <ul className="pt-2">
    {Menus.map((menu, index) => (
      <>
        <Link to={menu.link}>
        <li
          key={index}
          className={`text-gray-50 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md ${
            menu.spacing ? "mt-9" : "mt-2"
          }   mt-2`}
        >
          <RiDashboardFill className="text-2xl" />
          <span
            className={`text-base font-medium flex-1 duration-200 ${
              !open && "hidden"
            }`}
          >
            {menu.title}
          </span>
          {menu.submenu && (
            <BsChevronDown
              className=""
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          )}
        </li>
        </Link>

  
        {menu.submenu && menuOpen && open && (
          <ul>
            {menu.submenuItems.map((subMenuItem, index) => (
              <li
                key={index}
                className="text-gray-300 text-sm flex items-centre gap-x-4 cursor-pointer p-2 px-3 duration-200 hover:bg-gray-700 rounded-md"
              >
                {subMenuItem.title}
              </li>
            ))}
          </ul>
        )}
      </>
    ))}
  </ul>
</div>


{/* Container - Main */}

<div className="">
  


  
</div>
</div>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
