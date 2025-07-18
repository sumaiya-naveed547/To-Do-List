document.addEventListener("DOMContentLoaded",function(){
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-group");

    window.addTask = function() {
        if(inputBox.value === '') {
            alert("You must write something into the box!");
            return;
        }

        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            

            let deletebtn = document.createElement('span');
            deletebtn.textContent = 'x';
            li.appendChild(deletebtn);

         
            deletebtn.onclick = function(){
                li.remove()
            }
        }

        inputBox.value = ''; 
        saveData();
    }

    listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }

        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    },false)

    
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);
    }

    function showTask(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();
    
});


