import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyA7ncBE778uYiMR7KL5ysSUTqVDfjG8M9E",
  authDomain: "blog-app-cb296.firebaseapp.com",
  projectId: "blog-app-cb296",
  storageBucket: "blog-app-cb296.appspot.com",
  messagingSenderId: "760140323589",
  appId: "1:760140323589:web:713c0dcd1dd2c711f2b56c",
  measurementId: "G-VK44F1CEXQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth}