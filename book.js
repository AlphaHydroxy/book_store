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
  },

  getBookDetails: function(){
    return this.author + ", " + this.title + ", " + this.genre + ", " + this.price;
  },

  listBookDetails: function(book){
    return _.join(book, ', ');
  }
}

module.exports = Book;