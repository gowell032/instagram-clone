const input = document.querySelector('.article-comment');
const itemAdd = document.querySelector('.article-comment-btn');
const items = document.querySelector('.items');

function onAdd() {
    const text = input.value;
    if (input.value === '') {
        input.focus();
        return;
    }

    const item = document.createElement('li');
    item.setAttribute('class', 'item');

    const itemId = document.createElement('span');
    itemId.setAttribute('class', 'itemId');
    itemId.innerHTML = 'user';
    
    const itemText = document.createElement('span');
    itemText.setAttribute('class', 'itemText');
    itemText.innerHTML = text;

    const itemDel = document.createElement('button');
    itemDel.setAttribute('class', 'itemDel');
    itemDel.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    itemDel.addEventListener('click', () => {
        items.removeChild(item)
    })

    item.appendChild(itemId);
    item.appendChild(itemText);
    item.appendChild(itemDel);
    items.appendChild(item);
    input.value = '';
    input.focus();
}

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
    return;
});

itemAdd.addEventListener('click', () => {
    onAdd();
})

input.addEventListener('keyup', ()=>{
    input.value ? itemAdd.style.color = '#0195f6' : itemAdd.style.color = '#5fb5f8';
})