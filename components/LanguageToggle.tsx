import { useRouter } from "next/router";
import i18nextConfig from "../next-i18next.config";
import { Emoji } from "./Emoji";
import { FC } from "react";

export type LanguageToggleProps = {
  className: string;
};

export const LanguageToggle: FC<LanguageToggleProps> = (props) => {
  const router = useRouter();

  const languageMap: Record<string, string> = {
    en: "🇮🇪",
    de: "🇩🇪",
    no: "🇳🇴",
  };

  const changeLanguage = (language: string) => {
    router.push(router.pathname, router.pathname, { locale: language });
  };

  const locales = i18nextConfig.i18n.locales || [];

  return (
    <div className={`flex flex-row justify-around ${props.className}`}>
      {locales.map((lng) => {
        return (
          <div
            className="m-auto cursor-pointer"
            key={lng}
            onClick={() => changeLanguage(lng)}
          >
            <Emoji symbol={languageMap[lng]} />
          </div>
        );
      })}
    </div>
  );
};
