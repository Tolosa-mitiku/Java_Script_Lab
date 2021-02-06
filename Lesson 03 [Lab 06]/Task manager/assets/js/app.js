// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The UL
const clearBtn = document.querySelector('.clear-tasks'); //the all task clear button

const reloadIcon = document.querySelector('.fa'); //the reload button at the top navigation 
const sort = document.querySelector('#sort');
const ascend = document.querySelector('#ascend');
const descend = document.querySelector('#descend');
//DB variable 

let DB;
// filter and sort buttons are assigned eventlisteners and are given appropriate functions
filter.addEventListener('keyup', filtertask);
ascend.addEventListener('click', ascender);
descend.addEventListener('click', descender);



// Ascender sorts the files in ascending order.
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
// Descender sorts the files in descending order.

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



// Add Event Listener [on Load]
document.addEventListener('DOMContentLoaded', () => {
    // create the database
    let TasksDB = indexedDB.open('tasks', 1);

    // if there's an error
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
        // if everything is fine, assign the result to the instance
    TasksDB.onsuccess = function() {
        // console.log('Database Ready');

        // save the result
        DB = TasksDB.result;

        // display the Task List 
        displayTaskList();
    }

    // This method runs once (great for creating the schema)
    TasksDB.onupgradeneeded = function(e) {
        // the event will be the database
        let db = e.target.result;

        // create an object store, 
        // keypath is going to be the Indexes
        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        // createindex: 1) field name 2) keypath 3) options
        objectStore.createIndex('taskname', 'taskname', { unique: false });
        objectStore.createIndex('date', 'date', { unique: false });
        console.log('Database ready and fields created!');
    }

    form.addEventListener('submit', addNewTask);

    function addNewTask(e) {
        e.preventDefault();

        // Check empty entry
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }

        // create a new object with the form info
        let newTask = {
            taskname: taskInput.value,
            date: new Date(),
        }

        // Insert the object into the database 
        let transaction = DB.transaction(['tasks'], 'readwrite');
        let objectStore = transaction.objectStore('tasks');

        let request = objectStore.put(newTask);

        // on success
        request.onsuccess = () => {
            form.reset();
        }
        transaction.oncomplete = () => {
            console.log('New appointment added');

            displayTaskList();
        }
        transaction.onerror = () => {
            console.log('There was an error, try again!');
        }

    }

    function displayTaskList() {
        // clear the previous task list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        // create the object store
        let objectStore = DB.transaction('tasks').objectStore('tasks');

        objectStore.openCursor().onsuccess = function(e) {
            // assign the current cursor
            let cursor = e.target.result;

            if (cursor) {

                // Create an li element when the user adds a task 
                const li = document.createElement('li');
                //add Attribute for delete 
                li.setAttribute('data-task-id', cursor.value.id);
                // Adding a class
                li.className = 'collection-item';
                // Create text node and append it 
                li.appendChild(document.createTextNode(cursor.value.taskname));
                // Create new element for the link
                
                const date = document.createElement("p")
                date.className = 'dates'
                date.innerHTML = cursor.value.date;
                date.style.marginLeft = "30%";
                date.style.display = "inline";
                li.appendChild(date);
                const link = document.createElement('a');
                // Add class and the x marker for a 
                link.className = 'delete-item secondary-content';
                link.innerHTML = `
                 <i class="fa fa-remove"></i>
                &nbsp;
                <a href="edit.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a>
                `;
                // Append link to li
                li.appendChild(link);
                // Append to UL 
                taskList.appendChild(li);
                cursor.continue();
            }
        }
    }

    // Remove task event [event delegation]
    taskList.addEventListener('click', removeTask);

    function removeTask(e) {

        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are You Sure about that ?')) {
                // get the task id
                let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
                // use a transaction
                let transaction = DB.transaction(['tasks'], 'readwrite');
                let objectStore = transaction.objectStore('tasks');
                objectStore.delete(taskID);

                transaction.oncomplete = () => {
                    e.target.parentElement.parentElement.remove();
                }

            }

        }

    }

    //clear button event listener   
    clearBtn.addEventListener('click', clearAllTasks);

    //clear tasks 
    function clearAllTasks() {
        let transaction = DB.transaction("tasks", "readwrite");
        let tasks = transaction.objectStore("tasks");
        // clear the table.
        tasks.clear();
        displayTaskList();
        console.log("Tasks Cleared !!!");
    }


});

function filtertask(e) {
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