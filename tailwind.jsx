import "./App.css";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

function App() {
  const [open, setOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages" },
    { title: "Media" },
    {
      title: "projects",
      submenu: true,
      submenuItems: [
        { title: "submenu 1" },
        { title: "submenu 2" },
        { title: "submenu 3" },
      ],
    },

    { title: "Analytix" },
    { title: "Something" },
    { title: "Chaos Machine" },
    { title: "Payments" },
    { title: "Contact Dev" },
    { title: "Log out" },
    { title: "Lookup" },
    { title: "Sale Call" },
    { title: "Delete data" },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-black h-screen p-5 pt-8 ${
          open ? "w-72" : "w-28"
        } duration-300  relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 shadow-lg border-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <div className="inline-flex">
          <AiFillEnvironment className="bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2" />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Super 4
          </h1>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
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

              {menu.submenu && menuOpen && open && (
                <ul>
                  {menu.submenuItems.map((subMenuItem, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-sm flex items-centre gap-x-4 cursor-pointer p-2 px-3 hover:bg-gray-700 rounded-md"
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
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

export default App;