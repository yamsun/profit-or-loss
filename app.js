const initialPriceEl = document.querySelector("#initial-price");
const quantityEl = document.querySelector("#quantity");
const currentPriceEl = document.querySelector("#current-price");
const btn = document.querySelectorAll("button")[0];
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  const initialPrice = initialPriceEl.value;
  const quantity = quantityEl.value;
  const currentPrice = currentPriceEl.value;
  if (currentPrice > initialPrice) {
    const profit = quantity * (currentPrice - initialPrice);
    const percentageProfit = (profit / initialPrice) * 100;
    msg.innerHTML = `Hey, the profit is ${profit} and the percent is ${percentageProfit}%`;
  } else if (initialPrice > currentPrice) {
    const loss = quantity * (initialPrice - currentPrice);
    const percentageLoss = (loss / initialPrice) * 100;
    msg.innerHTML = `Hey, the loss is ${loss} and the percent is ${percentageLoss}%`;
  } else {
    msg.innerHTML = "No Pain No Gain & No Gain No Pain";
  }
});
