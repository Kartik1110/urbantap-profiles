import QRButton from "../assets/qr-button.svg";

const handleClick = () => {
  console.log("Button clicked!");
};

const ProfileButton = ({profileImage}) => {
  return (
    <div className="relative">
      <img
        className="h-20 w-20 rounded-full"
        src={profileImage}
        alt=""
        style={{ zIndex: "1" }}
      />
      {/* Company logo */}
      {/* <button className="absolute bottom-0 left-50" onClick={handleClick}>
        <img className="" src={QRButton} alt="" style={{ zIndex: "2" }} />
      </button> */}
    </div>
  );
};

export default ProfileButton;
