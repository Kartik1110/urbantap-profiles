import BrokerImg from "../assets/brokers-list.png";
import { Search, Filter } from "lucide-react";

const Brokers = () => {
  return (
    <div className="mb-20">
      <div className="flex items-center justify-between">
        <h1 className=" px-6 py-4 text-3xl font-inter font-bold text-dark-blue">Brokers</h1>
        <div className="flex items-center justify-between">
          <Filter className="mr-6"  />
          <Search className="mr-6" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        {[Array.from({ length: 10 }).map((_, index) => <img src={BrokerImg} alt="brokers-list" />)]}
      </div>
    </div>
  );
};

export default Brokers;
