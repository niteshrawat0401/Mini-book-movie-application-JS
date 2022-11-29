// // Data get
// let timerid;
// let mainContainer = document.getElementById("serachmovies");
// async function getData(){
//   try {
//     let searchquery = document.getElementById("search").value;
//     let res = await fetch(
//         // `https://www.omdbapi.com/?s=${searchquery}&page=1&apikey=a37fdc71`
//       `https://www.omdbapi.com/?i=tt3896198&apikey=b11098b0&s=${searchquery}`
//     // `http://www.omdbapi.com/?i=tt3896198&apikey=a37fdc71`
//     );
//     let data = await res.json();
//     console.log(data);
//     return appendData(data.Search);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

let amountArr = JSON.parse(localStorage.getItem("amount")) || [];
console.log(amountArr);

// let amt = document.createElement("p");
// amt.innerText = amountArr;

// document.getElementById("wallet").append(amt);

document.getElementById("wallet").innerText=amountArr
// window.location.reload()

// Data get
let timerid;
let mainContainer = document.getElementById("movies");
async function choosemovie() {
  try {
    let input = document.getElementById("search").value;

    // let res = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ecc9fcdc2ea17e5c996f91fb3d80acd3&s=${input}`)
    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=b11098b0&s=${input}`
    );

    let data = await res.json();
    console.log(data);

    return appendData(data.Search);
  } catch (error) {
    console.log("data:", error);
  }
}

function appendData(data) {
  // console.log(data);

  mainContainer.innerHTML = null;

  data.forEach(function (ele) {
    let div = document.createElement("div");
    div.setAttribute("class", "movie_tab");

    let image = document.createElement("img");
    image.setAttribute("src", ele.Poster);

    let title = document.createElement("p");
    title.innerText = ele.Title;

    title.addEventListener("click", function () {
      search(ele);
    });

    let btn = document.createElement("button");
    btn.innerText = "Book Now";
    btn.setAttribute("class", "book_now");

    btn.addEventListener("click", function () {
        add(ele);
      });

    div.append(image, title, btn);
    mainContainer.append(div);
  });
}

//  Book Now
let checkoutArr= JSON.parse(localStorage.getItem("check")) || [];
function add(ele){
    let checkoutArr=[];
    checkoutArr.push(ele);
    console.log(checkoutArr);
    localStorage.setItem("check",JSON.stringify(checkoutArr));
    window.location.href="./checkout.html";
}



function search(ele) {
  let searchArr = [];
  searchArr.push(ele);
  console.log(searchArr);

  display(searchArr);
}

function display(searchArr) {
  // document
  searchArr.map(function (ele) {
    // let div = document.createElement("div");

    // div.append(image,);
    // document.getElementById("movies").append(div);
  });
}

async function main() {
  try {
    let data = await choosemovie();
    if (data === undefined) {
      return false;
    }
    appendData(data);
  } catch (error) {
    console.log("error:", error);
  }
}
function debounce(func, delay) {
  if (timerid) {
    clearInterval(timerid);
  }

  timerid = setTimeout(function () {
    func();
  }, delay);
}
