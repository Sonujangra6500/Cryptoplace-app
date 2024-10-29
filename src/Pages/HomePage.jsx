import React, { useContext, useEffect, useState } from "react";
import { Coincontext } from "../Context/CoinContext";
import next_icon from "../assets/next-icon.png";
import back_icon from "../assets/back-icon.png";
const HomePage = () => {
  const { allCoin, setPage, page, currency } = useContext(Coincontext);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setPage(pageNum);
    return () => {
      setPage(1);
    };
  }, [pageNum]);

  const nextPage = async (e) => {
    e.preventDefault();
    if (pageNum === 1 && pageNum < 2) {
      setPageNum(pageNum + 1);
    }
  };
  const backPage = (e) => {
    e.preventDefault();
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-white text-4xl mt-2 ">
        <span className="text-4xl text-red-500">P</span>age : {page}
      </h1>
      <div className="flex relative flex-wrap items-center justify-center gap-8 pt-10 pb-10">
        <img
          onClick={backPage}
          className="absolute top-[15%] right-auto left-5 transform -translate-y-1/2 p-4 w-12 rounded-full cursor-pointer bg-[#212ea0]"
          src={back_icon}
        />
        <img
          onClick={nextPage}
          className="absolute top-[15%] right-5 transform -translate-y-1/2 p-4 w-12 rounded-full cursor-pointer bg-[#212ea0]"
          src={next_icon}
        />

        {allCoin.map((coin) => (
          <ul
            className={`rounded-lg shadow-lg p-8 max-w-sm  w-[340px]  bg-gradient-to-br bg-slate-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer`}
          >
            <li key={coin.id}>
              <div className="flex gap-4 items-center">
                <h2>
                  {coin.name} ({coin.symbol.toUpperCase()}){" "}
                </h2>
                <img
                  className="w-[25px] md:w-[35px]"
                  src={coin.image}
                  alt={coin.name}
                />
              </div>
              <p className="py-2">
                Price : {currency.symbol} {coin.current_price}
              </p>
              <p className="py-2">
                24h Change : {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p>
                Market Cap : {currency.symbol}{" "}
                {coin.market_cap.toLocaleString()}
              </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
