import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiEndPoints } from "../../../constants/apiEndPoints";

import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/mail.svg";
import instagramIcon from "../../../assets/icons/instagram.svg";
import whatsappIcon from "../../../assets/icons/whatsapp.svg";
import editIcon from "../../../assets/icons/edit.svg";

const contactDetails = [
  { name: "w_number", key: "phone", label: "Phone", icon: phoneIcon },
  { name: "email", key: "email", label: "Email", icon: emailIcon },
  {
    name: "ig_link",
    key: "instagram",
    label: "Instagram",
    icon: instagramIcon,
  },
  { name: "w_number", key: "whatsapp", label: "WhatsApp", icon: whatsappIcon },
];

const ContactCard = ({ user, allowEdit }) => {
  const { id } = useParams(); // Assumes broker's ID is in the URL params
  const [contact, setContact] = useState({
    phone: user.w_number || "",
    email: user.email || "",
    instagram: user.ig_link || "",
    whatsapp: user.w_number || "",
  });

  const [editField, setEditField] = useState(""); // Tracks which field is being edited

  // Handle changes to input fields
  const handleFieldChange = (field, value) => {
    setContact((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Update the specific field in the backend
  const updateBrokerField = (field, value) => {
    const backendFieldName = contactDetails.find(
      (detail) => detail.key === field
    )?.name;

    console.log("backendFieldName", backendFieldName);

    if (!backendFieldName) return; // If no matching field name is found, exit the function

    axios
      .post(`${apiEndPoints.brokers}/${id}`, {
        [backendFieldName]: value,
      })
      .then(() => {
        console.log(`${field} updated successfully`);
      })
      .catch((error) => {
        console.error(`Error updating ${field}:`, error);
      });
  };

  // Handle blur event to save changes
  const handleBlur = (field) => {
    setEditField("");

    updateBrokerField(field, contact[field]);
  };

  // Handle click actions (call, email, etc.)
  const handleClick = (type, value) => {
    if (!value) return; // Prevent actions if value is undefined or empty
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
      default:
        break;
    }
  };

  return (
    <div>
      {contactDetails.map(({ key, label, icon }) => (
        <div className="w-full flex items-center justify-between">
          <div
            key={key}
            className="flex flex-row items-center justify-start mt-5"
          >
            {/* Icon Section */}
            <div className="flex justify-center align-middle mr-5">
              <img src={icon} alt={label} />
            </div>

            {/* Content Section */}
            <div
              className="card-content cursor-pointer flex flex-col"
              onClick={() => handleClick(key, contact[key])}
            >
              <p className="text-sm font-normal text-gray">{label}</p>
              {editField === key ? (
                <input
                  type="text"
                  value={contact[key]}
                  onChange={(e) => handleFieldChange(key, e.target.value)}
                  className="border-2 border-gray-300 rounded p-1 mt-1"
                  onBlur={() => handleBlur(key)}
                  autoFocus
                />
              ) : (
                <h2 className="mt-1 font-normal text-black">
                  {key === "instagram" ? "" : contact[key]}
                </h2>
              )}
            </div>
          </div>

          {/* Edit Icon */}
          {allowEdit && key !== "email" && (
            <img
              src={editIcon}
              alt="Edit"
              className="cursor-pointer h-5 w-5 flex-shrink-0 ml-5"
              onClick={(e) => {
                e.stopPropagation();
                setEditField(key);
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactCard;
