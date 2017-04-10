/*    Project:  Individual Student Project
      Author: Justin Collier
      Date: Mar 1, 2017
      Purpose:
*/ 
//function to add values of selected check boxes and display total.
  // array storing products to display
    var products = ["S round shoelace ($1)", "M round shoelace ($1.50)", "L round shoelace ($2)", "XL round shoelace ($2.50)", "S flat shoelace ($1)", "M flat shoelace ($1.50)", "L flat shoelace ($2)", "XL flat shoelace ($2.50)"];
        // matching array of label elements
    var labels = document.getElementsByTagName("label");
        // function to generate list from array
    function processProducts() {
      for (var i = 0; i < 8; i++) { //write each array elements to their corresponding label
       // OLD CODE: listItem = "item" + (i + 1);
        labels[i].innerHTML = products[i];
      }
    }
    
    if (window.addEventListener) {
       window.addEventListener("load", processProducts, false);
    } else if (window.attachEvent) {
       window.attachEvent("onload", processProducts);
    }
    //function below adds values of the checked boxes and then displays the total
    function calcTotal()
    {
      var itemTotal = 0;
      var salesTaxRate = .06; //creates the sales tax
      var items = document.getElementsByTagName("input");
      for (var i = 0; i < 8; i++) {
        if (items[i].checked) {
          itemTotal += (items[i].value * 1);
        }
      }
      itemTotal *= 1+ salesTaxRate; //Creates a total that includes sales tax
      document.getElementById("total").innerHTML = "Your Sweet Shoelace order total is $" + itemTotal.toFixed(2); //creates a notification of the item total and sets the order total the hundreth decimal
    }
    
    //Below adds backwards compatible event listener to Submit button
    var submitButton = document.getElementById("sButton");
    if (submitButton.addEventListener) {
      submitButton.addEventListener("click", calcTotal, false);
    } else if (submitButton.attachEvent) {
      submitButton.attachEvent("onclick", calcTotal);
    }
/* Old function
function calcTotal() {
  var itemTotal = 0 //stores a running total of selected items
  var item1 = document.getElementById("item1");
  var item2 = document.getElementById("item2");
  var item3 = document.getElementById("item3");
  var item4 = document.getElementById("item4");
  var item5 = document.getElementById("item5");
  var item6 = document.getElementById("item6");
  var item7 = document.getElementById("item7");
  var item8 = document.getElementById("item8");
  (item1.checked) ? (itemTotal += 1) : (itemTotal += 0); //lines 17-24 create the item value
  (item2.checked) ? (itemTotal += 1.50) : (itemTotal += 0);
  (item3.checked) ? (itemTotal += 2) : (itemTotal += 0);
  (item4.checked) ? (itemTotal += 2.50) : (itemTotal += 0);
  (item5.checked) ? (itemTotal += 1) : (itemTotal += 0);
  (item6.checked) ? (itemTotal += 1.50) : (itemTotal += 0);
  (item7.checked) ? (itemTotal += 2) : (itemTotal += 0);
  (item8.checked) ? (itemTotal += 2.50) : (itemTotal += 0);
  var salesTaxRate = 0.06; //factor for sales tax
  var orderTotal = itemTotal + (itemTotal * salesTaxRate); //creates an order total of the purchase total multiplied by the sales tax
  alert("Your Sweet Shoelace order total is $" + orderTotal); //creates a pop up box displaying the total
}
document.getElementById("submit").addEventListener("click", calcTotal, false) //the event listener to call the function */