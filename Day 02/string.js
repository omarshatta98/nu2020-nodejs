const name = "OmarShatta";
console.log(name.substr(0, 4));
console.log(name.substr(4));

console.log("----------");

let url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split";
let segments = url.split("/");
segments.forEach(element => console.log(element));
