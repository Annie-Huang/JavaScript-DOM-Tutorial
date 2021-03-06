// This allows you to place the app.js anywhere, put it at the bottom of the body or put it in the head.
document.addEventListener('DOMContentLoaded', function () {
    


// // #2 - Get Element By ID
// console.log(document.getElementById('page-banner'));
// var banner = document.getElementById('page-banner');
// console.log(banner);
//
// var bookList = document.getElementById('book-list');
// console.log(bookList);

// // #3 - Get Elements By Class or Tag
// var titles = document.getElementsByClassName('title');
// console.log(titles); // Returns a HTMLCollection
// console.log(titles[0]);
// console.log(titles[1]);
//
// var lis = document.getElementsByTagName('li')
// console.log(lis);
// console.log(lis[0]);
// console.log(lis[2]);
//
// for(i=0; i<titles.length; i++) {
//     console.log(titles[i])
// }
//
// // This is give a false error as HTMLCollection is not an array.
// // titles.forEach(function(item){
// //    console.log(item);
// // });
//
// // Method to check if this is an array.
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles))); // Turns HTMLCollection to array.
// Array.from(titles).forEach(function(item){
//    console.log(item);
// });

// // #4 - The Query Selector
//
// // // jQuery way:
// // $('#wrapper');
// // vanilla javascript:
// const wrap = document.querySelector('#wrapper');
// console.log(wrap);
//
// // I am surprise it can get to li without getting to the ui first
// const wiseMansFear = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wiseMansFear);
//
// // querySelector only give you one item for return
// var book = document.querySelector('#book-list li .name');
// console.log(book);
//
// var books = document.querySelectorAll('#book-list li .name'); // Return a NodeList
// console.log(books);
// // Array.from(books).forEach(function (book) {
// //     console.log(book);
// // });
// // Unlike HTMLCollection, the Nodelist doesn't need to turn into a array to look though
// books.forEach(function (book) {
//     console.log(book);
// });
//
// // Even though it only got one, it will still put it inside a NodeList.
// var wrapper = document.querySelectorAll('#wrapper');
// console.log(wrapper);

// // #5 - Changing Text & HTML Content
// var books = document.querySelectorAll('#book-list li .name');
// books.forEach(function (book) {
//     console.log(book.textContent);
//     // book.textContent = 'text';
//     book.textContent += ' (booktitle)';
// });
//
// const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);
// // bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';

// // #6 - Nodes
// const banner = document.querySelector('#page-banner');
// // https://www.w3schools.com/jsref/prop_node_nodetype.asp
// console.log('#page-banner node type is:', banner.nodeType); // return 1, which is Element
// console.log('#page-banner node name is:', banner.nodeName); // return div
// console.log('#page-banner has child nodes is:', banner.hasChildNodes()); // return div
//
// const clonedBanner = banner.cloneNode(false);
// // const clonedBanner = banner.cloneNode(true); // true means clone its children as well.
// console.log(clonedBanner);


// // #7 - Traversing the DOM (part 1)
// const bookList = document.querySelector('#book-list');
//
// // by 99%, the followings are going to return the same thing.
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is:', bookList.parentElement);
// console.log('the parent element is:', bookList.parentElement.parentElement);
//
// // Will return [text, h2.title, text, ul, text] and the text is newline character, so no useful.
// // That is why we don't really want to grab these, that is why we use children than childNode
// console.log(bookList.childNodes);
// console.log(bookList.children); // returns [h2.title, ul]

// // #8 - Traversing the DOM (part 2)
// const bookList = document.querySelector('#book-list');
//
// console.log('book-list next sibling is:', bookList.nextSibling);   // return line break character again.
// console.log('book-list next element sibling is:', bookList.nextElementSibling);
// console.log('book-list previous sibling is:', bookList.previousSibling);
// console.log('book-list previous element sibling is:', bookList.previousElementSibling);
//
// bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else!';

// // #9 - Events
//
// // var h2 = document.querySelector('#book-list h2');
// // console.log(h2);
// // // https://www.w3schools.com/jsref/dom_obj_event.asp
// // h2.addEventListener('click', function (e) {
// //     console.log(e.target);  // log the element
// //     // log MouseEvent, it got clientX, clientY (X,Y position on the click), shiftKey (whether you press shift key when you make the click)
// //     // many interesting things, take a look
// //     console.log(e);
// // });
//
// var btns = document.querySelectorAll('#book-list .delete');
// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li);
//     })
// });
//
// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('navigation to', e.target.textContent, 'was prevented');
// });


// // #10 - Event Bubbling
// // E.g. when you click the first delete, it is originated in part 1. But it will bubble up.
// //      So if li (Part 2) has an eventlistener, it will be fired as well.
// // <li>     <-- Part 2
// //      <span class="name">Name of the Wind</span>
// //      <span class="delete">delete</span>      <-- Part 1.
// // </li>
//
// // delete books
// // It's expensive to attach a eventlistener to every child, e.g. on li within a ul. The general practise is to add it to the parent.
// // When the event is fired, find out which child triggers it and delete taht child.
// const list = document.querySelector('#book-list ul');
// list.addEventListener('click', function (e) {
//     if(e.target.className == 'delete') {
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// });


// // #11 - Interacting with Forms
// console.log(document.forms);
// console.log(document.forms['add-book']);
//
// // Button type: (https://www.w3schools.com/jsref/prop_pushbutton_type.asp)
// // submit	The button is a submit button (this is default for all browsers, except Internet Explorer)
// // button	The button is a clickable button (this is default for Internet Explorer)
// // reset	The button is a reset button (clears form data)
//
// // form will refresh your page if you don't have an action to fire, that is why when you delete some book,
// // and click add, it will refresh teh page. And you don't want this to happened so prevent default.
//
// // delete books
// const list = document.querySelector('#book-list ul');
// list.addEventListener('click', function (e) {
//     if(e.target.className == 'delete') {
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// });
//
// // add book-list
// const addForm = document.forms['add-book'];
// addForm.addEventListener('submit', function (e) {
//     // prevent submissiion and then refresh the page
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     console.log(value);
// });

// // #12 - Creating Elements
// delete books
// const list = document.querySelector('#book-list ul');
// list.addEventListener('click', function (e) {
//     if(e.target.className == 'delete') {
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// });
// // add book-list
// const addForm = document.forms['add-book'];
// addForm.addEventListener('submit', function (e) {
//     // prevent submissiion and then refresh the page
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     // console.log(value);
//
//     // create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');
//
//     // add content
//     deleteBtn.textContent='delete';
//     bookName.textContent=value;
//
//     // append to document
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
//
// });

// // #13 - Styles & Classes
// var li = document.querySelector('li:last-child');
// li.style.color='red';
// li.style.marginTop='60px'; // margin-top
// li.className = 'test';
// li.className += ' test2';
//
// console.log(li);
// console.log(li.className);
//
// // delete books
// const list = document.querySelector('#book-list ul');
// list.addEventListener('click', function (e) {
//     if(e.target.className == 'delete') {
//         const li = e.target.parentElement;
//         list.removeChild(li);
//     }
// });
// // add book-list
// const addForm = document.forms['add-book'];
// addForm.addEventListener('submit', function (e) {
//     // prevent submissiion and then refresh the page
//     e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value;
//     // console.log(value);
//
//     // create elements
//     const li = document.createElement('li');
//     const bookName = document.createElement('span');
//     const deleteBtn = document.createElement('span');
//
//     // add content
//     deleteBtn.textContent='delete';
//     bookName.textContent=value;
//
//     // add classes
//     bookName.classList.add('name');
//     deleteBtn.classList.add('delete');
//
//     // append to document
//     li.appendChild(bookName);
//     li.appendChild(deleteBtn);
//     list.appendChild(li);
//
// });

// // #14 -Atributes
// var book = document.querySelector('li:first-child .name');
// console.log(book);
// console.log(book.getAttribute('class'));
// console.log(book.getAttribute('href'));
// console.log(book.setAttribute('class', 'name-2'));
// console.log(book);
// console.log(book.hasAttribute('class'));
// console.log(book.removeAttribute('class'));
// console.log(book);

// // #15 - Checkboxes & Change Events
// // change event occurs when a form element changes, e.g. when we select a checkbox
//
// const list = document.querySelector('#book-list ul');
//
// // hide books
// const hideBox = document.querySelector('#hide');
// console.log(hideBox);
// hideBox.addEventListener('change', function (e) {   // change value in the checkbox
//     if(hideBox.checked) {
//         list.style.display = 'none';
//     } else {
//         list.style.display = 'initial';
//     }
// });

// // #16 - Custom Search Filter
// // search usually links to key up event
//
// const list = document.querySelector('#book-list ul');
//
// // filter books
// const searchBar = document.forms['search-books'].querySelector('input[type="text"]');
// // console.log(searchBar);
// searchBar.addEventListener('keyup', function (e) {
//     const term = e.target.value.toLowerCase();
//     // console.log(term);
//     const books = list.getElementsByTagName('li');
//     Array.from(books).forEach(function (book) {
//         const title = book.firstElementChild.textContent;
//         if(title.toLowerCase().indexOf(term) != -1) {
//             book.style.display = 'block';
//         } else {
//             book.style.display = 'none';
//         }
//     })
// });

// #17 - Tabbed Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function (e) {
    console.log(e.target.tagName); // Don't know why it is not 'li'...

    if(e.target.tagName == 'LI') {
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
        // The dataset property on the HTMLElement interface provides read/write access to
        // all the custom data attributes (data-*) set on the element.
        const targetPanel = document.querySelector(e.target.dataset.target);    // dataset.target refer to data-target
        console.log(e.target.dataset.target);
        console.log(targetPanel);

        panels.forEach(function (panel) {
            if(panel === targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
});

// #18 - DOMContentLoaded Event
// Need to have document.addEventListener('DOMContentLoaded' function(){})
// wrapped on everything if the app.js is on the top in the header because the DOM is loaded.


});


console.log(document);
























