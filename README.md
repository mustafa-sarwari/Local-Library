# Local Library Project 📚

This is a web-based simulation of a local library system. The goal of the project is to provide a frontend interface for managing books, authors, and user accounts using static data (JSON format).

It includes interactive features such as listing borrowed books, filtering, sorting, and user-specific views — all built using vanilla JavaScript and HTML.

---

## 📁 Project Structure

```plaintext
Local-Library/
├── data/
│   ├── accounts.js      # Contains user account data
│   ├── authors.js       # Contains author data
│   └── books.js         # Contains book data
├── renderers/
│   └── home.js          # Logic for rendering the homepage content
├── src/
│   └── home.js          # Core homepage logic (event handlers, etc.)
├── setup.js             # App setup, including initial render
├── index.html           # Main HTML entry point
└── README.md            # This file
