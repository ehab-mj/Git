const title = document.getElementById("mainTitle");
const List = document.querySelectorAll(".feature");
const p = document.querySelector(".description");
const link = document.getElementById("mainLink");
const ListFa = document.getElementById("features");
const title2 = document.createElement("h2");

title.textContent = "Welcome to the Dashboard";
p.textContent = "Hello world";
p.classList.remove("hidden");

title.classList.add("highlight");

title2.textContent = "Available Features";
document.body.appendChild(title2);

ListFa.before(title2);

link.setAttribute("href", "https://example.com")
link.textContent = "Go to Dashboard";

console.log(title.textContent);
console.log(p.innerHTML);
console.log(List);
console.log(title2);
console.log(link.getAttribute("href"));






