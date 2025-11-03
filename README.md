# 📚 Local Library Admin Dashboard

> A modern web-based library management system built with vanilla JavaScript, HTML5, and Bootstrap. This admin dashboard provides comprehensive statistics and insights for library operations, including book inventory, borrowing trends, and user analytics.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://mustafa-sarwari.github.io/Local-Library/public)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/mustafa-sarwari/Local-Library?style=for-the-badge)](https://github.com/mustafa-sarwari/Local-Library/stargazers)

## 🔗 Live Demo

**[View Live Application →](https://mustafa-sarwari.github.io/Local-Library/public)**

Experience the library admin dashboard in action! Browse through books, view account statistics, and explore various library metrics.

## ✨ Features

- **📊 Overall Statistics Dashboard**
  - Total book count across the library
  - Currently borrowed books tracking
  - Active user accounts monitoring
  
- **📖 Book Management**
  - Detailed book information with author profiles
  - Borrowing history for each book
  - Most popular books ranking
  
- **👥 Account Management**
  - User account details and statistics
  - Borrowing history per account
  - Account sorting and search functionality

- **📈 Analytics & Insights**
  - Most common genres visualization
  - Popular books and authors rankings
  - Borrowing trends and patterns

- **🎨 User Interface**
  - Responsive Bootstrap design
  - Clean, intuitive navigation
  - Mobile-friendly layout

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling and layouts
- **Vanilla JavaScript** - Core functionality and DOM manipulation
- **Bootstrap 4.5** - Responsive UI framework
- **Mocha & Chai** - Testing framework

## 📂 Project Structure

```
Local-Library/
├── public/
│   ├── data/
│   │   ├── accounts.js      # User account data
│   │   ├── authors.js       # Author information
│   │   └── books.js         # Book catalog data
│   ├── renderers/
│   │   ├── home.js          # Homepage rendering logic
│   │   ├── books.js         # Books page rendering
│   │   └── accounts.js      # Accounts page rendering
│   ├── src/
│   │   ├── home.js          # Core dashboard logic
│   │   ├── books.js         # Book management functions
│   │   └── accounts.js      # Account management functions
│   ├── index.html           # Main dashboard page
│   ├── books.html           # Books statistics page
│   ├── accounts.html        # Accounts statistics page
│   └── setup.js             # Application initialization
├── test/                    # Test files
├── docs/                    # Documentation
├── package.json             # Project configuration
└── README.md                # This file
```

## 🚀 Installation

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mustafa-sarwari/Local-Library.git
   cd Local-Library
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:8080` (or the port shown in your terminal)

## 💻 Usage

### Running Locally

```bash
# Start the live server
npm start

# Run tests
npm test

# Run in Docker (optional)
npm run docker:build
npm run docker:run
```

### Navigating the Dashboard

1. **Overall Stats** - View general library statistics on the homepage
2. **Stats by Book** - Click to see detailed book-specific metrics
3. **Stats by Account** - Access user account information and borrowing history

### Key Functions

The application provides several utility functions for data analysis:

- `getTotalBooksCount()` - Returns total number of books
- `getBooksBorrowedCount()` - Shows currently borrowed books
- `getMostCommonGenres()` - Identifies popular book genres
- `getMostPopularBooks()` - Ranks books by borrowing frequency
- `getMostPopularAuthors()` - Lists top authors by popularity

## 🧪 Testing

This project includes comprehensive test coverage using Mocha and Chai.

```bash
# Run all tests
npm test

# Run tests in Docker
npm run docker:test
```

All 21 tests should pass, covering:
- Account management functions
- Book catalog operations
- Statistical calculations
- Data sorting and filtering

## 📸 Screenshots

### Dashboard View
The main dashboard displays overall library statistics, most common genres, popular books, and top authors.

### Books Statistics
Detailed view of individual book borrowing history and related information.

### Account Management
User account details with complete borrowing history and status tracking.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate. See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Mustafa Sarwari**

- GitHub: [@mustafa-sarwari](https://github.com/mustafa-sarwari)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- Bootstrap team for the excellent UI framework
- Thinkful for the project foundation and learning resources
- The open-source community for inspiration and support

## 📞 Support

If you have any questions or need help, please open an issue in the [GitHub repository](https://github.com/mustafa-sarwari/Local-Library/issues).

---

⭐ **Star this repository** if you find it helpful!
