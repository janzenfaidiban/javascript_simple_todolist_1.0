
/**
 * add data to local storange
 * add data to mySQL
 * 
 * */

const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const cardFooter = document.querySelector('.card-footer');


class item {
    constructor(itemName) {
        // Create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName) {

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('form-control','item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('form-group');

        let editButton = document.createElement('button');
        editButton.innerHTML = `<i class="fa fa-edit"></i>`;
        editButton.classList.add('editButton', 'btn', 'btn-primary', 'btn-sm', 'cursor-pointer', 'mt-2', 'mr-2');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = `<i class="fa fa-remove"></i>`;
        removeButton.classList.add('removeButton', 'btn', 'btn-danger', 'btn-sm', 'cursor-pointer', 'mt-2', 'mr-2');
        
 
        
        cardFooter.appendChild(itemBox);
        // cardFooter.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));

    }

    edit(input) {
        input.disabled = !input.disabled;
    }

    remove(item) {
        cardFooter.removeChild(item);
    }
}

function check() {
    if(input.value != "") {
        new item(input.value);
        input.value = "";
        cardFooter.classList = 'card-footer d-yes';
        
    } 
}

addButton.addEventListener('click', check)
window.addEventListener('keydown', (e) => {
    if(e.which == 13) {
        check();
    }
})
