document.addEventListener("DOMContentLoaded", function () {
    
    var newToDoButton = document.querySelector("#newTodoButton")
    var container = document.querySelector(".item-container")
    var elements = document.querySelectorAll(".item")
    var deleteButtons = document.querySelectorAll(".itemIcon")

    function getNewToDo() {
        var newText = prompt("add the description of the new ToDo")
        var divitem = document.createElement("div");
        var newp = document.createElement("p")
        var newi = document.createElement("i")
        
        divitem.appendChild(newp);
        divitem.appendChild(newi);
        divitem.classList.add("item");
        newp.classList.add("itemText");
        newi.classList.add("itemIcon", "icon", "ion-md-close-circle")
        newp.innerText = newText;
        container.appendChild(divitem)
        
        getAllItems()
        getAllDeletes()
    }

    function crossOut(event){
       // event.target.parentElement.classList.toggle("done")
       event.target.parentElement.classList.toggle("done")
    }

    function deleteItem(event){
        event.target.parentElement.remove()
    }

    function getAllItems(){
        elements = document.querySelectorAll(".item")
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", crossOut)
            
        }
    }

    function getAllDeletes(){
        deleteButtons = document.querySelectorAll(".itemIcon")
        for (let i = 0; i < elements.length; i++) {
            deleteButtons[i].addEventListener("click", deleteItem)
            
        }
    }
    

    newToDoButton.addEventListener("click", getNewToDo)
getAllItems()
getAllDeletes()
});







{/* <div class="item">
                <p class="itemText">some text</p>
                
                <i class="itemIcon icon ion-md-close-circle"></i>
                
            </div>
            <hr></hr> */}