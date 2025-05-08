const form = document.getElementById('item-form');
const nameInput = document.getElementById('itemName');
const categoryInput = document.getElementById('itemCategory');
const priceInput = document.getElementById('itemprice');
const list = document.getElementById('itemList');
const totalCosts = document.getElementById('totalCost');
const sortBtn = document.getElementById('sortPrice');

let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

function saveItems(){
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function renderItems(){
    list.innerHTML = '';
    let total = 0;

    items.forEach((items, index) => {
        const li = document.createElement('li');
        li.className = items.bought? 'bought': '';
        li. innerHTML = `
        <div>
        <strong>${items.name}</strong>
        (${item.category}) -$$ {item.price.toFixed(2)}
        </div>
        <div>
        <button onclick="toggleBought(${index})"><i class="fa-solid fa-thumbs-up"></i></button>
        <button onclick="removeItem(${index})"><i class="fa-solid fa-xmark"></i></button>
        </div>

        `;
        list.appendChild(li);
        if(!item.bought)total+=item.price;
    });

    totalCosts.textContent = `Total: $${total.toFixed(2)}`;

}



function add(){
      const addName = nameInput.value.trim();
      const addCategory = categoryInput.value.trim();
      const addPrice = priceInput.value.trim();

      if()
}

function toggleBought(index){
    items[index].bought = !items[index].bought;
    saveItems();
    renderItems();
}

function removeItem(index){
    items.splice(index,1);
    saveItems();
    renderItems();
}

sortBtn.addEventListener('click', () =>{
    items.sort((a,b) => a.price - b.price);
    saveItems();
    renderItems();
});

renderItems();
