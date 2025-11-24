import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button/Button";
import { IconArrowBack } from "../../assets/icons/interfaceIcons2";
import Select from "../ui/Select";
import { CountriesSelect } from "../ui/CountriesSelect";
const languages = [
  { code: "zh", label: "ZH", flag: "/images/flags/china.png" },
  { code: "in", label: "IN", flag: "/images/flags/india.png" },
  { code: "ae", label: "AE", flag: "/images/flags/united-arab-emirates.png" },
  { code: "us", label: "US", flag: "/images/flags/united-states.png" },
];

export const AuthLayoutHeader = ({ hideBackBtn = true }) => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <div className=" relative flex-shrink-0 flex items-center justify-between gap-4 container  py-2 mt-2  md:py-2">
      <div className="flex items-center gap-4">
        {!hideBackBtn && (
          <Link to="/auth/login">
            <Button
              className="font-semibold text-sm size-10 p-1 hover:bg-brand-primary-100"
              variant="tertiary"
              title="Back to login"
            >
              <IconArrowBack />
            </Button>
          </Link>
        )}

        {/* <img
          src="/svg/brand-logos/logo-flowbe-secondary.svg"
          alt="logo"
          width="120"
        /> */}
      </div>

      {/* pattern svg */}

      <img
        src="/svgs/auth/auth-pattern.svg"
        alt=""
        className=" absolute right-0  -z-10 top-0"
      />

      <CountriesSelect
        options={languages}
        selectedOption={selectedLang}
        onSelect={(lang) => setSelectedLang(lang)}
        labelKey="label"
        valueKey="code"
        placeholder="Choose language"
        render={(option) => (
          <div className="flex items-center gap-2">
            <img src={option.flag} className="w-6 h-6 rounded-full" />
            <span>{option.label}</span>
          </div>
        )}
      />
    </div>
  );
};
