import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import { Coincontext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(Coincontext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-[#ddd] pt-4 pb-4 md:pt-[20px] md:pb-[20px] px-4 md:px-[10%] border-b-[2px] border-[#3c3c3c]">
      {/* Logo */}
      <Link to="/">
        <img
          className="w-[150px] md:w-[200px] cursor-pointer mb-4 md:mb-0"
          src={Logo}
          alt="logo-png"
        />
      </Link>
      {/* Navigation Links */}
      <ul className="flex gap-4 md:gap-[40px] text-sm md:text-base list-none cursor-pointer mb-4 md:mb-0">
        <Link to="/">
          <li>Home</li>{" "}
        </Link>

        {/* <li>Features</li>
        <li>Pricing</li> */}
        <Link to="/Coin">
          <li>SearchPage</li>
        </Link>
      </ul>

      {/* Currency Selector */}
      <div>
        <select
          className="text-white py-[5px] px-[8px] border-2 rounded-lg bg-transparent cursor-pointer"
          onChange={currencyHandler}
        >
          <option className="bg-[#09005c] cursor-pointer" value="usd">
            USD
          </option>
          <option className="bg-[#09005c] cursor-pointer" value="eur">
            EUR
          </option>
          <option className="bg-[#09005c] cursor-pointer" value="inr">
            INR
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
