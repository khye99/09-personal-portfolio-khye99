var valPages = 0;
var cost = 10;
var pageCost;

var contact = 0;
var eComm = 0;
var chat = 0;
var social = 0;
var imageG = 0;
var featureCost;

var totalCost = 0;
var addSum = document.getElementById("add-sum");

function getEstimation () {
  valPages = document.getElementById("pages").value;
  console.log("valPages" + valPages);
  pageCost = valPages * cost;
  console.log("pc" + pageCost);
  return pageCost;
}

function check () {
console.log("Check function called");
  if (document.getElementById("contactForm").checked == true) {
      contact = 2;
      console.log("contact Form");
  }
  if (document.getElementById("ecommerce").checked == true) {
    eComm = 2;
    console.log("ecommerce");
  }
  if (document.getElementById("chat").checked == true) {
    chat = 2;
    console.log("chat");
  }
  if (document.getElementById("social").checked == true) {
    social = 2;
    console.log("social");
  }
  if (document.getElementById("image").checked == true) {
    imageG += cost2;
    console.log("imageG");
  }

  featureCost = contact + eComm + chat + social + imageG;
  return featureCost;
}

function finalCost () {
    getEstimation ();
    check ();
    totalCost = pageCost + featureCost;
    return totalCost;
}

// if (document.getElementById("play").addEventListener("click", finalCost()) {
//   document.getElementById("add-sum").innerHTML = "Your Estimated Cost is: $ " + totalCost;
// }
// document.getElementById("add-sum").innerHTML = totalCost;
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = "Your estimated cost will be: $" + finalCost();
    totalCost = 0;
    contact = 0;
    eComm = 0;
    chat = 0;
    social = 0;
    imageG = 0;
}
