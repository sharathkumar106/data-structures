var a = "this is a sentence to be used to reverse the words";

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