var assert = require('assert');
var Book = require('../book.js');
// npm init --save -dev mocha
describe('Book', function(){

  var book;

beforeEach(function(){
  book1 = new Book("John Steinbeck", "The Grapes of Wrath", "Historical Fiction", 7.99);
  book2 = new Book("F.Scott Fitzgerald", "The Great Gatsby", "Romance", 8.99);
  book3 = new Book("George Orwell", "Nineteen Eighty-Four", "Science Fiction", 9.99)
});

it('get Author', function(){
  assert.strictEqual(book1.getAuthor(), "John Steinbeck");
})

it('get Title', function(){
  assert.strictEqual(book2.getTitle(), "The Great Gatsby");
})

it('get Genre', function(){
  assert.strictEqual(book3.getGenre(), "Science Fiction");
})

it('get Price', function(){
  assert.strictEqual(book3.getPrice(), 9.99);
})

it('get book details', function(){
  assert.strictEqual(book2.getBookDetails(), "F.Scott Fitzgerald, The Great Gatsby, Romance, 8.99");
})

})