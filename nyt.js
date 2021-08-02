const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json"; //1

const key = "wBGzhNBgHcSG0e08pD9JED5bC8B4Wub7"; //2

let url; //3

//SEARCH FORM
const searchTerm = document.querySelector(".search");
const startDate = document.querySelector(".start-date");
const endDate = document.querySelector(".end-date");
const searchForm = document.querySelector("form");
const submitBtn = document.querySelector(".submit");

//RESULTS NAVIGATION
const nextBtn = document.querySelector(".next");
const previousBtn = document.querySelector(".prev");
const nav = document.querySelector("nav");

//RESULTS SECTION
const section = document.querySelector("section");

nav.style.display = "none";

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener("submit", fetchResults);
nextBtn.addEventListener("click", nextPage);
previousBtn.addEventListener("click", previousPage);

const searchForm = document.querySelector("form");

function fetchResults(e) {
  console.log(e);

  // Assembly the full URL
  url =
    baseURL +
    "?api-key" +
    key +
    "&page=" +
    pageNumber +
    "&q=" +
    searchTerm.value;
  console.log(url);
}

function nextPage() {
  console.log("Next button clicked");
}

function previousPage() {
  console.log("Next button clicked");
}
