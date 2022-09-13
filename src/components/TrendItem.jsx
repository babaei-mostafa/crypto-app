import React from "react";

const TrendItem = ({ trend }) => {
  return (
    <div className="rounded-div flex justify-between items-center p-4 hover:scale-105 ease-in-out duration-300">
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            className="rounded-full mr-4"
            src={trend.item.small}
            alt={trend.item.id}
          />
          <div>
            <p className="font-bold">{trend.item.name}</p>
            <p>{trend.item.symbol}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="w-4 mr-2"
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          alt="/"
        />
        <p>{trend.item.price_btc.toFixed(7)}</p>
      </div>
    </div>
  );
};

export default TrendItem;
