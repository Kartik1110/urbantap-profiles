const HouseIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M9.5 17.0001H15.5M17.5 21.0001H7.5C6.43913 21.0001 5.42172 20.5786 4.67157 19.8285C3.92143 19.0783 3.5 18.0609 3.5 17.0001V10.7081C3.49999 10.0203 3.67732 9.34411 4.01487 8.74485C4.35242 8.1456 4.83879 7.64351 5.427 7.28706L10.427 4.25706C11.0521 3.87826 11.7691 3.67798 12.5 3.67798C13.2309 3.67798 13.9479 3.87826 14.573 4.25706L19.573 7.28706C20.1611 7.64342 20.6473 8.14535 20.9849 8.74442C21.3224 9.34348 21.4998 10.0194 21.5 10.7071V17.0001C21.5 18.0609 21.0786 19.0783 20.3284 19.8285C19.5783 20.5786 18.5609 21.0001 17.5 21.0001Z"
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
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pl-2"
    >
      <g clip-path="url(#clip0_192_1016)">
        <path
          d="M23.833 20.9999V18.9999C23.8323 18.1136 23.5374 17.2527 22.9944 16.5522C22.4514 15.8517 21.6911 15.3515 20.833 15.1299"
          stroke={color || "#d3dce6"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.833 21V19C17.833 17.9391 17.4116 16.9217 16.6614 16.1716C15.9113 15.4214 14.8939 15 13.833 15H5.83301C4.77214 15 3.75473 15.4214 3.00458 16.1716C2.25444 16.9217 1.83301 17.9391 1.83301 19V21"
          stroke={color || "#d3dce6"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.833 3.12988C17.6934 3.35018 18.456 3.85058 19.0006 4.55219C19.5452 5.2538 19.8409 6.11671 19.8409 7.00488C19.8409 7.89305 19.5452 8.75596 19.0006 9.45757C18.456 10.1592 17.6934 10.6596 16.833 10.8799"
          stroke={color || "#d3dce6"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.83301 11C12.0421 11 13.833 9.20914 13.833 7C13.833 4.79086 12.0421 3 9.83301 3C7.62387 3 5.83301 4.79086 5.83301 7C5.83301 9.20914 7.62387 11 9.83301 11Z"
          stroke={color || "#d3dce6"}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_192_1016">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.833008)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const JobsIcon = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16699 8H4.16699C3.63656 8 3.12785 8.21071 2.75278 8.58579C2.37771 8.96086 2.16699 9.46957 2.16699 10V19C2.16699 19.5304 2.37771 20.0391 2.75278 20.4142C3.12785 20.7893 3.63656 21 4.16699 21H20.167C20.6974 21 21.2061 20.7893 21.5812 20.4142C21.9563 20.0391 22.167 19.5304 22.167 19V10C22.167 9.46957 21.9563 8.96086 21.5812 8.58579C21.2061 8.21071 20.6974 8 20.167 8H15.167M9.16699 8V3.6C9.16699 3.44087 9.23021 3.28826 9.34273 3.17574C9.45525 3.06321 9.60786 3 9.76699 3H14.567C14.7261 3 14.8787 3.06321 14.9913 3.17574C15.1038 3.28826 15.167 3.44087 15.167 3.6V8M9.16699 8H15.167M9.16699 8V14M15.167 8V14"
        stroke={color || "#d3dce6"}
        stroke-width="1.5"
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

export const TABS_LIST = [
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
    label: "Jobs",
    icon: JobsIcon,
    to: "/jobs",
  },
];
