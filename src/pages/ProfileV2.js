import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiEndPoints } from "../constants/apiEndPoints";
import ProfileButton from "../components/ProfileButton";
import ActionCard from "../components/ui/cards/ActionCard";
import shareIcon from "../assets/icons/share.svg";
import reraLogo from "../assets/icons/rera-certified.svg";
import contact from "../assets/icons/contact.svg";
import call from "../assets/icons/call.svg";
import PropertyCardV2 from "../components/ui/cards/PropertyCardV2";
import ContactCardV2 from "../components/ui/cards/ContactCardV2";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    axios.get(`${apiEndPoints.brokers}/${params.id}`)
    .then((res) => {
      setUser(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log("err", err);
      setLoading(false);
    })
}, [params.id]);


const saveContactInfo = () => {
    const contact = {
        name: user.broker.name,
        phone: user.broker.w_number,
        email: user.broker.email,
    };
    const vcard = `BEGIN:VCARD
    VERSION:3.0
    FN:${contact.name}
    TEL:${contact.phone}
    EMAIL:${contact.email}
    END:VCARD`;
    const blob = new Blob([vcard], {
        type: "text/vcard;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${contact.name}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const callNow = () => {
    window.location.href = `tel:${user.broker.w_number}`;
};

const renderLanguages = () => {
    return user.broker && user.broker.languages && user.broker.languages.map((language, index) => (
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user || !user.broker) {
    return <div>Error: User data not available</div>;
  }

  return (
    <div className="px-7">
      {/* pfp row */}
      <div className="flex flex-row justify-between">
        <ProfileButton profileImage={user.broker.profile_pic} />

        {/* <ActionCard
          title="Share"
          image={shareIcon}
          direction="row"
          cardStyling="flex justify-center 
          align-middle gap-3 px-5 my-2 
          bg-blue-200 rounded-md "
        /> */}
      </div>

      {/* profile details */}
      <div className="flex flex-row mt-2 justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{user.broker.name}</h1>
          <p className="text-md text-gray">
            {/* {user.designation} at {user.broker.company} */}
            {user.company.name}
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
          onClick={saveContactInfo}
        />
        {/* Card 2 */}
        <ActionCard
          title="Call Now"
          image={call}
          direction="column"
          cardStyling="py-4 px-10 justify-center gap-3"
          textContainerStyle="max-w-10 break-words text-center"
          onClick={callNow}
        />
        {/* Card 3 */}
        <ActionCard
          title="Share profile"
          image={shareIcon}
          direction="column"
          cardStyling="py-4 px-5 justify-center gap-3"
          textContainerStyle="max-w-20 break-words text-center"
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: `${user.broker.name}'s Profile`,
                  text: `Check out ${user.broker.name}'s profile on our platform!`,
                  url: window.location.href,
                })
                .then(() => {
                  console.log("Successfully shared");
                })
                .catch((error) => {
                  console.error("Error sharing:", error);
                });
            } else {
              // Fallback for browsers that don't support navigator.share
              const shareUrl = `whatsapp://send?text=Check out ${
                user.broker.name
              }'s profile: ${encodeURIComponent(window.location.href)}`;
              window.open(shareUrl, "_blank");
            }
          }}
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
              {user.broker.info}
              <br />
              <button
                className="font-medium font-inter mt-2"
                onClick={() => setIsExpanded(false)}
              >
                Read Less
              </button>
            </div>
          ) : (
            <div>
              {`${user.broker.info.substring(0, 86)}...`}
              <br />
              <button
                className="font-medium font-inter mt-2"
                onClick={() => setIsExpanded(true)}
              >
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
          <h2 className="">{Math.floor(user.broker.y_o_e / 12)} Years</h2>
        </div>
      </div>

      {/* Languages */}
      <div className="mt-5">
        <div
          className="card p-5 mt-3 flex flex-row gap-3 overflow-x-auto"
          style={{
            backgroundColor: "rgba(243, 245, 248, 1)",
            borderRadius: 15,
          }}
        >
          {renderLanguages()}
        </div>
      </div>

      {/* Properties available for sale */}
      {user.listings.length > 0 && <div className="mt-5">
        <h2 className="text-xl font-medium">Properties available for sale</h2>

        {user.listings.length > 0 &&
          user.listings.map((property, index) => (
            <PropertyCardV2 key={index} property={property} />
          ))}

        {user.listings.length > 0 && (
          <div
            className="flex flex-row justify-center align-middle my-3"
            style={{
              backgroundColor: "#D5F6FB",
              borderRadius: 15,
              padding: "15px 25px",
            }}
          >
            <button
              className="font-medium font-inter"
              onClick={() => navigate("/")}
            >
              {/* <h2 className="">View {user.properties.length - 2} More</h2> */}
              View All Listings
            </button>
          </div>
        )}

        {/* {showAllProperties && (
          <div
            className="flex flex-row justify-center align-middle my-3"
            style={{
              backgroundColor: "#D5F6FB",
              borderRadius: 15,
              padding: "15px 138px",
            }}
          >
            <button
              className="font-medium font-inter"
              onClick={() => setShowAllProperties(false)}
            >
              <h2 className="">View Less</h2>
            </button>
          </div>
        )} */}
      </div>}

      {/* Contact Info */}
      <div className="my-5">
        <h2 className="text-xl font-medium">Contact Info</h2>
        {loading ? <div>Loading...</div> : <ContactCardV2 props={user.broker} />}
      </div>
    </div>
  );
};

export default Profile;
