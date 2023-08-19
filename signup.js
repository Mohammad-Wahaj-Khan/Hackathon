// Import the functions you need from the SDKs you need
import {  doc, setDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth ,  createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

import { db, auth } from "./firebaseConfig.js";


const submitBtn = document.querySelector("#signup-btn")
submitBtn.addEventListener("click" , checkPass)
submitBtn.addEventListener("click" , submit)


async function submit(e){
  try {
    const fullName = document.getElementById("full-name").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const userType = document.getElementById("userType")

    if(!fullName || !phoneNumber || !email || !password || !repeatPassword){
        alert("All Fields Must Be Filled Out")
        return
    }

    if(userType.selectedIndex === 0){
        alert("please select user type")
        return
    }
    

    const userAuth = await createUserWithEmailAndPassword(auth, email , password , repeatPassword)
    console.log(userAuth.user.uid)
    const uid = userAuth.user.uid
    const userObject = {
      fullName,
      phoneNumber,
      email,
      accountActivate : true,
      uid,
      type : userType.value
    }


    console.log(userObject)
    const userRef = doc(db, 'users', uid);
    const user = await setDoc(userRef , userObject)


  console.log(user)

  window.location.assign("/login.html")

  } catch (error) {
    console.log(error.message)
    alert(error.message)
  }

}

async function checkPass(){
  const password = document.getElementById("password").value
  const repeatPassword = document.getElementById("repeatPassword").value
  if(password !== repeatPassword){
    
   alert("Password not Match")
   return
  }
  else{
    await submit()
  }
  
}

