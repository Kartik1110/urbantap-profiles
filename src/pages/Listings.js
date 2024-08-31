import React, { useState, useEffect } from "react";
import Listing from "../components/Listing";
import listingsData from "../constants/mock/listings.json";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(listingsData);
  }, []);

  return (
    <div className="mb-14">
      <div className="w-full flex flex-col justify-center items-center">
        {listings.map((listing) => (
          <React.Fragment key={listing.id}>
            <div className="h-[0.5px] w-full border border-[#EAEAEA]"></div>
            <Listing
              id={listing.id}
              broker={listing.broker}
              selling_price={listing.selling_price}
              sq_ft={listing.sq_ft}
              locality={listing.locality}
              type={listing.type}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Listings;