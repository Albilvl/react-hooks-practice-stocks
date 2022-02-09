import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBuy}) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map(stock=> 
        <Stock
        key={stock.id}
        stock={stock}
        handleBuy={handleBuy}
        />
      )}
    </div>
  );
}

export default StockContainer;
