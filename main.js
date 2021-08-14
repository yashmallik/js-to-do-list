let input = document.querySelector(".input");
let listContent = document.querySelector(".listContent")
let form = document.querySelector(".userInput");
let dbArray = []

form.addEventListener("submit", addList)
input.focus()

function addList(e){
    e.preventDefault();
    showList(input.value)
    dbArray.push(input.value)
    input.value=""
    input.focus()  
}
console.log(localStorage.getItem("data"));
function showList(x){
    listContent.insertAdjacentHTML("beforeend",`
    <li>${x} 
    <button onClick="DeleteItem(this)">Delete</button>
     </li>`);

}
// function getdata(){
//     localStorage.setItem("data", dbArray)
//     if(window.localStorage.getItem("data") !== ""){
//        return showList(localStorage.getItem("data"))
//     }
// }

function DeleteItem(itemToDelete) {
    itemToDelete.parentElement.remove()
    localStorage.removeItem("data")
}



