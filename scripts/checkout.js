let amountArr = JSON.parse(localStorage.getItem("amount")) || [];
let checkoutArr = JSON.parse(localStorage.getItem("check")) || [];


// wallet
// let amt = document.createElement("p");
// amt.innerText = amountArr;

// document.getElementById("wallet").append(amt);
document.getElementById("wallet").innerText=amountArr


document.getElementById("form").addEventListener("submit", confirm);
function confirm(e){
    e.preventDefault();
   let name= document.getElementById("user_name").value;
   let seats= document.getElementById("number_of_seats").value;

   let totalAmt= amountArr - (seats * 100);
//    window.location.reload()
   console.log(totalAmt);
   

if(totalAmt >=0){
    // document.getElementById("wallet").innerText=totalAmt;
    document.getElementById("booking_status").innerText= "Booking Successful!";
    localStorage.setItem("amount", JSON.stringify(totalAmt));
}   
else if(totalAmt < 0){
    document.getElementById("booking_status").innerText= "Insufficient Balance!";
    
}
}



document.getElementById("movie").innerHTML = null;

checkoutArr.map(function (ele) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.setAttribute("src", ele.Poster);

  let title = document.createElement("h2");
  title.innerText = ele.Title;

  div.append(title, img);

  document.getElementById("movie").append(div);
});
