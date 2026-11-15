"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer
      className={`bg-[#172033] p-4 md:p-5 space-y-4 text-center md:text-start`}
    >
      <div className=" md:flex items-end space-x-4 space-y-4 md:space-y-0 ">
        {/* Info Mia */}
        <div className="text-white space-y-4">
          <h2 className="text-3xl font-bold">Lucas Yudi</h2>
          <h3 className="text-3xl md:text-4xl font-bold">{t("titulo")}</h3>
        </div>

        {/* Links redes sociales */}
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/in/lucas-agustin-yudi-32a536273/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-5xl"
            />
          </a>
          <a href="https://github.com/Yudi454" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="text-white text-5xl" />
          </a>
        </div>
      </div>
      <p className="text-[#757575] text-xl font-bold">© 2026 Lucas Yudi</p>
    </footer>
  );
};
