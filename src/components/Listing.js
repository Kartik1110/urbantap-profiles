import { WhatsAppIcon, MessageIcon, CallIcon, ShareIcon } from "../constants/icons";
import fiveBhk from "../assets/5bhk.svg";
import profilePic from "../assets/varun_profile.jpeg"

const Listing = ({ id, broker, selling_price, sq_ft, locality, type, onClick }) => {
  return (
    <div className="h-[400px] w-full px-7 flex items-center justify-center">
      <div className="flex flex-col items-start p-0 gap-4 w-full h-[383px]">
        {/* Header */}
        <div className="flex flex-row justify-between items-center p-0 gap-[113px] w-full h-[50px]">
          <div className="flex flex-row items-center p-0 gap-3 w-[174px] h-[50px]">
            {/* User Avatar */}
            <div
              onClick={onClick}
              className="w-[50px] h-[50px] bg-cover bg-center bg-purple rounded-full"
              style={{ backgroundImage: `url(${profilePic})` }}
            ></div>
            {/* User Info */}
            <div className="flex flex-col items-start p-0 gap-1 w-[112px] h-[35px]">
              <span className="text-[#1A1B23] font-medium text-sm">
                {broker}
              </span>
              <span className="text-[#919191] font-normal text-xs">
                Is Selling
              </span>
            </div>
          </div>
          {/* Share Section */}
          {/* <div className="flex flex-row items-center p-0 gap-2 relative">
            <div className="w-[40px] h-[18px]">
              <ShareIcon />
            </div>
            <span className="absolute left-[62.5%] right-0 top-0 bottom-0 text-[12px] leading-[18px] font-normal text-[#1D1D20]">
              36
            </span>
          </div> */}
        </div>

        {/* Image */}
        <div
          className="w-full h-[195px] bg-cover bg-center rounded-md"
          style={{ backgroundImage: `url(${fiveBhk})` }}
        ></div>

        {/* Details */}
        <div className="flex flex-col items-start p-0 gap-2 w-full h-[104px]">
          <span className="text-[#0A1330] font-normal text-lg">
            {selling_price} AED
          </span>
          <span className="text-[#919191] font-normal text-xs">
            {type} • {sq_ft} sq ft
          </span>
          <span className="text-[#919191] font-normal text-xs">{locality}</span>
        </div>

        {/* Action Buttons */}
        {/* <div className="grid grid-cols-subgrid col-span-5 w-full h-8">
          <button className="col-start-1 flex items-center justify-center px-3 py-2 gap-2.5 bg-light-blue rounded-[6px]  h-8">
            <div className="relative w-[14px] h-[14px]">
              <div className="absolute left-[8.8%] right-[4.17%] top-[4.17%] bottom-[8.63%]">
                <CallIcon />
              </div>
            </div>
            <span className="text-[14px] font-normal text-black leading-[111%]">
              Call
            </span>
          </button>

          <button className="col-start-3 flex items-center justify-center px-3 py-2 gap-2.5 bg-light-blue rounded-[6px] h-8">
            <div className="relative w-[14px] h-[14px]">
              <div className="absolute left-[8.34%] right-[8.33%] top-[8.33%] bottom-[8.33%]">
                <MessageIcon />
              </div>
            </div>
            <span className="text-[14px] font-normal text-black leading-[111%]">
              Message
            </span>
          </button>

          <button className="col-start-5 flex items-center justify-center px-3 py-2 gap-2.5 bg-light-blue rounded-[6px] h-8">
            <div className="relative w-[14px] h-[14px]">
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <WhatsAppIcon />
              </div>
            </div>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Listing;
