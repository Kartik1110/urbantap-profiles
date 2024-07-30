import arrowUpRight from "../../../assets/icons/arrow-up-right.svg";

const PropertyCard = ({ property }) => {
    return (
        <div
            className={`card flex flex-row px-5 py-3.5 mt-3 gap-3`}
            style={{
                backgroundColor: "rgba(243, 245, 248, 1)",
                borderRadius: 15,
            }}
        >
            <img className="card-image" src={property.image} alt={property.title} />
            <div className="card-content">
                <h2 className="card-title text-xl">{property.title}</h2>
                <p className="card-description text-gray">{property.description}</p>
                <h2 className="card-company text-gray">{property.company}</h2>
            </div>
            <div className="card-price" style={{ marginLeft: "auto" }}>
                <img className="card-arrow" src={arrowUpRight} alt="Arrow" />
            </div>
        </div>
    );
};

export default PropertyCard;
