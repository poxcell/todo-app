document.addEventListener("DOMContentLoaded", function () {

    var newToDoButton = document.querySelector("#newTodoButton")
    var container = document.querySelector(".item-container")
    var elements = document.querySelectorAll(".item")
    var deleteButtons = document.querySelectorAll(".itemIcon")
    var counter = 0;

    function getNewToDo() {
        var newText = prompt("add the description of the new ToDo")
        createNewTodo(newText, container);
    }

    function getOldToDo() {
        for (let i = 0; i < localStorage.length; i++) {
            createNewTodo(localStorage.getItem(i.toString()), container)

        }
    }


   getOldToDo()


    //create new todo
    function createNewTodo(newText, container) {
        // create new items
        var outsideDiv = document.createElement("div");
        var divitem = document.createElement("div");
        var newp = document.createElement("p");
        var newi = document.createElement("i");
        var newhr = document.createElement("hr");
        // append new items to the bottom of the list
        outsideDiv.appendChild(divitem);
        divitem.appendChild(newp);
        divitem.appendChild(newi);
        divitem.classList.add("item");
        newp.classList.add("itemText");
        // sets id to the new icon
        newi.classList.add("itemIcon", "icon", "ion-md-close-circle", "index"+counter.toString());
        newp.innerText = newText;
        outsideDiv.appendChild(newhr);
        container.appendChild(outsideDiv);

        //set text to the new todo
        localStorage.setItem(counter, newText)
        counter++;

        getAllItems()
        getAllDeletes()
    }

    // cross out done todos
    function crossOut(event) {
        // event.target.parentElement.classList.toggle("done")
        event.target.parentElement.classList.toggle("done")
    }

    // deletes todo from view
    function deleteItem(event) {
        var indexnumber = event.target.classList.item(3)
        indexnumber = indexnumber.replace(/\D/g,'');
        
        reSortElements(indexnumber)
        event.target.parentElement.parentElement.remove()
        counter--
        
    }

    // resorts ids and deletes from local memory
     function reSortElements(num){

        num = parseInt(num)

        
        var toDelete = (localStorage.length-1).toString()
        console.log(num)
         for (let i = num; i < localStorage.length-1; i++) {
             
            localStorage.setItem(i, localStorage.getItem((i+1).toString()))
         }
         

       localStorage.removeItem(toDelete)
       

       for (let i = num; i < localStorage.length-1; i++) {
           var bubble = document.querySelector(".index"+i)
           bubble.classList.remove("index"+i)
           bubble.classList.add("index"+(i+1).toString())
        }
       
     }

    // gets all items and adds function to croos out
    function getAllItems() {
        elements = document.querySelectorAll(".item")
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", crossOut)

        }
    }

    // gets all items delete button and add delete function
    function getAllDeletes() {
        deleteButtons = document.querySelectorAll(".itemIcon")
        for (let i = 0; i < elements.length; i++) {
            deleteButtons[i].addEventListener("click", deleteItem)

        }
    }


    newToDoButton.addEventListener("click", getNewToDo)

    getAllItems()
    getAllDeletes()


    function getTodos() {

    }
});