
function addToCart(name,price){
 let cart=JSON.parse(localStorage.getItem('cart')||'[]');
 cart.push({name,price});
 localStorage.setItem('cart',JSON.stringify(cart));
 alert(name+' added to cart');
}
function renderCart(){
 const el=document.getElementById('cartItems');
 if(!el) return;
 let cart=JSON.parse(localStorage.getItem('cart')||'[]');
 let total=0;
 el.innerHTML=cart.map(i=>{total+=i.price;return `<tr><td>${i.name}</td><td>GH₵ ${i.price}</td></tr>`}).join('');
 const t=document.getElementById('total');
 if(t) t.textContent=total;
}
function checkout(){
 alert('Order placed successfully!');
 localStorage.removeItem('cart');
 window.location='index.html';
}
window.onload=renderCart;
