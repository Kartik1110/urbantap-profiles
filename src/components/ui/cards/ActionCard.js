import PropTypes from "prop-types";

const ActionCard = ({ title, description, image, direction, cardStyling, textContainerStyle }) => {
  const cardStyle = {
    backgroundColor: "#D5F6FB",
    borderRadius: "11px",
    display: "flex",
    flexDirection: direction === "row" ? "row" : "column",
    alignItems: "center",
  };

  return (
    <div className={`bg-green card justify-between ${cardStyling}`} style={cardStyle}>
      <img className="h-6" src={image} alt={title} />
      <div className="card-content">
        <h2 className={`card-title ${textContainerStyle} font-inter`}>{title}</h2>
        {description && <p className={`card-description ${textContainerStyle}`}>{description}</p>}
      </div>
    </div>
  );
};

ActionCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ActionCard;
