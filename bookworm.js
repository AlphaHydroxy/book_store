var _ = require("lodash");
var BookWorm = function(money){
  this.money = money;
  this.bookCollection = [];
}

BookWorm.prototype = {

  bookWormTotalMoney: function(){
    return this.money;
  },

  buyBook: function(book){
    this.bookCollection.push(book);
    return _.round(this.money -= book.price, 2);
  },

  sellBook: function(book){
    _.remove(this.bookCollection, book);
    return _.round(this.money += book.price, 2);
  },

  cantAffordBook: function(book){
    if(this.money < book.price){
      return "Sorry, you don't have enough money to buy this book";
    } else {
      return "Thank you for buying this book, come again!";
    }
  },

  totalValueOfBookCollection: function(){
    return _.sumBy(this.bookCollection, 'price');
  },

  totalByGenre: function(genre){
    var total = 0;
    this.bookCollection.forEach(function(book){
      if (book.genre === genre){
        total += book.price;
      }
    })
    return total;
  },

  findBiggestBook: function(){
    return _.maxBy(this.bookCollection, 'pages');
  },

  sortBooksByPriceAscending: function(){
    return _.sortBy(this.bookCollection, ['price']);
  },

  compareValueOfCollection: function(){
    this.bookCollection
  }
}

module.exports = BookWorm;