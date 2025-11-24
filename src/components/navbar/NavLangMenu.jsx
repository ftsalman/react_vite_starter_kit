import React, { useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Button } from "../ui/button/Button";
import { IconCheckCircle, IconGlob } from "../../assets/icons/interfaceIcons2";
import { Menu } from "../ui/Menu";
import { useI18Next } from "../../hooks/usei18next";

export const NavLangMenu = () => {
  const { i18n, isRtl, t } = useI18Next();
  // states
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  // ref
  const languageMenuRef = useClickOutside(() => setIsLanguageMenuOpen(false));

  // Safe access to current language with fallback
  const currentLanguage = i18n?.language?.split("-")[0] || "en";
  
  const AVAILABLE_LANGUAGES = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
    { code: "hi", name: "Hindi", flag: "🇮🇳" },
  ];

  const handleSwitchLanguage = (lang) => {
    i18n?.changeLanguage(lang);
    setIsLanguageMenuOpen(false);
  };

  // If i18n is not available, don't render or show loading state
  if (!i18n) {
    return (
      <Button
        variant="tertiary"
        className="p-0 size-8 rounded-md hover:bg-gray-50"
        disabled
      >
        <IconGlob size="24" />
      </Button>
    );
  }

  return (
    <div className="relative flex-shrink-0" ref={languageMenuRef}>
      <Button
        variant="tertiary"
        className="p-0 size-8 rounded-md hover:bg-gray-50"
        title="Translate"
        onClick={() => {
          setIsLanguageMenuOpen(!isLanguageMenuOpen);
        }}
      >
        <IconGlob size="24" />
      </Button>

      {isLanguageMenuOpen && (
        <Menu
          className={`absolute mt-4 space-y-0.5 z-[60] right-0 min-w-[200px] ${
            isRtl ? "left-0" : "right-0"
          }`}
        >
          {AVAILABLE_LANGUAGES.map((language) => (
            <button
              key={language.code}
              className={`h-8 p-2 flex items-center justify-between rounded-xl ${
                currentLanguage === language.code
                  ? "bg-yellow-50 text-yellow-500"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => handleSwitchLanguage(language.code)}
            >
              <div className="flex items-center gap-2">
                {currentLanguage === language.code && (
                  <IconCheckCircle size="16" />
                )}
                <span className="text-xs line-clamp-1 text-start">
                  {language?.name}
                </span>
              </div>
              <span>{language?.flag}</span>
            </button>
          ))}
        </Menu>
      )}
    </div>
  );
};