import React, { useContext, useEffect, useState } from "react";
import { Coincontext } from "../Context/CoinContext";

const SearchPage = () => {
  const { allCoin, currency } = useContext(Coincontext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const InputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="px-4 md:px-6 pb-[80px] md:pb-[100px]">
      {/* Hero Section */}
      <div className="flex my-[50px] md:my-[80px] mx-auto flex-col items-center text-center gap-[16px] md:gap-[30px] text-white max-w-[1200px]">
        <h1 className="text-2xl md:text-5xl font-bold leading-snug">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-[90%] md:w-[75%] text-[#e3e3e3] text-sm md:text-base">
          Welcome to the cryptocurrency marketplace.
        </p>
        <form
          onSubmit={searchHandler}
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-[10px] w-full md:w-[50%] p-4 md:p-[8px] bg-white rounded-lg"
        >
          <input
            className="text-base md:text-xl text-black border-none outline-none w-full pl-[10px] rounded-md"
            type="text"
            placeholder="Search crypto.."
            required
            list="coinlist"
            value={input}
            onChange={InputHandler}
          />
          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button
            className="py-[8px] md:py-[10px] px-[16px] md:px-[20px] bg-[#7927ff] text-white border-none rounded-lg cursor-pointer text-sm md:text-base"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      {/* Coins Table */}
      <div className="text-white max-w-[1000px] mx-auto bg-custom-gradient p-4 md:p-6 rounded-lg shadow-md overflow-x-auto">
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] gap-2 md:gap-4 items-center border-b border-b-customGray border-solid text-xs md:text-sm">
          <p className="w-[20px]">#</p>
          <p className="col-span-2 md:col-span-1">Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] gap-2 md:gap-5 items-center border-b border-b-customGray border-solid text-xs md:text-sm"
          >
            <p className="w-[20px]">{item.market_cap_rank}</p>
            <p className="flex col-span-2 md:col-span-1 gap-[8px] md:gap-[10px] items-center">
              <img
                className="w-[20px] md:w-[35px]"
                src={item.image}
                alt={item.name}
              />
              <span>{`${item.name} - ${item.symbol.toUpperCase()}`}</span>
            </p>
            <p className="text-xs md:text-sm">
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={`text-center ${
                item.price_change_percentage_24h > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100}%
            </p>
            <p className="text-right text-xs md:text-sm">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
