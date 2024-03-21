var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');




// form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event 
filter.addEventListener('keyup', filterItems);

//Add item
function addItem(e) {
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;
    var newDescripion = document.getElementById('description').value;

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // Add tect Node with input value

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDescripion));

    // Create delete button element
    var deleteBtn = document.createElement('button');

    // add classes to delete button

    deleteBtn.classList = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    deleteBtn.style.cssFloat = 'right';
    deleteBtn.style.background = '#d9534f';
    deleteBtn.style.width = '30px'
    deleteBtn.style.height = '30px'
    deleteBtn.style.border = 'none';
    deleteBtn.style.color = 'white';
    deleteBtn.style.borderRadius = '5px'


    // add delele button in li

    li.appendChild(deleteBtn);


    // Append li to  itemlist
    itemList.appendChild(li);


    // Descrition


}



function removeItem(e) {
    e.preventDefault();
    if (e.target.classList.contains("delete")) {
        if (confirm('Are you Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}

// Filter Items
function filterItems(e) {
    e.preventDefault();
    // Convert text to lowerCase
    var text = e.target.value.toLowerCase();
    //Get List
    var items = itemList.getElementsByTagName('li');

    // convert to an array

    Array.from(items).forEach(function (item) {

        var itemName = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;

        if (itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none'
        }
    });
}