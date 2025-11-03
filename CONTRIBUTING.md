# Contributing to Local Library

First off, thank you for considering contributing to Local Library! 🎉 It's people like you that make this project better for everyone.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected to see
- **Include screenshots** if possible
- **Note your environment** (browser, OS, Node.js version, etc.)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful** to most users
- **List some examples** of how it would be used

### 🔧 Pull Requests

The process described here has several goals:

- Maintain the project's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible product
- Enable a sustainable system for maintainers to review contributions

Please follow these steps:

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Add tests** if you've added functionality
4. **Ensure the test suite passes**
5. **Update documentation** as necessary
6. **Commit your changes** with clear commit messages
7. **Push to your fork** and submit a pull request

## Development Setup

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)
- Git

### Installation

1. Clone your fork of the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Local-Library.git
   cd Local-Library
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Submitting Changes

### Branch Naming

Use descriptive branch names that reflect the changes:

- `feature/add-new-search` for new features
- `fix/correct-sorting-bug` for bug fixes
- `docs/update-readme` for documentation
- `refactor/improve-performance` for refactoring

### Commit Messages

Write clear, concise commit messages:

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line

Example:
```
Add book search functionality

- Implement search bar component
- Add filtering logic for book titles
- Update tests for search feature

Fixes #123
```

## Coding Standards

### JavaScript Style Guide

- Use **ES6+** features where appropriate
- Use **meaningful variable names** that describe their purpose
- Add **JSDoc comments** for functions
- Keep functions **small and focused** on a single task
- Use **const** by default, **let** when reassignment is needed
- Follow existing code formatting in the project

Example:
```javascript
/**
 * Calculates the total number of books in the library
 * @param {Array} books - Array of book objects
 * @returns {number} Total count of books
 */
function getTotalBooksCount(books) {
  return books.length;
}
```

### HTML/CSS Standards

- Use **semantic HTML5** elements
- Maintain **accessible** markup (ARIA labels where needed)
- Follow **Bootstrap conventions** when using Bootstrap components
- Keep CSS **organized** and **commented**

## Testing

- Write tests for new features and bug fixes
- Ensure all tests pass before submitting a pull request
- Aim for meaningful test coverage of critical functionality
- Use Mocha and Chai testing frameworks

Run tests with:
```bash
npm test
```

## Code Review Process

The maintainers look at Pull Requests on a regular basis. After feedback has been given, we expect responses within two weeks. After two weeks, we may close the PR if it isn't showing any activity.

### What We Look For

- **Code quality**: Clean, readable, and maintainable code
- **Tests**: Adequate test coverage
- **Documentation**: Updated README or inline comments if needed
- **Functionality**: Does it work as intended?
- **Breaking changes**: Are they necessary and well-documented?

## Recognition

Contributors who submit quality pull requests will be:
- Added to the contributors list in the README
- Credited in release notes
- Recognized in the project's acknowledgments

## Questions?

Feel free to open an issue with your question or reach out to the maintainers directly.

Thank you for contributing! 🙌

---

**Happy Coding!** 💻✨
