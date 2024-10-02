import React, { useState, useEffect } from "react";
import axios from "axios";
import Listing from "../components/Listing";
import { apiEndPoints } from "../constants/apiEndPoints";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(apiEndPoints.listings)
      .then(response => {
        setListings(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching listings:', error);
      });
  }, []);

  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center mt-7">
        {listings.length > 0 ? (
          listings.map((listing) => (
            <React.Fragment key={listing.id}>
              <Listing
                id={listing.id}
                broker={listing.broker_name}
                selling_price={listing.selling_price}
                sq_ft={listing.sq_ft}
                locality={listing.locality}
                type={listing.type}
                onClick={() => {
                  navigate(`/profile/${listing.broker_id}`);
                }}
              />
                <div className="h-1 bg-[#F1F1F1] w-full my-5"></div>
            </React.Fragment>
          ))
        ) : (
          <p>No listings found</p>
        )}
        {/* {listings.length > 0 && (
          <div className="h-1 bg-[#F1F1F1] w-full my-5"></div>
        )} */}
      </div>
    </div>
  );
};

export default Listings;