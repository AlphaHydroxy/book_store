var assert = require('assert');
var Book = require('../book.js');
// npm init --save -dev mocha
describe('Book', function(){
  
  var book;

beforeEach(function(){
  book = new Book("Jacqueline Wilson", "Double Act", "something", 3.99);
})

it('get Author', function(){
  assert.strictEqual(book.getAuthor(), "Jacqueline Wilson");
})

it('get Title', function(){
  assert.strictEqual(book.getTitle(), "Double Act");
})

it('get Genre', function(){
  assert.strictEqual(book.getGenre(), "something");
})

it('get Price', function(){
  assert.strictEqual(book.getPrice(), 3.99);
})

})