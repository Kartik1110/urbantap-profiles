import React, { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import BrokerListCard from "../components/BrokerListCard";
import brokersData from "../constants/mock/brokers.json";

const BrokersPage = () => {
  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    setBrokers(brokersData);
  }, []);

  return (
    <div className="mb-14">
      <div className="top-0 sticky bg-white z-50 px-7 h-[62px] py-[18px] flex items-center justify-between">
        <h1 className="w-full h-[26px] left-[24px] top-[62px] font-inter font-bold text-[20px] leading-[130%] tracking-[-0.01em] text-black">
          Brokers
        </h1>
        <div className="flex items-center justify-between">
          <Filter className="mr-6" />
          <Search />
        </div>
      </div>
      <div className="w-full h-0 border border-[#EAEAEA] mb-[14px]" />

      <div className="w-full px-7 flex flex-col justify-center items-center">
        {brokers.length > 0 ? brokers.map((broker) => (
          <BrokerListCard key={broker.id} broker={broker} />
        )) : <p>No brokers found</p>}
      </div>
    </div>
  );
};

export default BrokersPage;
