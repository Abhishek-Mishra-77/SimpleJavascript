// console.log('I love coding');

// // console.log(document);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);

//1.Id selector
const main = document.getElementById('main-header');
main.style.borderBottom = 'solid 4px black';

const title = document.querySelector('.title');
title.style.fontWeight = 'bold';
title.style.color = 'green';


//2.Class selector

// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[0].textContent = 'This is first list';
// // items[1].textContent = 'This is second list';
// // items[2].textContent = 'This is third list';
// // items[3].textContent = 'This is fourth list';
// // items[0].style.fontWeight = 'bold';
// // items[1].style.fontWeight = 'bold';
// // items[2].style.fontWeight = 'bold';
// // items[3].style.fontWeight = 'bold';

// //  items[2].style.backgroundColor = 'green';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }


// // items[0].style.backgroundColor = 'Violet';
// // items[1].style.backgroundColor = 'LightGray';
// // items[2].style.backgroundColor = 'Orange'
// // items[3].style.backgroundColor = 'Tomato';

// //    for(let i=0;i<items.length;i++){
// //     items[i].style.backgroundColor = 'LightGray'; 
// //    }

// // items[0].style.color = 'Tomato';
// // items[1].style.fontWeight = 'DodgerBlue';
// // items[2].style.fontWeight = 'MediumSeaGreen';
// // items[3].style.fontWeight = 'LightGray';

// // 3 GetElementbyTag selector

// const li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

//   // li[3].style.background = 'green';


//  // 4. QuerySelector 
 
//     const header = document.querySelector('#main-header');
//     header.style.borderBottom = 'solid 5px red';

//     const input = document.querySelector('input');
//     input.value = 'Hello chintu';

//     const submit = document.querySelector('input[type="submit"]');
  
//      submit.value = "SEND";

//      const item = document.querySelector('.list-group-item');
//      item.style.color = 'red';

//      const lastItem = document.querySelector('.list-group-item:last-Child');
//      lastItem.style.color = 'green';

//      const thirdItem = document.querySelector('.list-group-item:nth-Child(3)');
//      thirdItem.style.visibility  = 'hidden';

//      const secondItem = document.querySelector('.list-group-item:nth-Child(2)');
//      secondItem.style.color = 'blue';


//      //5.QuerySelectorALL 

//      const list = document.querySelectorAll('.list-group');
//      list[0].style.color = 'green';
       
//      const titles = document.querySelectorAll('.title');
//      console.log(titles);

//      titles[0].textContent = 'Dom (Document object model)';

//      const odd = document.querySelectorAll('li:nth-child(odd)');
//      const even = document.querySelectorAll('li:nth-child(even)');
     
//      for(let i=0;i<odd.length;i++){
//       odd[i].style.backgroundColor = 'green ';
//       even[i].style.backgroundColor = '#ccc';
//      }



//Traversing Dom

const itemList = document.querySelector('#items');
// ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'green';
// console.log(itemList.parentNode.parentNode.parentNode);

// ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.background = 'blue';
// console.log(itemList.parentElement.parentElement.parentElement);


// ChildNodes

// console.log(itemList.childNodes)


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


// FirstChild

// console.log(itemList.firstChild);

// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello chintu';  


//lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Slow Down';


//nextSinbling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);


// // previousSibling
// console.log(itemList.previousSibling);

// // prevoiusElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'tomato';


//createElement
const newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';

//Add Id
newDiv.id = 'hello1';

//Add attribute
newDiv.setAttribute('title' , 'hello Div');

//Create textNode

const newDivText = document.createTextNode('I love you');

// Add text to div
newDiv.appendChild(newDivText);

const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

 container.insertBefore(newDiv , h1);