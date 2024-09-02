import ReraCertified from "./ReraCertified";
import varunProfilePic from "../assets/varun_profile.jpeg";

const BrokerListCard = ({ broker }) => {
  return (
    <div className="flex flex-col items-center gap-[14px] w-full h-[78px]">
      <div className="flex flex-row items-start gap-[17px] w-full h-[50px]">
        <div className="flex flex-row items-center gap-[8px] w-full h-[50px]">
          <div className="relative w-[54px] h-[50px]">
            {/* Profile Picture */}
            <div
              className="absolute w-[50px] h-[50px] bg-cover rounded-full bg-purple"
              style={{ backgroundImage: `url(${varunProfilePic})` }}
            />

            {/* Company Logo */}
            <div
              className="absolute w-[16px] h-[16px] left-[38px] top-[34px] border border-black rounded-full bg-opacity-30"
              style={{ backgroundImage: `url(${broker.company.logo})` }}
            />
          </div>

          {/* Username & Info */}
          <div className="flex flex-col justify-center items-start gap-[2px] w-[194px] h-[46px]">
            {/* Username & Button */}
            <div className="flex flex-row items-center gap-[8px] w-[96px] h-[17px]">
              <p className="text-sm font-medium leading-[17px] text-[#1A1B23]">
                {broker.name}
              </p>
            </div>

            <div className="flex flex-row items-center gap-[8px] w-[194px] h-[15px]">
              <p className="text-xs font-normal leading-[15px] text-[#919191]">
                {broker.company.name}
              </p>
            </div>
          </div>
        </div>

        {/* Rera */}
        {broker.is_certified && <ReraCertified />}
      </div>
      {/* Divider */}
      <div className="w-full h-0 border border-[#EAEAEA]" />
    </div>
  );
};

export default BrokerListCard;
