import React, { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-6 pb-4 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            type="text"
            placeholder="Search a coin"
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-primary border-input px-4 py-2 rounded-2xl shadow-xl"
          />
        </form>
      </div>
      <table className="w-full border-separate text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((coin) => {
              if (searchText === "") {
                return true;
              } else if (
                coin.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return true;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
