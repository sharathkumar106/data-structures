var a = "who all are coming to the party and merry around in somewhere";

res = "";
resarr = [];

for (i = 0; i < a.length; i++) {
  if (a[i] == " " || i == a.length - 1) {
    res += resarr.reverse().join("") + " ";
    resarr = [];
  } else {
    resarr.push(a[i]);
  }
}

document.body.appendChild(document.createTextNode(res))