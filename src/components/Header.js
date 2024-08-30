import Nav from "./Nav";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      {(location.pathname === "/listings" || location.pathname === "/home" || location.pathname.startsWith("/profile"))  && (
        <header
          className="sticky top-0 z-[20] mx-auto flex w-full items-center py-8 px-2 flex-wrap"
          style={{ backgroundColor: "white" }}
        >
          <Nav />
        </header>
      )}
    </>
  );
};

export default Header;
