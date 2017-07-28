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

  getInventory: function(){
    return this.inventory.length;
  },

  addBook: function(book){
    return this.inventory.push(book);
  }
}

module.exports = BookStore;