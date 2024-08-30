import { Link, useLocation } from "react-router-dom";
import { TABS_LIST } from "../constants/tabIcons";

const Tabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="h-[60px] fixed bottom-0 left-0 w-full border-t border-gray-light z-50 bg-white">
      <ul className="flex justify-center items-center list-none py-2 m-0 w-full">
        {TABS_LIST.map((item) => {
          const { label, icon: Icon, to } = item;
          const isActive = currentPath === to;
          return (
            <li
              key={label}
              className="flex flex-col items-center justify-center gap-[1px] w-[55px] h-[38px] m-auto z-[1]"
            >
              <Link to={to} className="">
                <div className="flex flex-col items-center gap-[10px] w-[24px] h-[24px] rounded-[10px]">
                  <div className="relative h-[24px]">
                    <div className="absolute inset-[12.5%]" />
                    <Icon color={isActive ? "#13ce66" : undefined} />
                  </div>
                </div>
                <div
                  className={`w-full h-[13px] text-[9px] leading-[140%] text-center font-medium ${
                    isActive ? "text-dark-blue" : "text-gray-light"
                  }`}
                >
                  {label}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Tabs;
