module.exports = {
  ...{ resource: "loans", invalid: {}, patch: { returned: true } },
  body: async (url, cookie) => {
    return {
      bookId: (await (await fetch(url + "/api/catalog")).json())[0].id,
      returned: false,
    };
  },
};
