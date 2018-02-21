'use strict';
//Global Variables//

OrderedItem.itemSelected=[];
var products=[];
// var quantityOrdered=[];

//Constructor Function//
function OrderedItem(name, filepath, qtyOrdered) {
  this.name = name;
  this.filepath = filepath;
  this.qtyOrdered = qtyOrdered;

  products.push(this);
}

//Use my constructor function to create new OrderedItem instances//
new OrderedItem('bag','bag.jpg',0);
new OrderedItem('banana', 'banana.jpg', 0);
new OrderedItem('bathroom', 'bathroom.jpg', 0);
new OrderedItem('boots', 'boots.jpg', 0);
new OrderedItem('breakfast', 'breakfast.jpg', 0);
new OrderedItem('bubblegum', 'bubblegum.jpg', 0);
new OrderedItem('chair', 'chair.jpg',0 );
new OrderedItem('cthulhu', 'cthulhu.jpg', 0);
new OrderedItem('dog-duck', 'dog-duck.jpg', 0);
new OrderedItem('dragon', 'dragon.jpg', 0);
new OrderedItem('pen', 'pen.jpg', 0);
new OrderedItem('pet-sweep', 'pet-sweep.jpg', 0);
new OrderedItem('tauntaun', 'tauntaun.jpg', 0);
new OrderedItem('unicorn', 'unicorn.jpg', 0);
new OrderedItem('usb', 'usb.gif', 0);
new OrderedItem('water-can', 'water-can.jpg', 0);
new OrderedItem('wine-glass', 'wine-glass.jpg',0);






function addToCart(event) {
  event.preventDefault();
  var prodName = event.target.products.value;
  var quantity = parseInt(event.target.qtyNum.value);
  console.log('prodName ' + prodName);
  console.log('quantity ' + quantity);

  for (var i = 0; i<products.length; i++) {
    console.log('products ' + products[i].name);
    if (products[i].name === prodName) {

      products[i].qtyOrdered = quantity;
    }



  }




  //Take Checkpoint: Save results to local storage//
  var strProducts = JSON.stringify(products);
  localStorage.setItem('products', strProducts);

  //Clear the Form
  event.target.qtyNum.value = null;
  event.target.products.value = null;



}
//EVENT LISTENERS//
var addButton = document.getElementById('order-form');
console.log('add' + addButton);
addButton.addEventListener('submit', addToCart);

