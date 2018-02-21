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

//Use my constructor function to create new OrderedItem instances//
new OrderedItem('bag','images/bag.jpg',0);
new OrderedItem('banana', 'images/banana.jpg', 0);
new OrderedItem('bathroom', 'images/bathroom.jpg', 0);
new OrderedItem('boots', 'images/boots.jpg', 0);
new OrderedItem('breakfast', 'images/breakfast.jpg', 0);
new OrderedItem('bubblegum', 'images/bubblegum.jpg', 0);
new OrderedItem('chair', 'images/chair.jpg',0 );
new OrderedItem('cthulhu', 'images/cthulhu.jpg', 0);
new OrderedItem('dog-duck', 'images/dog-duck.jpg', 0);
new OrderedItem('dragon', 'images/dragon.jpg', 0);
new OrderedItem('pen', 'images/pen.jpg', 0);
new OrderedItem('pet-sweep', 'images/pet-sweep.jpg', 0);
new OrderedItem('tauntaun', 'images/tauntaun.jpg', 0);
new OrderedItem('unicorn', 'images/unicorn.jpg', 0);
new OrderedItem('usb', 'images/usb.gif', 0);
new OrderedItem('water-can', 'images/water-can.jpg', 0);
new OrderedItem('wine-glass', 'images/wine-glass.jpg',0);






function addToCart(event) {
  event.preventDefault();
  var prodName = event.target.products.value;
  var quantity = parseInt(event.target.qtyNum.value);
  console.log('prodName ' + prodName);
  console.log('quantity ' + quantity);

  for (var i = 0; i<products.length; i++) {
    console.log('products ' + products[i].name);
    if (products[i].name === prodName) {
      
      products[i].quantityOrdered = quantity;
    }
   
    
  
  }
 
  
  

  //Take Checkpoint: Save results to local storage//
  var strProducts = JSON.stringify(products);
  localStorage.setItem('productsSelected', strProducts);

  //Clear the Form
  event.target.qtyNum.value = null;
  event.target.products.value = null;



}
//EVENT LISTENERS//
var addButton = document.getElementById('order-form');
console.log('add' + addButton);
addButton.addEventListener('submit', addToCart);
