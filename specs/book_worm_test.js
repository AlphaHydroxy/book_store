var assert = require('assert');
var Book = require('../book.js');
var BookStore = require('../bookstore.js');
var BookWorm = require('../bookworm.js');

describe('BookWorm', function(){

  var bookWorm;

beforeEach(function(){
  book1 = new Book("John Steinbeck", "The Grapes of Wrath", "Historical Fiction", 7.99);
  book2 = new Book("F.Scott Fitzgerald", "The Great Gatsby", "Romance", 8.99);
  book3 = new Book("George Orwell", "Nineteen Eighty-Four", "Science Fiction", 9.99)
});

xit('Buy book decreases book worms cash', function(){

})

xit('Sell book increases book worms cash', function(){

})

xit('The BookWorm shouldnt be able to buy a Book if they cant afford it.', function(){

})

xit('The BookWorm should be able to view the total value of their collection', function(){

})

xit('The BookWorm should be able to view the total value of all books of a given Genre', function(){

})

xit('The BookWorm should be able to view their longest book.', function(){

})

xit('The BookWorm should be able to sort their books by value. (ascending or descending)', function(){

})

xit('The BookWorm should be able to compare the value of their collection with another BookWorm', function(){

})


xit('', function(){

})

xit('', function(){

})

})