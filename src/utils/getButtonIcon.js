import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa6";

export const getIcon = (iconName) => {
  switch (iconName) {
    case "FaGithub":
      return FaGithub;
    case "FaLinkedinIn":
      return FaLinkedinIn;
    case "FaEnvelope":
      return FaEnvelope;
    default:
      return null;
  }
};

