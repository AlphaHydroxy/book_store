var assert = require('assert');
var Book = require('../book.js');
var BookStore = require('../bookstore.js');
var BookWorm = require('../bookworm.js');
var AngryBookWorm = require('../angry_book_worm.js')

describe('BookWorm', function(){

  book1 = new Book("John Steinbeck", "The Grapes of Wrath", "Historical Fiction", 7.99, 632);
  book2 = new Book("F.Scott Fitzgerald", "The Great Gatsby", "Romance", 8.99, 569);
  book3 = new Book("George Orwell", "Nineteen Eighty-Four", "Science Fiction", 9.99, 845)
  var angryBookWorm;

beforeEach(function(){
  angryBookWorm = new AngryBookWorm("Rager");
  bookWorm = new BookWorm("Jia", 30);
  bookWorm2 = new BookWorm("Rocky", 45);
});

it('', function(){
  
})

})