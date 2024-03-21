const btn = document.getElementById('btn');
const userList = document.getElementById('items');
const Expense = document.getElementById('Expense');
const Description = document.getElementById('Description');
const select = document.getElementById('select');
const msg = document.getElementById('msg');


btn.addEventListener('click', ExpenseTracker);

function ExpenseTracker(event) {
    event.preventDefault();

    const ExpenseAmount = Expense.value;
    const DescriptionName = Description.value;
    const selectthing = select.value;

    const details = {
        ExpenseAmount,
        DescriptionName,
        selectthing
    };

    localStorage.setItem(details.DescriptionName, JSON.stringify(details));
    addItems(details)
}



// AddItems here we are Take input and add to Html 
const addItems = (obj) => {

    if (obj.ExpenseAmount.value === 0 || obj.DescriptionName.value === '' || obj.selectthing.value === '') {
        msg.style.background = 'red';
        msg.innerHTML = 'Please fill the form !';
        setTimeout(() => msg.remove(), 5000)
    }
    else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${obj.ExpenseAmount}Rs - ${obj.DescriptionName} - ${obj.selectthing} - `));
        li.appendChild(deleteButton(li, obj));
        li.appendChild(editButton(li, obj));
        userList.appendChild(li);

        Expense.value = null;
        Description.value = ' ';
        select.value = ' ';
    }
}



// Delete button for deleting Items for browser also localeStrorage

const deleteButton = (li, obj) => {
    const deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = '  Delete  ';
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.DescriptionName);
        userList.removeChild(li);
    }
    return deleteBtn
}




// Edit button for editing items for browser also localestorage

const editButton = (li, obj) => {
    console.log(obj)
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = '  Edit  ';
    editBtn.onclick = () => {
        const data = localStorage.removeItem(obj.email);
        userList.removeChild(li);
        Expense.value = obj.DescriptionName;
        Description.value = obj.ExpenseAmount;
        select.value = obj.selectthing;
    }
    return editBtn
}



// When the page refres all data will showing in the web page

window.addEventListener('load', (event) => {

    const data = Object.keys(localStorage);

    data.forEach((key) => {
        const details = JSON.parse(localStorage.getItem(key));
        addItems(details);
    })

});




