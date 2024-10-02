const HouseIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.07 2.81984L3.14001 8.36983C2.36001 8.98983 1.86001 10.2999 2.03001 11.2799L3.36001 19.2398C3.60001 20.6598 4.96 21.8098 6.4 21.8098H17.6C19.03 21.8098 20.4 20.6498 20.64 19.2398L21.97 11.2799C22.13 10.2999 21.63 8.98983 20.86 8.36983L13.93 2.82985C12.86 1.96985 11.13 1.96984 10.07 2.81984Z"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const BrokersIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2"
    >
      <path
        d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.16 14.56C1.74 16.18 1.74 18.82 4.16 20.43C6.91 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.92 12.73 4.16 14.56Z"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const JobsIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.61914 11.2695C4.86914 12.8095 7.40914 13.7395 9.99914 14.0295"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.99983 22H15.9998C20.0198 22 20.7398 20.39 20.9498 18.43L21.6998 10.43C21.9698 7.99 21.2698 6 16.9998 6H6.99983C2.72983 6 2.02983 7.99 2.29983 10.43L3.04983 18.43C3.25983 20.39 3.97983 22 7.99983 22Z"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ListingsIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "#d3dce6"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-building-2 pl-1"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
};

const ProfileIcon = ({ color }) => {
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color || "#d3dce6"}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-user"
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>;
};

const ShareIcon = () => (
  <svg
    width="45"
    height="44"
    viewBox="0 0 45 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
  >
    <circle cx="22.5" cy="22" r="22" fill="#0DCB88" />
    <path
      opacity="0.34"
      d="M19.1099 23.6486L22.6899 20.0586"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.4 16.3202L24.89 13.4902C28.7 12.2202 30.77 14.3002 29.51 18.1102L26.68 26.6002C24.78 32.3102 21.66 32.3102 19.76 26.6002L18.92 24.0802L16.4 23.2402C10.69 21.3402 10.69 18.2302 16.4 16.3202Z"
      stroke="black"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const getTabsList = (profileTo, profileIcon) => {
  return [
    {
      label: "Home",
      icon: HouseIcon,
      to: "/home",
    },
    {
      label: "Brokers",
      icon: BrokersIcon,
      to: "/brokers",
    },
    // {
    //   label: "Listings",
    //   icon: ListingsIcon,
    //   to: "/listings",
    // },
    {
      label: "share",
      icon: ShareIcon,
      to: "",
    },
    {
      label: "Jobs",
      icon: JobsIcon,
      to: "/jobs",
    },
    {
      label: "Profile",
      icon: ProfileIcon,
      // icon: <img src={profileIcon} alt="user-icon" />,
      icon: () =>
        profileIcon ? (
          <img
            src={profileIcon}
            alt="user-icon"
            className="w-6 h-6 rounded-full object-cover ml-0.5"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={"#d3dce6"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user"
            className="ml-1"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        ),
      to: profileTo,
    },
  ];
};
