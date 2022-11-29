document.getElementById("form").addEventListener("submit", walletamt);
let amountArr = JSON.parse(localStorage.getItem("amount")) || [];

function walletamt(e) {
  e.preventDefault();
  let wallet = document.getElementById("amount").value;
  // console.log(+wallet);

  let total = +wallet + +amountArr;
  // console.log(total);

  document.getElementById("wallet").innerText = total;

  localStorage.setItem("amount", JSON.stringify(total));
}
