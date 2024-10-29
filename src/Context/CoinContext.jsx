import axios from "axios";
import { createContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export const Coincontext = createContext();

const CoincontextProvider = ({ children }) => {
  const [allCoin, setAllCoin] = useState([]);
  const[page,setPage] = useState(1)
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchAllCoin = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': 'CG-fgehSkQZotW3t9Q5kacu3qyZ',
      },
    };

    try {
      const res = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, {
        ...options,
        params: {
            per_page: 20,
          page: page,
         },
       });
       
       setAllCoin(res.data);
      console.log(res.data)
    } catch (err) {
      setError(err); // Set error if there's an issue
      console.error(err);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchAllCoin();
  }, [currency,page]); // Fetch again if currency changes

  const contextValue = {
    allCoin,
    currency,
    loading,
    error,
    setCurrency,
    page,
    setPage // Expose setCurrency to allow changing the currency
  };

  return (
    <Coincontext.Provider value={contextValue}>
      {loading ? <LoadingSpinner/> : children} {/* Show loading state */}
    </Coincontext.Provider>
  );
};

export default CoincontextProvider;
