import { collection, getDocs, doc, updateDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

import{db} from "./firebaseConfig.js"




/* var ui = new firebaseui.auth.AuthUI(firebase.auth());
console.log(ui) */

const tableBody = document.getElementById("tableBody")
console.log(tableBody)

window.addEventListener("load" , getAllUser)

async function getAllUser(){
  console.log("getAllUser()")

  const loginUser = JSON.parse(localStorage.getItem("user"))
  if(localStorage.getItem("user") === null){
    window.location.replace("/login.html")
        return
  }
//   else{
//     if(loginUser.type !== "admin"){
//       history.back()
//       return
//     }
//   }

  const docRef = await getDocs(collection(db, "users"))
  docRef.forEach(function(doc){
    const user = doc.data()
      if(user.type !== "admin"){
        console.log("docs" , doc.id , doc.data());
        const rowUI = `<tr>
            <td onclick = {getUsers()} > ${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.type}</td>
            <td>${user.accountActivate ? `<div class="form-check form-switch">
            <input class="form-check-input" onchange = {handleAccountActivation(this)}  type="checkbox" id="${user.uid}" checked>
            </div>` : `<div class="form-check form-switch">
            <input class="form-check-input" onchange = {handleAccountActivation(this)} type="checkbox" id="${user.uid}">
            </div>`
            }</td>
          </tr>`

          tableBody.innerHTML += rowUI

      }
   


  });

}

function getUsers(){
  console.log("getUser()")
}

async function handleAccountActivation(element){
  console.log("handleAccountActivation()" , element.checked)
  console.log("handleAccountActivation()" , element.id)
  try{
    const userRef = doc(db, "users", element.id);
    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, {
    accountActivate: element.checked
  });

  }
  catch(error){
    alert(error.message)
  }
}

window.handleAccountActivation = handleAccountActivation