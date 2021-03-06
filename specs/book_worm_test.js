var assert = require('assert');
var Book = require('../book.js');
var BookStore = require('../bookstore.js');
var BookWorm = require('../bookworm.js');

describe('BookWorm', function(){

  book1 = new Book("John Steinbeck", "The Grapes of Wrath", "Historical Fiction", 7.99, 632);
  book2 = new Book("F.Scott Fitzgerald", "The Great Gatsby", "Romance", 8.99, 569);
  book3 = new Book("George Orwell", "Nineteen Eighty-Four", "Science Fiction", 9.99, 845)
  var bookWorm;

beforeEach(function(){
  bookWorm = new BookWorm("Jia", 30);
  bookWorm2 = new BookWorm("Rocky", 45);
});

it('book worm should have 30 pounds', function(){
  assert.strictEqual(bookWorm.bookWormTotalMoney(), 30);
})

it('Buying book decreases book worms cash', function(){
  assert.strictEqual(bookWorm.buyBook(book1), 22.01);
})

it('Selling book increases book worms cash', function(){
  bookWorm.buyBook(book1);
  assert.strictEqual(bookWorm.sellBook(book1), 30);
})

it('The BookWorm shouldnt be able to buy a Book if they cant afford it.', function(){
  bookWorm = new BookWorm("Jia", 5);
  assert.strictEqual(bookWorm.cantAffordBook(book1), "Sorry, you don't have enough money to buy this book");
})

it('The BookWorm should be able to view the total value of their collection', function(){
  bookWorm.buyBook(book1);
  bookWorm.buyBook(book2);
  bookWorm.buyBook(book3);
  assert.strictEqual(bookWorm.totalValueOfBookCollection(), 26.97);
})

it('The BookWorm should be able to view the total value of all books of a given Genre', function(){
  bookWorm.buyBook(book2);
  bookWorm.buyBook(book2);
  bookWorm.buyBook(book3);
  assert.strictEqual(bookWorm.totalByGenre('Romance'), 17.98);
})

it('The BookWorm should be able to view their longest book.', function(){
  bookWorm.buyBook(book1);
  bookWorm.buyBook(book2);
  bookWorm.buyBook(book3);
  assert.strictEqual(bookWorm.findBiggestBook(), book3);
})

it('The BookWorm should be able to sort their books by value. (ascending or descending)', function(){
  bookWorm.buyBook(book3);
  bookWorm.buyBook(book2);
  bookWorm.buyBook(book1);
  assert.deepEqual(bookWorm.sortBooksByPriceAscending(), [book1, book2, book3]);
})

it('The BookWorm should be able to compare the value of their collection with another BookWorm', function(){
  bookWorm.buyBook(book1);
  bookWorm2.buyBook(book3);
  assert.strictEqual(bookWorm.compareValueOfCollection(bookWorm2
    ), "Rockys book collection holds the highest value!");
})

})