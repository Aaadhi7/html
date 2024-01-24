$(document).ready(function() {
    // Load books on page load
    loadBooks();
  
    // Form submission
    $('#bookForm').submit(function(e) {
      e.preventDefault();
      
      const title = $('#title').val();
      const author = $('#author').val();
      const genre = $('#genre').val();
  
      // Add book
      $.post('/books', { title, author, genre }, function(data) {
        loadBooks();
        $('#bookForm')[0].reset();
      });
    });
  
    // Delete book
    $('ul').on('click', 'button.delete', function() {
      const id = $(this).closest('li').data('id');
  
      // Delete book
      $.ajax({
        url: `/books/${id}`,
        type: 'DELETE',
        success: function() {
          loadBooks();
        }
      });
    });
  
    // Load books
    function loadBooks() {
      // Get books
      $.get('/books', function(books) {
        const bookList = $('#bookList');
        bookList.empty();
  
        // Display books
        books.forEach(function(book) {
          const li = $('<li>').data('id', book._id);
          li.append(`<strong>${book.title}</strong> by ${book.author} (${book.genre})`);
          li.append(`<button class="delete">Delete</button>`);
          bookList.append(li);
        });
      });
    }
  });
  