// // #2 - Get Element By ID
// console.log(document.getElementById('page-banner'));
// var banner = document.getElementById('page-banner');
// console.log(banner);
//
// var bookList = document.getElementById('book-list');
// console.log(bookList);

// #3 - Get Elements By Class or Tag
var titles = document.getElementsByClassName('title');
console.log(titles); // Returns a HTMLCollection
console.log(titles[0]);
console.log(titles[1]);

var lis = document.getElementsByTagName('li')
console.log(lis);
console.log(lis[0]);
console.log(lis[2]);

for(i=0; i<titles.length; i++) {
    console.log(titles[i])
}

// This is give a false error as HTMLCollection is not an array.
// titles.forEach(function(item){
//    console.log(item);
// });

// Method to check if this is an array.
console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles))); // Turns HTMLCollection to array.
Array.from(titles).forEach(function(item){
   console.log(item);
});


console.log(document);
























