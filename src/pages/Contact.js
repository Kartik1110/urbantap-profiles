import Logo from "../components/ui/Logo";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[90%] max-w-md bg-white p-8">
        <div className="flex flex-col justify-center items-center">
          <Logo />
          <h3 className="mt-4 font-medium text-lg text-center">
            Contact support@urbantap.io to create a broker profile
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
