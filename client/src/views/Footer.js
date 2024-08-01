import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutubeSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const infoLinks = [
  { name: "Size guides", goTo: "/coming-soon" },
  { name: "Privacy policy", goTo: "/coming-soon" },
  { name: "Terms and conditions", goTo: "/coming-soon" },
  { name: "Returns", goTo: "/coming-soon" },
];

const aboutUsLinks = [
  { name: "About us", goTo: "/coming-soon" },
  { name: "For investors", goTo: "/coming-soon" },
  { name: "Carrers", goTo: "/coming-soon" },
  { name: "Contact", goTo: "/coming-soon" },
];

const socialLinks = [
  {
    link: "https://www.instagram.com/",
    icon: faInstagram,
    color: "text-pink-500",
  },
  {
    link: "https://www.youtube.com/",
    icon: faYoutubeSquare,
    color: "text-red-500",
  },
  {
    link: "https://www.facebook.com/",
    icon: faFacebookF,
    color: "text-blue-700",
  },
  {
    link: "https://twitter.com/home",
    icon: faTwitter,
    color: "text-blue-500",
  },
];

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-black text-white flex flex-col justify-center items-center p-9 gap-6"
    >
      <section
        id="social "
        className="flex flex-col justify-center items-center text-center py-3"
      >
        <h3 className="text-gray-200 text-2xl uppercase mb-2">
          You can follow us on:
        </h3>
        <section id="links" className="grid grid-flow-col gap-4 text-3xl mb-2">
          {socialLinks.map((link, index) => (
            <a
              href={link.link}
              rel="noreferrer"
              target="_blank"
              className={`hover:${link.color}`}
              key={index}
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </section>
      </section>
      <section className="flex flex-col justify-center items-center text-center py-3">
        <h3 className="text-gray-200 text-2xl uppercase">
          Help and informations
        </h3>
        {infoLinks.map((link, index) => (
          <Link to={link.goTo} key={index}>
            <p className="text-gray-400 hover:underline cursor-pointer text-xl">
              {link.name}
            </p>
          </Link>
        ))}
      </section>
      <section className="flex flex-col justify-center items-center text-center py-3">
        <h3 className="text-gray-200 text-2xl uppercase">Undoo</h3>
        {aboutUsLinks.map((link, index) => (
          <Link to={link.goTo} key={index}>
            <p className="text-gray-400 hover:underline cursor-pointer text-xl">
              {link.name}
            </p>
          </Link>
        ))}
      </section>
      <section
        id="payment-methods"
        className="grid sm:grid-cols-5 grid-cols-2 gap-4"
      >
        <img src="./images/payment/payPal.png" alt="payPal" />
        <img src="./images/payment/visa.png" alt="visa" />
        <img src="./images/payment/visaElectron.png" alt="visaElectron" />
        <img src="./images/payment/mastercard.png" alt="mastercard" />
        <img src="./images/payment/maestro.png" alt="maestro" />
      </section>
    </footer>
  );
};

export default Footer;
