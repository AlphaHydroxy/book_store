var assert = require('assert');
var BookStore = require('../bookstore.js');
// npm init | npm install --save -dev mocha | npm install --save lodash
describe('BookStore', function(){

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

})