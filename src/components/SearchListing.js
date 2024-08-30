const SearchListing = () => {
  return (
    <div className="float-right mt-4">
      <div className="flex flex-row items-center p-[10px] gap-[60px] w-full h-[54px] rounded-[30px] border border-[#4DD969]">
        <input
          type="text"
          placeholder="I’m Looking for ..."
          className="w-[50%] h-[40px] text-[#919191] font-normal text-xs font-inter leading-[15px] outline-none bg-transparent border-none"
        />

        <button className="w-[112px] h-[34px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px] text-center font-medium text-sm font-inter leading-[17px] text-black">
          Create a Post
        </button>
      </div>
    </div>
  );
};

export default SearchListing;
