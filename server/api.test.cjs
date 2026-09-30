const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { buildServer, catalog } = require('./index.cjs');
test('validates and persists the implemented workflow', async () => {
 const server=buildServer({database:':memory:'});server.listen(0,'127.0.0.1');await once(server,'listening');
 const url=`http://127.0.0.1:${server.address().port}/api/loans`;
 const post=body=>fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
 try {
  assert.equal((await post({"bookId": "missing"})).status,400);
  const response=await post({bookId: catalog[0].id, returned:false});assert.equal(response.status,201);const created=await response.json();
  const cookie=response.headers.get('set-cookie').split(';')[0];
  const rows=await(await fetch(url,{headers:{Cookie:cookie}})).json();assert.equal(rows[0].id,created.id);
  assert.equal((await(await fetch(url)).json()).length,0);const updated=await fetch(url+'/'+created.id,{method:'PATCH',headers:{Cookie:cookie,'Content-Type':'application/json'},body:JSON.stringify({bookId:catalog[0].id,returned:true})});assert.equal((await updated.json()).returned,true);
 }finally{await new Promise(resolve=>server.close(resolve));}
});
