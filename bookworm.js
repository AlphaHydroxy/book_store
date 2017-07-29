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

  totalByGenre: function(){
    var totalPriceGenre = _.filter(this.bookCollection,)
  },

}

module.exports = BookWorm;