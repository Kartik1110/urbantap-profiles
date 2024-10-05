const ButtonTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center items-center p-1 bg-gray-lightest rounded-lg w-full h-10 my-2">
      {/* Tab 1 - profile */}
      <div
        className={`flex flex-col justify-center items-center px-2 py-1 w-full h-8 rounded-md cursor-pointer ${
          activeTab === "profile" ? "bg-primary" : ""
        }`}
        onClick={() => setActiveTab("profile")}
      >
        <span className="text-sm font-semibold text-black">Profile Info</span>
      </div>

      {/* Tab 2 - listing */}
      <div
        className={`flex flex-col justify-center items-center px-2 py-1 w-full h-8 rounded-md cursor-pointer ${
          activeTab === "listing" ? "bg-primary" : ""
        }`}
        onClick={() => setActiveTab("listing")}
      >
        <span className="text-sm font-semibold text-black">
          Property Listing
        </span>
      </div>
    </div>
  );
};

export default ButtonTabs;
