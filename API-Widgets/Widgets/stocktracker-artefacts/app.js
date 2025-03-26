// const symbols = ["AAPL", "MSFT", "AMZN", "GOOGL", "BRK.B"]; // Add top 50 tickers here

// symbols.forEach(symbol => {
//   const apiUrl = ``;
  
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const timeSeries = data["Time Series (1min)"];
//       const latestTime = Object.keys(timeSeries)[0];
//       const latestData = timeSeries[latestTime];
//       const price = latestData["1. open"];
      
//       const stockList = document.getElementById("stock-list");
//       const listItem = document.createElement("li");
//       listItem.textContent = `${symbol}: $${price}`;
//       stockList.appendChild(listItem);
//     })
//     .catch(error => console.error(`Error fetching data for ${symbol}:`, error));
// });
