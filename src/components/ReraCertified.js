const ReraCertified = () => {
  return (
    <div className="flex flex-col justify-center items-end gap-[0.77px] w-[44.44px] h-[27.79px]">
      <div className="flex flex-row items-center gap-[3.09px] w-[44.44px] h-[12.35px]">
        <div className="flex flex-row items-center gap-[6.18px] w-[12.35px] h-[12.35px]">
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.3255 1.41643C6.15733 0.777628 7.31464 0.777628 8.14647 1.41643L8.96363 2.04397C9.12462 2.1676 9.30117 2.26953 9.48873 2.34714L10.4408 2.74105C11.4099 3.14203 11.9886 4.14429 11.8513 5.18407L11.7164 6.20552C11.6898 6.40676 11.6898 6.61062 11.7164 6.81186L11.8513 7.83331C11.9886 8.87309 11.4099 9.87535 10.4408 10.2763L9.48873 10.6702C9.30117 10.7479 9.12462 10.8498 8.96363 10.9734L8.14647 11.601C7.31464 12.2398 6.15733 12.2398 5.3255 11.601L4.50835 10.9734C4.34735 10.8498 4.17081 10.7479 3.98324 10.6702L3.0312 10.2763C2.06207 9.87535 1.48341 8.87309 1.62072 7.83331L1.7556 6.81186C1.78217 6.61062 1.78217 6.40676 1.7556 6.20552L1.62072 5.18407C1.48341 4.14429 2.06207 3.14203 3.0312 2.74105L3.98324 2.34714C4.17081 2.26953 4.34735 2.1676 4.50835 2.04397L5.3255 1.41643Z"
              fill="#FF891C"
            />
          </svg>
        </div>

        {/* Button Text */}
        <p className="text-[10.807px] font-medium leading-none text-black">
          RERA
        </p>
      </div>

      {/* Certified Text */}
      <p className="text-[7.7193px] font-medium leading-none text-right text-black">
        CERTIFIED
      </p>
    </div>
  );
};

export default ReraCertified;
