import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { auth, db } from "./firebaseConfig.js";

const fullNameElement = document.getElementById("fullName");
const emailElement = document.getElementById("email");
const phoneNumberElement = document.getElementById("phoneNumber");
const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            fullNameElement.textContent = `Full Name : ${userData.fullName}`;
            emailElement.textContent = `Email: ${user.email}`;
            phoneNumberElement.textContent = `Phone: ${userData.phoneNumber || "N/A"}`;
        }
    }
});

logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.replace("./index.html");
});