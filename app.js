import { collection, getDocs ,  addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import{db} from "./firebaseConfig.js"

window.addEventListener("load" , getNow)
async function getNow(){
    try {
        const querySnapshot = await getDocs(collection(db, "addData"));
        querySnapshot.forEach((doc) => {
            console.log("doc", doc.data().taskTitle, doc.data().taskDescription);
            SessionMain.innerHTML += `<div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
            <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <img src="./free_logos_dribbble_ph-removebg-preview.png" alt="">
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">${doc.data().taskDescription}</h2>
              <p class="leading-relaxed text-base">${doc.data().taskDescription}</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
              </a>
            </div>
          </div>`
    
        });
    } catch (error) {
        console.log("hello" , error)

    }

}

