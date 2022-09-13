import React, { useEffect, useState } from "react";
import axios from "axios";
import TrendItem from "./TrendItem";

const Trending = () => {
  const [trends, setTrends] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  console.log(trends);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setTrends(response.data.coins);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trends.map((trend) => (
          <TrendItem key={trend.item.coin_id} trend={trend} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
