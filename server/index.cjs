const path = require('node:path');
const fs = require('node:fs');
const vm = require('node:vm');
const { createApp, HttpError } = require('./http.cjs');
// Read the course fixture as data without modifying the browser globals.
const catalog = vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../public/data/books.js'),'utf8') + '; books;', Object.create(null), { timeout: 1000 }).map(({id,title,genre}) => ({id,title,genre}));
function buildServer({database = path.join(__dirname,'../.data/demo.sqlite')} = {}) {
  return createApp({root:path.join(__dirname,'../public'),database, resources:{
    loans:{validate(body){
      const book = catalog.find(book => book.id === body.bookId);
      if (!book) throw new HttpError(400,'Choose a book from the catalog.');
      return {bookId:book.id,title:book.title,returned:body.returned === true};
    }}
  }, extraRoute: async (req,res,url,{send}) => {
    if (url.pathname !== '/api/catalog') return false;
    if (req.method !== 'GET') throw new HttpError(405,'Method not allowed.');
    const query=(url.searchParams.get('q')||'').toLowerCase();
    send(res,200,catalog.filter(book=>`${book.title} ${book.genre}`.toLowerCase().includes(query)));return true;
  }});
}
if (require.main === module) buildServer().listen(Number(process.env.PORT||4000),'127.0.0.1',()=>console.log('Local Library: http://localhost:4000'));
module.exports={buildServer,catalog};
