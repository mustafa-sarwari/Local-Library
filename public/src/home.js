/**
 * Calculates the total number of books in the library
 * @param {Array<Object>} books - Array of book objects
 * @returns {number} Total count of books
 */
function getTotalBooksCount(books) {
  let sum = 0;
  for(let i = 0; i < books.length; i++){
    sum++
  }
  return sum; 
}

/**
 * Calculates the total number of registered accounts
 * @param {Array<Object>} accounts - Array of account objects
 * @returns {number} Total count of accounts
 */
function getTotalAccountsCount(accounts) {
  let sum = 0;
  for(let i = 0; i < accounts.length; i++){
    sum++
  }
  return sum;
}

/**
 * Calculates the number of books currently borrowed (not returned)
 * @param {Array<Object>} books - Array of book objects with borrows property
 * @returns {number} Count of books currently borrowed
 */
function getBooksBorrowedCount(books) {
  return books.filter((book)=> book.borrows[0].returned === false).length;
}

/**
 * Helper function that sorts an object by its values in descending order
 * @private
 * @param {Object} obj - Object with numeric values
 * @returns {Array<string>} Array of keys sorted by their values (highest to lowest)
 */
function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}

/**
 * Returns the top 5 most common book genres
 * @param {Array<Object>} books - Array of book objects with genre property
 * @returns {Array<Object>} Array of objects with name and count properties, limited to top 5
 */
function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }

    return acc;
  }, {});

  const sorted = _sortObjectByValues(count);
  return sorted.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

/**
 * Returns the top 5 most popular books based on borrow count
 * @param {Array<Object>} books - Array of book objects with id, title, and borrows properties
 * @returns {Array<Object>} Array of objects with name (title) and count properties, limited to top 5
 */
function getMostPopularBooks(books) {
  const groupById = books.reduce((acc, { id, borrows }) => {
    acc[id] = borrows.length;
    return acc;
  }, {});

  const sorted = _sortObjectByValues(groupById);
  return sorted
    .map((id) => {
      const { title: name } = books.find(({ id: bookId }) => bookId === id);
      return { name, count: groupById[id] };
    })
    .slice(0, 5);
}

/**
 * Returns the top 5 most popular authors based on total borrows of their books
 * @param {Array<Object>} books - Array of book objects with authorId and borrows properties
 * @param {Array<Object>} authors - Array of author objects with id and name properties
 * @returns {Array<Object>} Array of objects with author name and total borrow count, limited to top 5
 */
function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, { authorId, borrows }) => {
    if (acc[authorId]) {
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }

    return acc;
  }, {});

  for (let id in count) {
    const sum = count[id].reduce((a, b) => a + b);
    count[id] = sum;
  }

  const sorted = _sortObjectByValues(count);
  return sorted
    .map((authorId) => {
      const {
        name: { first, last },
      } = authors.find(({ id }) => id === Number(authorId));
      const name = `${first} ${last}`;
      return { name, count: count[authorId] };
    })
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
