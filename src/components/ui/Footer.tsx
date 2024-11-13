import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { FooterLinkModel } from "../../models";

const footerLinks: Array<FooterLinkModel> = [
  {
    href: "https://www.facebook.com",
    icon: faFacebookSquare,
    size: "2x",
    target: "_blank",
  },
  {
    href: "https://www.instagram.com",
    icon: faInstagram,
    size: "2x",
    target: "_blank",
  },
  {
    href: "https://www.twitter.com",
    icon: faTwitterSquare,
    size: "2x",
    target: "_blank",
  },
  {
    href: "https://www.youtube.com",
    icon: faYoutubeSquare,
    size: "2x",
    target: "_blank",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="icon-wrapper">
        {footerLinks.map((link) => (
          <Link to={link.href} target={link.target}>
            <FontAwesomeIcon icon={link.icon} size={link.size} />
          </Link>
        ))}
      </div>
      <nav className="footer-link-wrapper">
        <Link hrefLang="Conditions of Use" to={"/"}>
          Conditions of Use
        </Link>
        <Link hrefLang="Privacy & Policy" to={"/"}>
          Privacy & Policy
        </Link>
        <Link hrefLang="Press Room" to={"/"}>
          Press Room
        </Link>
      </nav>
      <div className="copyright">© 2023 Movies by Octet</div>
    </footer>
  );
};

export default Footer;
