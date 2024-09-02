import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/Listing";
import { apiEndPoints } from "../constants/apiEndPoints";
import listingsData from "../constants/mock/listings.json";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // axios.get(apiEndPoints.listings)
    //   .then(response => {
    //     console.log(response.data);
    //     setListings(response.data.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching listings:', error);
    //   });

    setListings(listingsData);
  }, []);

  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center">
        {listings.length > 0 ? listings.map((listing) => (
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
        )) : <p>No listings found</p>}
        {listings.length > 0 && <div className="h-[0.5px] w-full border border-[#EAEAEA]"></div>}
      </div>
    </div>
  );
};

export default Listings;