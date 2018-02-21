'use strict';
//Global Variables//

OrderedItem.itemSelected=[];
var products=[];
var quantityOrdered=[];

//Constructor Function//
function OrderedItem(name, filepath, qtyOrdered) {
  this.name = name;
  this.filepath = filepath;
  this.qtyOrdered = qtyOrdered;

  products.push(this);
}

//************ MAINLINE ***********

//Restore from checkpoint if one exists, otherwise load new product array
(function getLocalStorage() {
  console.log('Entering getLocalStorage');
  if (localStorage.products) {
    //Reload Product Array from checkpoint
    console.log('Restoring product array from local storage');
    var strProducts = localStorage.getItem('products');
    var products = JSON.parse(strProducts);
    for (var prod of products) {
      new OrderedItem(prod.name, prod.filepath, prod.qtyOrdered);
      console.log('Reloading product: '+ prod.name);
    }

  }
})();

// function addToCart(event) {
//   event.preventDefault();
//   var prodName = event.target.products.value;
//   var quantity = parseInt(event.target.qtyNum.value);
//   console.log('prodName ' + prodName);
//   console.log('quantity ' + quantity);

//   for (var i = 0; i<products.length; i++) {
//     console.log('products ' + products[i].name);
//     if (products[i].name === prodName) {
      
//       products[i].quantityOrdered = quantity;
//     }
   
displayCart();

  
//   }
// }
  
function displayCart() {
  console.log('Products Array Length: '+products.length);
  for (var i=0; i<products.length; i++) {
    console.log('Product Name: '+products[i].name);
    console.log('Quant Ordered: '+products[i].qtyOrdered);
    if (products[i].qtyOrdered > 0){
      console.log('Posting products: '+products[i].name);
      //Append each list line
      var liEl = document.createElement('li');

      var imgEl = document.createElement('img');
      imgEl.src = 'img/'+products[i].filepath;
      imgEl.alt = products[i].name;
      liEl.appendChild(imgEl);
      var pEl = document.createElement('p');
      pEl.textContent = products[i].name;
      liEl.appendChild(imgEl);
      liEl.appendChild(pEl);
    }
  }
}





// //EVENT LISTENERS//
// var addButton = document.getElementById('order-form');
// console.log('add' + addButton);
// addButton.addEventListener('submit', addToCart);