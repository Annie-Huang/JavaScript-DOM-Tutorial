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
// Array.from(books).forEach(function (book) {
//     console.log(book);
// });
//
// // Even though it only got one, it will still put it inside a NodeList.
// var wrapper = document.querySelectorAll('#wrapper');
// console.log(wrapper);

console.log(document);
























