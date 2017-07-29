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
    return this.storeBalance;
  },

  addStoreBalance: function(book){
    return this.storeBalance += book;
  },

  subtractStoreBalance: function(book){
    return this.storeBalance -= book;
  },

  getInventory: function(){
    return this.inventory.length;
  },

  getInventoryTotal: function(){
    return _.sumBy(this.inventory, 'price');
  },

  sellBook: function(book){
    _.remove(this.inventory, book);
    return this.storeBalance -= book.price;
  },

  addBook: function(book){
    return this.inventory.push(book);
  }
}

module.exports = BookStore;