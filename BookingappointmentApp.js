const btn = document.getElementById('btn');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');



myForm.addEventListener('submit', onSubmit);

// Storare data into localStrorage take all input values
function onSubmit(event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;
    const number = numberInput.value;

    const StorageData =
    {
        name,
        email,
        number
    }

    

    localStorage.setItem(StorageData.email, JSON.stringify(StorageData));
    addItem(StorageData)
}




// Add Items here 
var addItem = (obj) => {
    console.log(obj.name)
    if (obj.name.value === '' || obj.email.value === '' || obj.number.value === '') {
        msg.innerHTML = 'Please feel all the fields';
        msg.style.background = 'red'
        msg.style.borderRadius = '12px'
        msg.style.textAlign = 'center'
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.style.backgroundColor = " #317773";
        li.appendChild(document.createTextNode(`${obj.name} - ${obj.email} - ${obj.number} - `));
        li.appendChild(deleteBtn(li, obj))
        li.appendChild(editButton(li, obj))
        userList.append(li);

        nameInput.value = '';
        emailInput.value = '';
        numberInput.value = '';
    }
}


// Delele button

const deleteBtn = (li, obj) => {
    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.style.marginLeft = '3px'
    deleteBtn.style.width = '45px'
    deleteBtn.style.height = '20px'
    deleteBtn.style.textAlign = 'center'
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.email);
        userList.removeChild(li);
    }
    return deleteBtn;
}



// Edit button
const editButton = (li, obj) => {
    let EditBtn = document.createElement('input');
    EditBtn.type = 'button';
    EditBtn.value = 'Edit';
    EditBtn.style.marginLeft = '3px'
    EditBtn.style.width = '45px'
    EditBtn.style.height = '20px'
    EditBtn.style.textAlign = 'center'
    EditBtn.style.marginLeft = '10px'

    EditBtn.onclick = () => {

        const data = localStorage.removeItem(obj.email);
        userList.removeChild(li);
        nameInput.value = obj.name;
        emailInput.value = obj.email;
        numberInput.value = obj.number;
    }
    return EditBtn
}



///DOMContentLoaded for when any user refresh the page all the data get back

document.addEventListener(('DOMContentLoaded'), (event) => {
    const data = Object.keys(localStorage);

    data.forEach((key) => {
        const details = JSON.parse(localStorage.getItem(key));
        addItem(details);
    })
}) 