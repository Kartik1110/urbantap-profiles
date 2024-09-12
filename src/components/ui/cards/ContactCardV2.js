import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/mail.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";

const contactDetails = [
  { key: "phone", label: "Phone", icon: phoneIcon },
  { key: "email", label: "Email", icon: emailIcon },
  { key: "instagram", label: "Instagram", icon: instagramIcon },
  { key: "whatsapp", label: "WhatsApp", icon: whatsappIcon },
];

const ContactCard = ({ props }) => {
  const contact = {
    phone: props.w_number,
    email: props.email,
    instagram: props.ig_link,
    // linkedin: props.linkedin_link, // TODO: Add LinkedIn link
    whatsapp: props.w_number,
  };

  const handleClick = (type, value) => {
    if (!value) return; // Guard clause to prevent errors with undefined values
    switch (type) {
      case "phone":
        window.location.href = `tel:${value}`;
        break;
      case "email":
        window.location.href = `mailto:${value}`;
        break;
      case "instagram":
        window.open(`${value}`, "_blank");
        break;
      case "whatsapp":
        window.open(`https://wa.me/${value.replace(/\D/g, "")}`, "_blank");
        break;
    }
  };

  return (
    <div className="">
      {contactDetails.map(
        ({ key, label, icon }) =>
          contact[key] && (
            <div
              key={key}
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
                <img src={icon} alt={label} />
              </div>
              <div
                className="card-content cursor-pointer"
                onClick={() => handleClick(key, contact[key])}
              >
                <h2 className="card-title text-xl">{label}</h2>
                <h2 className="card-title">{key === "instagram" ? "" : contact[key] }</h2>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ContactCard;
