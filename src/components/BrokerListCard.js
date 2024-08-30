import ReraCertified from "./ReraCertified";

const BrokerListCard = () => {
  return (
    <div className="flex flex-col items-center gap-[14px] w-full h-[78px]">
      {/* Divider */}
      <div className="w-full h-0 border border-[#EAEAEA]" />

      <div className="flex flex-row items-start gap-[17px] w-full h-[50px]">
        <div className="flex flex-row items-center gap-[8px] w-full h-[50px]">
          <div className="relative w-[54px] h-[50px]">
            {/* Profile Picture */}
            <div
              className="absolute w-[50px] h-[50px] bg-cover rounded-full bg-purple"
              style={{ backgroundImage: "url('image.png')" }}
            />

            {/* Company Logo */}
            <div className="absolute w-[16px] h-[16px] left-[38px] top-[34px] border border-black rounded-full bg-black bg-opacity-30" />
          </div>

          {/* Username & Info */}
          <div className="flex flex-col justify-center items-start gap-[2px] w-[194px] h-[46px]">
            {/* Username & Button */}
            <div className="flex flex-row items-center gap-[8px] w-[96px] h-[17px]">
              <p className="text-sm font-medium leading-[17px] text-[#1A1B23]">
                Username
              </p>
            </div>

            <div className="flex flex-row items-center gap-[8px] w-[194px] h-[15px]">
              <p className="text-xs font-normal leading-[15px] text-[#919191]">
                Additional Info
              </p>
            </div>
          </div>
        </div>

        {/* Rera */}
        <ReraCertified />
      </div>
    </div>
  );
};

export default BrokerListCard;
