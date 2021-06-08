// examine the document object
// console.dir(document); // showing us the different properties and method attached to doc object eg.url, all(html, collection) large tree of properties and methods
// console.log(document.domain); // getting the domain
// console.log(document.url); // getting the url
// console.log(document.title); // item lister
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all); // geting everthing in the document
// console.log(document.all[10]);
// // document.all[10].textContent="Hello";//could select like this but ypou dont wanna use this method
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GET ELMENT BY ID //
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title"); // this selects only the title, ITEM LISTER word
// let header = document.getElementById("main-header"); // this choosese the whole header, the green part
// console.log(document.getElementById("header-title"));
// console.log(headerTitle);
// headerTitle.textContent = "Hello"; // text content disregards the span that was set to display none it stiil shows in the console
// headerTitle.innerText = "Goodbye"; // innertext pays attention to the styling, textContent disregards the spen, while innertext does not
// console.log(document.textContent);
// headerTitle.innerHTML = '<h3>Hello</h3>'; //inner Html if you look at the inspector, the html is in the h2 now, it doesnt change the h1 to an h3, it puts the html in the dom element
// header.style.borderBottom = "solid 3px black";

//GET ELEMENTS BY CLASS NAMES //
// say we want to get all the list items, we know it has a class of list-group-item
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);// shows us individual items int e class in the console
// console.log(items[1]); // selects the second item on the list
// items[1].textContent = "Hello 2"; // changing item 1 into Hello 2
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // gives error
// // items.style.backgroundColor =" grey";

// for(var i = 0; i < items.length; i++){ // so instead of using above code, use a for loop to loop through each individual item to change its background Colour
//     items[i].style.backgroundColor = "#f4f4f4";
// };

// GET ELEMENTS BY TAG NAME

// var li = document.getElementsByTagName('li');
// console.log(li);// shows us individual items int e class in the console
// console.log(li[1]); // selects the second item on the list
// li[1].textContent = 'Hello 2'; // changing item 1 into Hello 2
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // gives error
// // items.style.backgroundColor =" grey";

// for(var i = 0; li < li.length; i++){ // so instead of using above code, use a for loop to loop through each individual item to change its background Colour
//    li[i].style.backgroundColor = "#f4f4f4";
// };

// QUERY SELECTORS
// this only grabs 1
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// var input = document.querySelector("input");
// input.value = "Hello World"; // it only selcts the one, the first one
// // even though there are two inputs on the page
// // with query selctor we can use any css selector

// var submit = document.querySelector("input[type='submit']");
// submit.value = "SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = "red";

// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color="blue";

// var secondItem = document.querySelector(".list-group-item:nthchild(2)");
// secondItem.style.color = "coral";

// Query SELECTOR ALL
// will grab more than 1 thimg

// var titles = document.querySelectorAll('.title'); // can put anyhting in here , claas , ids etc

// console.log(titles);
// titles[0].textContent = "Hello"; // changes first title with class title

// var odd = document.querySelectorAll('li:nth-child(odd)'); // if we want to slect every other

// for( var i = 0; i < odd.length; i++){
//     odd[i].getElementsByClassName.backgroundColor = "#f4f4f4";

// }

// // TRAVERSING THE DOM

// var itemList = document.querySelector('#items');
// parentNode Porperty
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"; // now this changes thhe backgrounf of the parentNode. thats the div with the name main
// console.log(itemList.parentNode.parentNode);// this is going to give us the parentnode of the main which is the container

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// // CHILD Node
// console.log(itemList.childNodes); // we get a node list, basically an array/list. items  are givrn inside, the 0 is a textnode
// text node represents line breaks/ whitespace

// console.log(itemList.children); // this doenst include the line breaks as elements
// // recommended to use children instead of childnodes
// // no longer a noed list, now its an Html Collection
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // first child
// console.log(itemList.firstChild);
// // same as childnodes

// // first element child
// console.log(itemList.firstElementChild); // that gives us the actual li
// itemList.firstElementChild.textContent ="Hello 1"; // the first one is now Hello1

// // last child
// console.log(itemList.lastChild);
// // same as childnodes

// // first element child
// console.log(itemList.lasttElementChild); // that gives us the actual li
// itemList.lastElementChild.textContent ="Hello 4";

// nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling); // this html doesnt have a next sibling

// //previous ibling
// console.log(itemList.previousSibling);
// //previousElement Sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green"; // this changes the colour of the name of the itemList

// create Element

// var newDiv = document.createElement('div'); // new div, its empty and we can put it where we wANT
// newDiv.className = "Hello" // add class
// newDiv.id = "hello1" // add id
// newDiv.setAttribute("title", "Hello Div"); // adding a title, it takes in two parameters, first is the attribute we want eg, title, and teh second parameter is the value of the title eg, HelloDiv

// var newDivText = document.createTextNode("Hello World"); // to add content to the div, between the div tags, what we want should be doisplayed
// newDiv.appendChild(newDivText); // add the text to the div, the content that we want added is being appended through append Child as a child of the div title

// var container = document.querySelector("header .container"); // in the header we want the container class
// var h1 = document.querySelector("header h1");

// console.log(newDiv);
// newDiv.style.fontSize = "30px"; // changing the size
// container.insertBefore(newDiv, h1  )//two parameters, first is what we are inserting and what we are inserting before

// var button =  document.getElementById("button").addEventListener
// ("click", buttonClick);

// function buttonClick(e){
//   // console.log("Button Clicked");// old way of doing it
//   //   document.getElementById("header-title").textContent = "Changed";
//   //   document.querySelector("#main").style.background = "#f4f4f4";
//   // }
//   // console.log(e); // now when button is clicked you get all these different properties, classname, id, attributes, position of the mouse

//   // console.log(e.target); //it gives us the actual element that was clicked
//   // console.log(e.target.id);
//   // console.log(e.target.className);
//   // var output = document.getElementById("output");
//   // output.innerHTML = "<h3>" +e.target.id+"</h3";

//   // console.log(e.type);// tell us the type of event

//   // console.log(e.clientx);//tells us the postion of the mouse when its clicked
//   //console.log(e.clienty); //tells us the postion of the mouse when its clicked, but that is with reference from the window
//    //console.log(e.offsetx);// thats from the actual element itself, not in reference to the window

//       console.log(e.altKey); // to check if you are holding down alt Key

// }


function runEvent(e) {
  console.log("event type" + e.type);
}
// -------------------------------------------------------------------------------
var form = document.getElementById("add_Form");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);//to add an item
itemList.addEventListener("click", removeItem);//for deletion of items
filter.addEventListener("keyup", filterItems);// for filtering of items


function addItem(e) {
  //function for adding an item to the list
  e.preventDefault();
  var newItem = document.getElementById("item").value; //how we get the value
  var li = document.createElement("li"); //creating new li to list the new item in
  var deleteBtn = document.createElement("button"); // Create del button element
  li.className = "list-group-item"; // item needs class
  li.appendChild(document.createTextNode(newItem)); // Add text node with input value
  li.appendChild(deleteBtn); //adding delete button to new item

  deleteBtn.className = "btn btn-danger btn-sm float-right delete"; // Add classes to del button
  deleteBtn.appendChild(document.createTextNode("X")); // Append text node

  itemList.appendChild(li); // Append li to list
}

function removeItem(e) { //function for deleting an item
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure you want to delete this item?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}