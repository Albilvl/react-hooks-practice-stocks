import React, { useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [selectedType, setSelectedType] = useState("Tech")

  // AddToPortfolio step 1. useState to set portfolio to empty array
  const[myPortfolio, setMyPortfolio]= useState([])

  useEffect(() =>{
    fetch("http://localhost:3001/stocks")
    .then(res=>res.json())
    .then(stocksArray => setStocks(stocksArray))
  }, [])



  function handleTypeChange(e){
    setSelectedType(e.target.value)
  }

  const stocksToDisplay = stocks.filter(stock=>{
    if(selectedType=== "Tech") return true;
    return stock.type === selectedType
  })

  // AddToPortfolio step 2. handle the buy, 
  function handleBuy(stock){
    const findDups = myPortfolio.find(ownedStock => ownedStock.id === stock.id)
    if (!findDups){
      setMyPortfolio([...myPortfolio, stock])
    }
  }

  function handleDelete(stock){
    setMyPortfolio(myPortfolio.filter(portfolioStock=> portfolioStock.id !== stock.id))
  }
  return (
    <div>
      <SearchBar handleTypeChange={handleTypeChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} handleBuy={handleBuy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myPortfolio={myPortfolio} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
