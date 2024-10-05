import { Link, useLocation, useNavigate } from "react-router-dom";
import { getTabsList } from "../constants/tabIcons";
import { useAuth } from "../contexts/authContext";

const Tabs = () => {
  const { currentUser, userLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const profileTo = () => {
    if (userLoggedIn) {
      return `/profile/${currentUser.data.brokerId}`;
    } else {
      return "/login";
    }
  };

  const shareProfile = () => {
    if(userLoggedIn) {
      if (navigator.share) {
        navigator
          .share({
            title: `${currentUser.data.name}'s Profile`,
            text: `Check out ${currentUser.data.name}'s profile on Urbantap!`,
            url: window.location.href,
          })
          .then(() => {
            console.log("Successfully shared");
          })
          .catch((error) => {
            console.error("Error sharing:", error);
          });
      } else {
        const shareUrl = `whatsapp://send?text=Check out ${
          currentUser.data.name
        }'s profile: ${encodeURIComponent(window.location.href)}`;
        window.open(shareUrl, "_blank");
      }
    } else {
      navigate("/login")
    }
  };

  return (
    <footer className="h-[60px] fixed bottom-0 left-0 w-full border-t border-gray-light z-50 bg-white">
      <ul className="flex justify-center items-center list-none py-2 m-0 w-full">
        {getTabsList(profileTo(), currentUser?.data.profile_pic).map((item) => {
          const { label, icon: Icon, to } = item;
          const isActive = location.pathname.includes(to);
          return (
            <li
              key={label}
              className="flex flex-col items-center justify-center gap-[1px] w-[55px] h-[38px] m-auto z-[1]"
            >
              {label !== "share" ? (
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
              ) : (
                <div onClick={shareProfile}>
                  <Icon color={isActive ? "#13ce66" : undefined} />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Tabs;
