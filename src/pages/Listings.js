import ListingsImg from "../assets/listings.png";
import ListingsSearchImg from "../assets/listings-search.png";

const Listings = () => {
  return (
    <div className="mb-20">
      <img className="pb-4" src={ListingsSearchImg} alt="brokers-list" />
      <div className="w-full flex flex-col justify-center items-center">
        {[Array.from({ length: 10 }).map((_, index) => <img src={ListingsImg} alt="brokers-list" />)]}
      </div>
    </div>
  );
};

export default Listings;
