const initialPriceEl = document.querySelector("#initial-price");
const quantityEl = document.querySelector("#quantity");
const currentPriceEl = document.querySelector("#current-price");
const btn = document.querySelectorAll("button")[0];
const msg = document.querySelector("#msg");

btn.addEventListener("click", () => {
  const initialPrice = Number(initialPriceEl.value);
  const quantity = Number(quantityEl.value);
  const currentPrice = Number(currentPriceEl.value);
  if (currentPrice > initialPrice) {
    const profit = quantity * (currentPrice - initialPrice);
    const percentageProfit = (profit / initialPrice) * 100;
    msg.innerHTML = `Hey, the profit is ${profit} and the percent is ${percentageProfit}%`;
    document.body.style.backgroundColor = "yellowgreen";
  } else if (initialPrice > currentPrice) {
    const loss = quantity * (initialPrice - currentPrice);
    const percentageLoss = (loss / initialPrice) * 100;
    msg.innerHTML = `Hey, the loss is ${loss} and the percent is ${percentageLoss}%`;
    document.body.style.backgroundColor = "rgb(243, 158, 158)";
  } else {
    msg.innerHTML = "No Pain No Gain & No Gain No Pain";
    document.body.style.backgroundColor = "yellow";
  }
});
