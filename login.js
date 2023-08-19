// Import the functions you need from the SDKs you need
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { db, auth } from "./firebaseConfig.js";



const loginBtn = document.querySelector("#login-btn")
loginBtn.addEventListener("click" , login)

async function login(element){
    try {
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value
      console.log(email , password)
      const userLogin = await signInWithEmailAndPassword(auth, email, password)
      console.log(userLogin)
  
        const userRef = doc(db, "users", userLogin.user.uid);
        const docSnap = await getDoc(userRef);

        if (!docSnap.exists()) {
            console.log("No such document!");
            alert("Invalid User")
          }

        console.log("Document Data:", docSnap.data());
        const userData = docSnap.data()
        localStorage.setItem("users" , JSON.stringify(userData))
        if(userData.type === "admin"){
            window.location.replace("/adminDashboard.html")
        }
        else if(userData.type === "Seller"){
              if(!userData.accountActivate){    
                alert("Your account is disabled")
                return
              }
            window.location.replace("/bloggerDashboard.html")
        }
        else if(userData.type === "Customer"){
          if(!userData.accountActivate){
            alert("Your account is disabled")
            return
          }
            window.location.replace("/index.html")
        } 
  
    } catch (error) {
      alert(error.message)
    }
  }