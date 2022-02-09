import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myPortfolio, handleDelete}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        myPortfolio.map(stock =>
          <Stock
            key={stock.id}
            stock={stock}
            handleBuy={handleDelete}
          />
        )
      }
    </div>
  );
}

export default PortfolioContainer;
