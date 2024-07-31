import { Link, useLocation } from "react-router-dom";

const HouseIcon = ({ color, label = "", labelColor }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "#d3dce6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-house"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
      {label && (
        <div
          className={
            labelColor
              ? `text-[13px] font-inter text-[${labelColor}] font-medium`
              : `text-[13px] font-inter text-[#d3dce6] font-medium`
          }
        >
          {label}
        </div>
      )}
    </div>
  );
};

const BrokersIcon = ({ color, label = "", labelColor }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "#d3dce6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-users"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      {label && (
        <div
          className={
            labelColor
              ? `text-[13px] font-inter text-[${labelColor}] font-medium`
              : `text-[13px] font-inter text-[#d3dce6] font-medium`
          }
        >
          {label}
        </div>
      )}
    </div>
  );
};

const JobsIcon = ({ color, label = "", labelColor }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "#d3dce6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-briefcase"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
      {label && (
        <div
          className={
            labelColor
              ? `text-[13px] font-inter text-[${labelColor}] font-medium`
              : `text-[13px] font-inter text-[#d3dce6] font-medium`
          }
        >
          {label}
        </div>
      )}
    </div>
  );
};

const ListingsIcon = ({ color, label = "", labelColor }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color || "#d3dce6"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-building-2"
      >
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
        <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
        <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
        <path d="M10 18h4" />
      </svg>
      {label && (
        <div
          className={
            labelColor
              ? `text-[13px] font-inter text-[${labelColor}] font-medium`
              : `text-[13px] font-inter text-[#d3dce6] font-medium`
          }
        >
          {label}
        </div>
      )}
    </div>
  );
};

const Tabs = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="h-16 fixed bottom-0 left-0 w-full border-t border-gray-light z-50 bg-white">
      <nav>
        <ul className="flex justify-center items-center list-none p-0 m-0 w-full">
          <li className="px-8">
            <Link to="/profile" className="block py-4 text-gray-800 hover:bg-gray-100">
              <HouseIcon
                color={currentPath.includes("/profile") ? "#13ce66" : null}
                label="Home"
                labelColor={currentPath.includes("/profile") ? "#0A1330" : null}
              />
            </Link>
          </li>
          <li className="px-8">
            <Link to="/brokers" className="block py-4 text-gray-800 hover:bg-gray-100">
              <BrokersIcon
                color={currentPath === "/brokers" ? "#13ce66" : null}
                label="Brokers"
                labelColor={currentPath === "/brokers" ? "#0A1330" : null}
              />
            </Link>
          </li>
          <li className="px-8">
            <Link to="/listings" className="block py-4 text-gray-800 hover:bg-gray-100">
              <ListingsIcon
                color={currentPath === "/listings" ? "#13ce66" : null}
                label="Listings"
                labelColor={currentPath === "/listings" ? "#0A1330" : null}
              />
            </Link>
          </li>
          <li className="px-8">
            <Link to="/jobs" className="flex flex-col justify-center items-center py-4 text-gray-800 hover:bg-gray-100">
              <JobsIcon
                color={currentPath === "/jobs" ? "#13ce66" : null}
                label="Jobs"
                labelColor={currentPath === "/jobs" ? "#0A1330" : null}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Tabs;
