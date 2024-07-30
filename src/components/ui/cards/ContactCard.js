import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/mail.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";
import linkedinIcon from "../../../assets/icons/linkedin.svg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";

const contactDetails = ["Phone", "Email", "Instagram",  "Whatsapp"];

const contactIcons = {
  phone: phoneIcon,
  email: emailIcon,
  instagram: instagramIcon,
  // linkedin: linkedinIcon,
  whatsapp: whatsappIcon,
};

const ContactCard = ({ contact }) => {
  return (
    <div className="">
      {contactDetails.map((detail) => (
        <div
          key={detail.toLowerCase()}
          className="card p-5 mt-3 flex flex-row align-middle"
          style={{
            backgroundColor: "rgba(243, 245, 248, 1)",
            borderRadius: 15,
          }}
        >
          <div
            className="card-image flex justify-center align-middle p-4 mr-5"
            style={{
                backgroundColor: "white",
                borderRadius: 50,
              }}
          >
            <img src={contactIcons[detail.toLowerCase()]} alt={detail} />
          </div>
          <div className="card-content">
            <h2 className="card-title text-xl">{detail}</h2>
            <h2 className="card-title">{contact[detail.toLowerCase()]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
