var Book = function(author, title, genre, price){
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Book.prototype= {
  getAuthor: function(author){
    return this.author;
  },

  getTitle: function(){
    return this.title;
  },

  getGenre: function(genre){
    return this.genre;
  },

  getPrice: function(){
    return this.price;
  }
}

module.exports = Book;