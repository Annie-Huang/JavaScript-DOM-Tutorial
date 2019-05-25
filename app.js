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


console.log(document);
























