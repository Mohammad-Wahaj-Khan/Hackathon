import { collection, getDocs, addDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { db } from "./firebaseConfig.js";

window.addEventListener("load" , getUser)
const sectionParent = document.getElementById("sectionParent")
const addUser = document.querySelector("#task-form")



window.addEventListener("load" , getAllPosts)
async function getAllPosts(){
    try {
        const querySnapshot = await getDocs(collection(db, "addData"));
        querySnapshot.forEach((doc) => {
            console.log("doc", doc.data().taskTitle, doc.data().taskDescription);
            sectionParent.innerHTML += `<div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src="./free_logos_dribbble_ph-removebg-preview.png" alt="">
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${doc.data().taskDescription}</h2>
              <p class="leading-relaxed text-base">${doc.data().taskDescription}</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
              <div class="mt-5">
                <a class=" mr-3 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                class="delete-btn">Delete</a>
                <a class=" text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                class="edit-btn">Edit</a>

                </div>
              </a>
            </div>
          </div>`
    
        });
    } catch (error) {
        console.log("hello" , error)

    }

}

addUser.addEventListener("click" , async(e) => {
     e.preventDefault()
        const taskTitle =  document.getElementById("task-title").value
        const taskDescription = document.getElementById("task-description").value
    const postObject={
        taskTitle,
    taskDescription
    }

    if(!taskTitle && !taskDescription){
        alert("All values must be Filled Out")
        return
    }
     try{
    const docRef = await addDoc(collection(db, "addData"), {
        ...postObject
    });
    console.log("Document written with ID: ", docRef);
    sectionParent.innerHTML+=`
    <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
						<div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
						  <img src="./free_logos_dribbble_ph-removebg-preview.png" alt="">
						</div>
						<div class="flex-grow">
						  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${postObject.taskTitle}</h2>
						  <p class="leading-relaxed text-base">${postObject.taskDescription}</p>
						  <a class="mt-3 text-indigo-500 inline-flex items-center">
                          <div class="mt-5">
                <a class=" mr-3 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                class="delete-btn">Delete</a>
                <a class=" text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                class="edit-btn" >Edit</a>

                </div>
						  </a>
						</div>
					  </div>`
                    //   getReview.unshift(reviewObject)
                    //   localStorage.setItem("review", JSON.stringify(getReview))

     }
     catch(error){
        console.log("insufficient",error)
     }
})


const userName = document.getElementById("userName")
async function getUser(){
    try{
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().fullName);
        userName.innerHTML = doc.data().fullName
});
    }
    catch(error){
        console.log(error.message)
    }
}




// Initialize the page
window.addEventListener("DOMContentLoaded", () => {
    fetchAndDisplayPosts();
    // Add your other initialization logic here
});

const logOut = document.getElementById("logOut");
logOut.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.removeItem("users")
    window.location.replace("/login.html")});
