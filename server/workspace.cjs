const d = require("./domain.cjs");
const { text, HttpError } = require("./http.cjs");
module.exports = {
  title: "Library borrowing",
  resources: {
    loans: {
      label: "Borrowing history",
      fields: [
        d.field("bookId", "Book", "text", {
          source: "catalog",
          labelField: "title",
        }),
        d.field("returned", "Returned", "boolean", {
          options: ["false", "true"],
        }),
      ],
    },
  },
};
