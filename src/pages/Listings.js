import Listing from "../components/Listing";

const Listings = () => {
  return (
    <div className="mb-14">
      <div className="w-full flex flex-col justify-center items-center">
        {[
          Array.from({ length: 10 }).map((_, index) => (
            <>
              <div className="h-[0.5px] w-full border border-[#EAEAEA]"></div>
              <Listing />
            </>
          )),
        ]}
      </div>
    </div>
  );
};

export default Listings;
