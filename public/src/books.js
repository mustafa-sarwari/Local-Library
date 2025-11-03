/**
 * Finds and returns an author object by their ID
 * @param {Array<Object>} authors - Array of author objects
 * @param {number} id - The ID of the author to find
 * @returns {Object|undefined} The author object if found, undefined otherwise
 */
function findAuthorById(authors, id) {
  const authorsId = authors.find( (author)=> author.id === id);
  return authorsId;
}

/**
 * Finds and returns a book object by its ID
 * @param {Array<Object>} books - Array of book objects
 * @param {string} id - The ID of the book to find
 * @returns {Object|undefined} The book object if found, undefined otherwise
 */
function findBookById(books, id) {
  const books_Id = books.find((book)=> book.id === id);
  return books_Id;
}

/**
 * Partitions books into two arrays: currently borrowed books and returned books
 * @param {Array<Object>} books - Array of book objects with borrows property
 * @returns {Array<Array<Object>>} Two-dimensional array: [borrowedBooks, returnedBooks]
 */
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

/**
 * Returns a list of borrowers for a specific book with their account information
 * @param {Object} book - Book object with borrows property containing borrowing history
 * @param {Array<Object>} accounts - Array of account objects
 * @returns {Array<Object>} Array of account objects with returned status, limited to 10 most recent
 */
function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
