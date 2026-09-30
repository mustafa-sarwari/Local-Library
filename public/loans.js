let catalog = [], loans = [], busy = false;
const status = document.querySelector('#status');
async function request(resource,options={}){
  const response=await fetch('/api/'+resource,{...options,headers:{'Content-Type':'application/json'}});
  const body=await response.json();if(!response.ok)throw new Error(body.error||'Request failed.');return body;
}
function render(){
  const query=document.querySelector('#search').value.toLowerCase();
  const list=document.querySelector('#catalog');list.replaceChildren();
  for(const book of catalog.filter(book=>`${book.title} ${book.genre}`.toLowerCase().includes(query))){
    const li=document.createElement('li'),label=document.createElement('span'),button=document.createElement('button');label.textContent=`${book.title} (${book.genre})`;
    const borrowed=loans.some(loan=>loan.bookId===book.id&&!loan.returned);button.textContent=borrowed?'Borrowed':'Borrow';button.disabled=borrowed||busy;
    button.addEventListener('click',()=>mutate(async()=>{const row=await request('loans',{method:'POST',body:JSON.stringify({bookId:book.id})});loans.unshift(row);}));li.append(label,button);list.append(li);
  }
  const history=document.querySelector('#loans');history.replaceChildren();
  for(const loan of loans){const li=document.createElement('li'),label=document.createElement('span');label.textContent=`${loan.title} — ${loan.returned?'Returned':'Borrowed'}`;li.append(label);
    if(!loan.returned){const button=document.createElement('button');button.textContent='Return';button.disabled=busy;button.addEventListener('click',()=>mutate(async()=>{const row=await request('loans/'+loan.id,{method:'PATCH',body:JSON.stringify({returned:true})});loans=loans.map(loan=>loan.id===row.id?row:loan);}));li.append(button);}history.append(li);
  }
  if(!loans.length){const li=document.createElement('li');li.textContent='No loans yet.';history.append(li);}
}
async function mutate(action){if(busy)return;busy=true;render();try{await action();status.textContent='Saved.';}catch(error){status.textContent=error.message;}finally{busy=false;render();}}
document.querySelector('#search').addEventListener('input',render);
(async()=>{try{catalog=await request('catalog');loans=await request('loans');status.textContent='Connected.';render();}catch(error){status.textContent=error.message;}})();
