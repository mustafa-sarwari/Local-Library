/**
 * Finds and returns an account object by its ID
 * @param {Array<Object>} accounts - Array of account objects
 * @param {string} id - The ID of the account to find
 * @returns {Object|undefined} The account object if found, undefined otherwise
 */
function findAccountById(accounts, id) {
  let accountId = accounts.find( (account) => account.id === id);
    return accountId;
}
/**
 * Sorts accounts alphabetically by last name
 * @param {Array<Object>} accounts - Array of account objects with name.last property
 * @returns {Array<Object>} Sorted array of accounts by last name
 */
function sortAccountsByLastName(accounts) {
    const accountSorted = accounts.sort((a, b)=> a.name.last.localeCompare(b.name.last));
    return accountSorted;
}

/**
 * Returns an array of full names for all accounts
 * @param {Array<Object>} accounts - Array of account objects with name.first and name.last properties
 * @returns {Array<string>} Array of full names in "FirstName LastName" format
 */
function getAccountFullNames(accounts) {
  const accounts_Full_Name = accounts.map((account)=> `${account.name.first} ${account.name.last}`);
  return accounts_Full_Name
}

/**
 * Calculates the total number of times an account has borrowed books
 * @param {Object} account - Account object with id property
 * @param {Array<Object>} books - Array of book objects with borrows property
 * @returns {number} Total number of borrows for the account
 */
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

/**
 * Returns all books currently possessed (not returned) by an account with author information embedded
 * @param {Object} account - Account object with id property
 * @param {Array<Object>} books - Array of book objects with borrows and authorId properties
 * @param {Array<Object>} authors - Array of author objects
 * @returns {Array<Object>} Array of books currently borrowed by the account with author details
 */
function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
