var _ = require("lodash");
var BookStore = function(storeName, storeLocation, storeBalance){
  this.storeName = storeName;
  this.storeLocation = storeLocation;
  this.storeBalance = storeBalance;
  this.inventory = [];
}

BookStore.prototype= {
  getStoreName: function(){
    return this.storeName;
  },

  getStoreLocation: function(){
    return this.storeLocation;
  },

  getStoreBalance: function(){
    return _.round(this.storeBalance, 2);
  },

  addStoreBalance: function(book){
    return this.storeBalance += book.price;
  },

  subtractStoreBalance: function(book){
    return this.storeBalance -= book.price;
  },

  getInventory: function(){
    return this.inventory.length;
  },

  getInventoryTotal: function(){
    return _.sumBy(this.inventory, 'price');
  },

  listInventory: function(){
    this.inventory.forEach(function(item){
      return item;  
    })
  },

  sellBook: function(book){
    _.remove(this.inventory, book);
    return this.storeBalance -= book.price;
  },

  addBook: function(book){
    return this.inventory.push(book);
  },

  findBookByGenre: function(genre){
    return _.filter(this.inventory, 'genre');
  }
}

module.exports = BookStore;


