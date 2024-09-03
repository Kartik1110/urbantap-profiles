import arrowUpRight from "../../../assets/icons/arrow-up-right.svg";

const PropertyCard = ({ property }) => {
    console.log("property", property);
    return (
        <div
            className={`flex flex-row px-5 py-3.5 mt-3 gap-3`}
            style={{
                backgroundColor: "rgba(243, 245, 248, 1)",
                borderRadius: 15,
            }}
        >
            <img className="h-[65px] w-[65px] rounded-md" src={property.image} alt={property.title} />
            <div className="card-content">
                <h2 className="text-[18px]">{property.title}</h2>
                <p className="text-[14px]">{property.description}</p>
                <h2 className="text-[14px]">{property.company}</h2>
            </div>
            <div className="card-price" style={{ marginLeft: "auto" }}>
                <img className="card-arrow" src={arrowUpRight} alt="Arrow" />
            </div>
        </div>
    );
};

export default PropertyCard;
