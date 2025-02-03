import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuButton = ({ onClick }) => (
  <button onClick={onClick} className="focus:outline-none text-white">
    <FontAwesomeIcon icon={faBars} size="lg" />
  </button>
);

export default MenuButton;
