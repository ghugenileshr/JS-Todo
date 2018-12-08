let ourform = document.getElementById("ourform")
         let ourfield =document.getElementById("ourfield")
         let ourList = document.getElementById("ourList")
 ourform.addEventListener("submit",(e)=>{
 	e.preventDefault()
 	createItem(ourfield.value)
 	
 })
 function createItem(x){
 	let ourHTML = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>.`
 	ourfield.value = ""
 	ourfield.focus()
 
  ourList.insertAdjacentHTML("beforeend",ourHTML)
 }
 function deleteItem(elemntToDelete){
 	elemntToDelete.parentElement.remove()
 }