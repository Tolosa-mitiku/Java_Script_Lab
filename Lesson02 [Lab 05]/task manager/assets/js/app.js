// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const dot = document.querySelectorAll(".collection-item");
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button
const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
const sort = document.querySelector('#sort');
const ascend = document.querySelector('#ascend');
const descend = document.querySelector('#descend');
var date1 = new Date();
var b;
var c = 0;
var e = 0;

// Add Event Listener  [Form , clearBtn and filter search input ]

// form submit 
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
//   Filter Task 
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener('click', removeTask);
// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

ascend.addEventListener('click', ascender);
descend.addEventListener('click', descender);





// Add New  Task Function definition 
function addNewTask(e) {

    e.preventDefault(); //disable form submission


    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    // Create an li element when the user adds a task 
    const li = document.createElement('li');
    // Adding a class
    li.className = 'collection-item';
    // Create text node and append it 
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new element for the link 
    const date = document.createElement("p")
    date.className = 'dates'
    date1 = new Date();
    date.innerHTML = date1;
    date.style.marginLeft = "30%";
    date.style.display = "inline";
    li.appendChild(date);
    const link = document.createElement('a');
    // Add class and the x marker for a 
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Append to UL 
    taskList.appendChild(li);
    traverse();




}
function ascender() {
    console.log(taskList.children.length)
    for (let index = 0; index < taskList.children.length; index++) {
        for (let index2 = 0; index2 < taskList.children.length; index2++) {
            date1 = taskList.children[index].children[0].textContent
            date2 = taskList.children[index2].children[0].textContent
            console.log(date1)
            console.log(date2)
            if (date1 < date2) {
                b = taskList.children[index].innerHTML
                taskList.children[index].innerHTML = taskList.children[index2].innerHTML
                taskList.children[index2].innerHTML = b
            }
            
        }
    }
}

function descender() {
    console.log(taskList.children.length)
    for (let index = 0; index < taskList.children.length; index++) {
        for (let index2 = 0; index2 < taskList.children.length; index2++) {
            date1 = taskList.children[index].children[0].textContent
            date2 = taskList.children[index2].children[0].textContent
            console.log(date1)
            console.log(date2)
            if (date1 > date2) {
                b = taskList.children[index].innerHTML
                taskList.children[index].innerHTML = taskList.children[index2].innerHTML
                taskList.children[index2].innerHTML = b
            }
            
        }
        
    }
}


    // console.log(d)
    // d.forEach(element => {
    //     d.forEach(element => {
            
    //         e += 1
    //     });
    //     c += 1
    // });
    // date1 = taskList.children[0].children[0].textContent
    // date2 = taskList.children[1].children[0].textContent
    // if (date1 < date2) {
    //     b = taskList.children[0].innerHTML
    //     taskList.children[0].innerHTML = taskList.children[1].innerHTML
    //     taskList.children[1].innerHTML = b
    // }

function traverse() {
    console.log(taskList.firstChildren)
}

// Clear Task Function definition 
function clearAllTasks() {

    //This is the first way 
    // taskList.innerHTML = '';

    //  Second Wy 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}



// Filter tasks function definition 
function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */
    var a;
    var collection1 = document.querySelectorAll('.collection-item');
    collection1.forEach(element => {
        element.style.display = "block";
    });


    collection1.forEach(element => {
        console.log(filter.value)
        console.log(element.firstChild.toString())
        a = element.firstChild.textContent
        if (a.indexOf(filter.value)==-1) {
            element.style.display = "none";
        }
        e.preventDefault();
    });

}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}


// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}