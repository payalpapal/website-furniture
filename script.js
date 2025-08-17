function updateCartCount(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
  }
  updateCartCount();
  
  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      let card = btn.parentElement;
      let product = {
        name: card.querySelector('h3').innerText,
        price: parseInt(card.querySelector('p')?.innerText || 0)
      };
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(product.name + " added to cart!");
      updateCartCount();
    });
  });