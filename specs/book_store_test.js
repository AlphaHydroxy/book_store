var assert = require('assert');
var BookStore = require('../bookstore.js');
var Book = require('../book.js');
// npm init | npm install --save -dev mocha | npm install --save lodash
describe('BookStore', function(){
  book1 = new Book("John Steinbeck", "The Grapes of Wrath", "Historical Fiction", 7.99);
  book2 = new Book("F.Scott Fitzgerald", "The Great Gatsby", "Romance", 8.99);
  book3 = new Book("George Orwell", "Nineteen Eighty-Four", "Science Fiction", 9.99);
  var bookStore;

beforeEach(function(){
  bookStore = new BookStore("Best Book Shop", "Glasgow", 200);
})

it('Name of book store', function(){
  assert.strictEqual(bookStore.getStoreName(), "Best Book Shop");
})

it('location of book store', function(){
  assert.strictEqual(bookStore.getStoreLocation(), "Glasgow");
})

it('book stores balance', function(){
  assert.strictEqual(bookStore.getStoreBalance(), 200);
})

it('Inventory is empty', function(){
  assert.strictEqual(bookStore.getInventory(), 0);
})

it('Inventory has a book', function(){
  bookStore.addBook("book");
  assert.strictEqual(bookStore.getInventory(), 1);
})

it('add to store balance', function(){
  bookStore.addStoreBalance(9.99);
  assert.strictEqual(bookStore.getStoreBalance(), 209.99);
})

it('subtract from store balance', function(){
  bookStore.subtractStoreBalance(3.99);
  assert.strictEqual(bookStore.getStoreBalance(), 196.01);
})

it('should be able to return value of inventory', function(){
  bookStore.addBook(book1);
  bookStore.addBook(book2);
  bookStore.addBook(book3);
  assert.strictEqual(bookStore.getInventoryTotal(), 26.97);
})

it('sell book and update store balance', function(){
  bookStore.addBook(book1);
  assert.strictEqual(bookStore.sellBook(book1), 192.01);
})

})