import ProfileButton from "../components/ProfileButton";
import ActionCard from "../components/ui/cards/ActionCard";
import shareIcon from "../assets/icons/share.svg";
import reraLogo from "../assets/icons/rera-certified.svg";
import contact from "../assets/icons/contact.svg";
import call from "../assets/icons/call.svg";
import { useState } from "react";
import PropertyCard from "../components/ui/cards/PropertyCard";
import ContactCard from "../components/ui/cards/ContactCard";

const Profile = ({ user, profileImage }) => {
  console.info("Profile", user.image);

  const [isExpanded, setIsExpanded] = useState(false);

  const [showAllProperties, setShowAllProperties] = useState(false);

  const renderLanguages = () => {
    return user.languages.map((language, index) => (
      <div
        key={index}
        className="tag-box px-4 py-2"
        style={{
          backgroundColor: "white",
          borderRadius: "25px",
          fontSize: "0.9rem",
        }}
      >
        {language}
      </div>
    ));
  };

  return (
    <div className="px-7">
      {/* pfp row */}
      <div className="flex flex-row justify-between">
        <ProfileButton profileImage={profileImage} />

        <ActionCard
          title="Share"
          image={shareIcon}
          direction="row"
          cardStyling="flex justify-center 
          align-middle gap-3 px-5 my-2 
          bg-blue-200 rounded-md "
        />
      </div>

      {/* profile details */}
      <div className="flex flex-row mt-2 justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-md text-gray">
            {user.designation} at {user.company}
          </p>
        </div>

        <img className="mr-2" src={reraLogo} alt="Rera Logo"></img>
      </div>

      {/* CTA row */}
      <div className="flex flex-row justify-center gap-3 mt-5 w-full">
        {/* Card 1 */}
        <ActionCard
          title="Save Contact"
          image={contact}
          direction="column"
          cardStyling="py-4 px-5 justify-center gap-3"
          textContainerStyle="max-w-20 break-words text-center"
        />
        {/* Card 2 */}
        <ActionCard
          title="Call Now"
          image={call}
          direction="column"
          cardStyling="py-4 px-10 justify-center gap-3"
          textContainerStyle="max-w-10 break-words text-center"
        />
        {/* Card 3 */}
        <ActionCard
          title="Request a Call Back"
          image={contact}
          direction="column"
          cardStyling="py-4 px-5 justify-center gap-3 "
          textContainerStyle="max-w-20 break-words text-center"
        />
      </div>

      {/* Profile Info */}
      {/* Description */}
      <div className="mt-5">
        <h2 className="text-xl font-medium">Profile Info</h2>
        <div
          className={`card ${isExpanded ? "expanded" : "collapsed"} p-5 mt-3`}
          style={{
            backgroundColor: "rgba(243, 245, 248, 1)",
            borderRadius: 15,
          }}
        >
          {isExpanded ? (
            <div>
              {user.description}
              <br />
              <button className="font-medium font-inter mt-2" onClick={() => setIsExpanded(false)}>
                Read Less
              </button>
            </div>
          ) : (
            <div>
              {`${user.description.substring(0, 86)}...`}
              <br />
              <button className="font-medium font-inter mt-2" onClick={() => setIsExpanded(true)}>
                Read More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Years of Experience */}
      <div className="mt-5">
        <div
          className="card p-5 mt-3"
          style={{
            backgroundColor: "rgba(243, 245, 248, 1)",
            borderRadius: 15,
          }}
        >
          <p className="font-medium font-inter"> Years of Experience</p>
          <h2 className="">{user.experience}</h2>
        </div>
      </div>

      {/* Languages */}
      <div className="mt-5">
        <div
          className="card p-5 mt-3 flex flex-row gap-3"
          style={{
            backgroundColor: "rgba(243, 245, 248, 1)",
            borderRadius: 15,
          }}
        >
          {renderLanguages()}
        </div>
      </div>

      {/* Properties available for sale */}
      <div className="mt-5">
        <h2 className="text-xl font-medium">Properties available for sale</h2>

        {user.properties.slice(0, showAllProperties ? user.properties.length : 2).map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}

        {!showAllProperties && user.properties.length > 2 && (
          <div
            className="flex flex-row justify-center align-middle my-3"
            style={{
              backgroundColor: "#D5F6FB",
              borderRadius: 15,
              padding: "15px 138px",
            }}
          >
            <button className="font-medium font-inter" onClick={() => setShowAllProperties(true)}>
              <h2 className="">View {user.properties.length - 2} More</h2>
            </button>
          </div>
        )}

        {showAllProperties && (
          <div
            className="flex flex-row justify-center align-middle my-3"
            style={{
              backgroundColor: "#D5F6FB",
              borderRadius: 15,
              padding: "15px 138px",
            }}
          >
            <button className="font-medium font-inter" onClick={() => setShowAllProperties(false)}>
              <h2 className="">View Less</h2>
            </button>
          </div>
        )}
      </div>

      {/* Contact Info */}
      <div className="my-5">
        <h2 className="text-xl font-medium">Contact Info</h2>
        <ContactCard contact={user.contact} />
      </div>
    </div>
  );
};

export default Profile;
